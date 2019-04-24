import React from "react";
import { LoginButton, RegisterButton } from 'elements/button';


export const LoginForm = ({ handleOnchangeItem, loginButton, registerButton }) => {

    let ref_login_useremail = React.createRef();
    let ref_login_password = React.createRef();

    const handleOnKeyPressItem = (e) => {
        if (e.nativeEvent.key === "Enter") {
            switch (e.target.name) {
                case 'login_email':
                ref_login_password.current.focus();
                    break;
                case 'login_password':
                    loginButton();
                    break;

                default:
                    break;
            }
        }
    };

    return (
        <form>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="이메일을 입력해 주세요."
                    name="login_email"
                    onChange = {handleOnchangeItem}
                    onKeyPress = {handleOnKeyPressItem}
                    ref={ref_login_useremail}
                />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="비밀번호를 입력해 주세요."
                    name="login_password"
                    onChange = {handleOnchangeItem}
                    onKeyPress = {handleOnKeyPressItem}
                    ref={ref_login_password}
                />
                <div className="clearfix"></div>
            </div>
            <div className="form-group">
                <LoginButton buttonClick={loginButton}/>
                <RegisterButton buttonClick={registerButton} isReady={true}/>
            </div>
        </form>
    );
};
