import axios from 'axios';
import * as Helper from "lib/Helper";

class Service {
    constructor(config) {

        let axiosInstance = axios.create({
            baseURL: 'http://psmever.dlinkddns.com:4040/service',
            timeout: 20000,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Client-Type': 'C01010'
            }
        });

        let initType = '';

        axiosInstance.interceptors.response.use(this.handleSuccess,this.handleError);
        this.axiosInstance = axiosInstance;
        this.initType = initType;
    }

	async init(e) {
        this.initType = e.initType ? e.initType : '';

        if (e.method === 'get') {
            return this.axiosInstance.get(e.url, e.data);
        } else if (e.method === 'post') {
            return this.axiosInstance.post(e.url, e.data);
        }
	}

    handleSuccess = (e) => {
        if(this.initType === 'alert') {
            Helper.globalSuccessAlert1({
                text: e.data.message
            });
            return {
                initState: true
            };
        } else if (this.initType === 'message') {
            return {
                initState: true,
                message: e.data.message
            };
        } else {
            return {
                initState: true,
                payload: e.data
            };
        }
    };

    handleError = (error) => {
        if (error.response) {
            console.debug("::error.response:: ", error.response);
            const errorMessage = (error.response.data.message) ? error.response.data.message : '잘못된 정보 입니다.';
            if(this.initType === 'alert') {
                Helper.globalSuccessAlert1({
                    text: errorMessage
                });
                return {
                    initState: false
                };
            } else if (this.initType === 'message') {
                return {
                    initState: false,
                    message: errorMessage
                };
            } else {
                return {
                    initState: false,
                    payload: error.response.data
                };
            }
        } else if (error.request) {
            console.debug("::error.request:: ", error);
            const errorRequestMessage = '알수 없는 에러 입니다.';
            if(this.initType === 'alert') {
                Helper.globalErroraAlert({text: errorRequestMessage});
                return {
                    initState: false
                };
            } else if (this.initType === 'message') {
                return {
                    initState: false,
                    message: errorRequestMessage
                };
            } else {
                return {
                    initState: false,
                    payload: {
                        message: errorRequestMessage
                    }
                };
            }
        } else {
            console.debug("::defaultApiPost:: else error ", error);
        }

        return {
            status: false
        }
    };




}




export default new Service();