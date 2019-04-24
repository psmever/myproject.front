import React from "react";
import { SaveButton } from 'elements/button';

export const AccountPersonalForm = ({
    userEmail,
    userPhoneNumber,
    userAddress,
    handleSaveButton,
    handleOnchangeItem
}) => {
    return (
        <div>
            <form className="form-horizontal">
                <h3><i className="fa fa-square"></i> 개인 정보</h3>
                <div className="form-group">
                    <label htmlFor="user_email" className="col-sm-3 control-label">이메일</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" disabled
                            name="user_email"
                            value={userEmail}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="user_phone_number" className="col-sm-3 control-label">전화번호</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control"
                            name="user_phone_number"
                            value={userPhoneNumber}
                            onChange = {handleOnchangeItem}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="user_address" className="col-sm-3 control-label">주소</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control"
                            name="user_address"
                            value={userAddress}
                            onChange = {handleOnchangeItem}
                        />
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