import React from "react";
import { SaveButton, BirthdaySelect , DefaultSelect } from 'elements';

export const AccountBasicForm = ({
    userName,
    userGender,
    UserWebSite,
    userIntro,
    userBirthYear,
    userBirthMonth,
    userBirthDay,
    handleOnchangeItem,
    genderSelectData,
    handleSaveButton
}) => {

    return (
        <div>
            <form className="form-horizontal">
                <h3><i className="fa fa-square"></i> 기본 정보</h3>
                <div className="form-group">
                    <label htmlFor="user_name" className="col-sm-3 control-label">사용자 이름</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control"
                            name="user_name"
                            value={userName}
                            onChange = {handleOnchangeItem}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="user_gender" className="col-sm-3 control-label">성별</label>
                    <div className="col-sm-4">
                        <DefaultSelect
                            handleOnchange={handleOnchangeItem}
                            selectValue={userGender}
                            optionData={genderSelectData}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="user_gender" className="col-sm-3 control-label">성별</label>
                    <div className="col-sm-4">
                        <BirthdaySelect
                            selectvalue_birthyear={userBirthYear}
                            selectvalue_userbirthmonth={userBirthMonth}
                            selectvalue_userbirthday={userBirthDay}
                            handleOnchange={handleOnchangeItem}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="user_web_site" className="col-sm-3 control-label">웹사이트</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control"
                            name="user_web_site"
                            value={UserWebSite}
                            onChange = {handleOnchangeItem}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="user_intro" className="col-sm-3 control-label">소개</label>
                    <div className="col-sm-4">
                        <textarea className="form-control" rows="5" placeholder="소개"
                            name="user_intro"
                            value={userIntro}
                            onChange = {handleOnchangeItem}
                        >

                        </textarea>
                    </div>
                </div>
            </form>
            <p className="text-center">
                <SaveButton
                    buttonClick={handleSaveButton}
                />
            </p>
        </div>
    );
};