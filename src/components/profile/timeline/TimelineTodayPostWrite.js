import React, { Component } from "react";
import * as Helper from 'lib/Helper';
import * as API from 'lib/API';
import { TodayWriteForm } from 'elements';

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
            <div>
                <TodayWriteForm
                    ONCHANGE_CONTENTS = {this._handleOnChangeTimeLineContents}
                    ONCHANGE_SELECT_IMAGE = {this._handleOnChangeTodayImage}
                    CONTENTS_VALUE = {this.state.today_contents}
                    ONCLICK_POST_BUTTON = {this._handleClickTimeLinePostButton}
                    SELECT_IMAGE_URL = {this.state.selectImageInfo.image_url}
                />
            </div>
        )
    }
};

TimelineTodayPostWrite.defaultProps = {
    USER_UID:'',
};


export default TimelineTodayPostWrite;


