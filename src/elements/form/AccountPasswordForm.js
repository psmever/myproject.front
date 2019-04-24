import React from "react";
import { SaveButton } from 'elements/button';

export const AccountPasswordForm = ({
    handleSaveButton,
    handleOnchangeItem
}) => {
    return (
        <div>
            <form className="form-horizontal">
                <h3><i className="fa fa-square"></i> 비밀 번호 변경</h3>
                <div className="form-group">
                    <label className="col-sm-3 control-label">기존 비밀 번호</label>
                    <div className="col-sm-4">
                        <input type="password" className="form-control"
                            name="now_password"
                            onChange = {handleOnchangeItem}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="new_password" className="col-sm-3 control-label">새 비밀 번호</label>
                    <div className="col-sm-4">
                        <input type="password" className="form-control"
                            name="new_password"
                            onChange = {handleOnchangeItem}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="new_repassword" className="col-sm-3 control-label">비밀 번호 확인</label>
                    <div className="col-sm-4">
                        <input type="password" className="form-control"
                            name="new_repassword"
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