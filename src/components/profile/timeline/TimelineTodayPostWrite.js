import React, { Component } from "react";
import * as Helper from 'lib/Helper';
import * as API from 'lib/API';


export class TimelineTodayPostWrite extends Component {

    constructor(props) {

        super(props);

        this.state = {
            state: true,
            today_contents: '',
            selectImageInfo: {
                image_upload_idx: '',
                image_url: ''
            }
        }
    }

    componentDidUpdate () {
        // console.debug({
        //     state: this.state,
        //     props: this.props
        // });
    }

    _handleClickTimeLinePostButton = async (e) => {
        e.preventDefault();
        const todayContentsData = {
            user_uid: this.props.USER_UID,
            today_contents: this.state.today_contents,
            image_upload_idx: this.state.selectImageInfo.image_upload_idx
        }
        const saveTodayDataResult = await API.postUserProfileTimeLineTodaySave(todayContentsData);
        if(saveTodayDataResult.status === false) {
            Helper.globalAlert({text: saveTodayDataResult.message})
        } else {
            this.props.TIME_LIST_POST_SUCCESS();

            this.setState({
                today_contents: '',
                selectImageInfo: {
                    image_upload_idx: '',
                    image_url: ''
                }
            });
        }
    }


    _handleOnChangeTodayImage = async (e) => {
        const todayImageFile = e.target.files[0];
        if(Helper.isEmpty(todayImageFile.name) === false && Helper.isEmpty(todayImageFile.size) === false && Helper.isEmpty(todayImageFile.type) === false) {

            let imageFormData = new FormData();
            imageFormData.append('user_uid', this.props.USER_UID);
            imageFormData.append('today_image', todayImageFile);

            const saveDataResult = await API.postUserProfileTimeLineTodayPhotoSave(imageFormData);

            if(saveDataResult['status'] === false) {
                Helper.globalAlert({text: saveDataResult.message})
            } else {
                this.setState({
                    selectImageInfo: saveDataResult.data
                });
            }
        }
    }

    _handleOnChangeTimeLineContents = (e) => {
        this.setState({
            today_contents: e.target.value
        });
    }

    render() {

        return (
            <div className="box profile-info n-border-top">
                <form>
                    <textarea className="form-control input-lg p-text-area" rows="5" placeholder="Whats in your mind today?"
                        onChange = {this._handleOnChangeTimeLineContents}
                        value = {this.state.today_contents}
                    ></textarea>
                </form>
                <div className="box-footer box-form">
                <ul className="nav nav-pills">
                        <li>
                            <span className="file-input btn btn-azure btn-file">
                                사진 선택 <input type="file" name="select_image" onChange={this._handleOnChangeTodayImage} />
                            </span>
                        </li>
                        <li>
                        <button type="button" className="btn btn-azure pull-right"
                        onClick={this._handleClickTimeLinePostButton}
                    >Post </button>
                        </li>
                    </ul>

                    {
                        Helper.isEmpty(this.state.selectImageInfo.image_url) === false ?
                        (
                            <ul className="nav nav-pills">
                                <li>
                                    <div className="box-body" style={{display: 'block'}}>
                                        <img className="img-responsive timeline-post-img-center" src={this.state.selectImageInfo.image_url} alt=""/>
                                    </div>
                                </li>
                            </ul>
                        )
                        :
                        (
                            <ul className="nav nav-pills">
                            </ul>
                        )
                    }

                </div>
            </div>
        )
    }
};

TimelineTodayPostWrite.defaultProps = {
    USER_UID:'',
};


export default TimelineTodayPostWrite;


