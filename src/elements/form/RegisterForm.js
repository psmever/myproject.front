import React from "react";
import { RegisterButton, FormErrorMessage } from 'elements';

export const RegisterForm = ({
    handleClickButton,
    handleOnchangeItem,
    errorMessage,
    registerRedy
}) => {

    let ref_register_useremail = React.createRef();
    let ref_register_username = React.createRef();
    let ref_register_password = React.createRef();
    let ref_register_repassword = React.createRef();

    const handleOnKeyPressItem = (e) => {
        if (e.nativeEvent.key === "Enter") {
            switch (e.target.name) {
                case 'register_useremail':
                    ref_register_username.current.focus();
                    break;
                case 'register_username':
                    ref_register_password.current.focus();
                    break;
                case 'register_password':
                    ref_register_repassword.current.focus();
                    break;
                case 'register_repassword':
                    // handleGoRegister();
                    break;

                default:
                    break;
            }
        }
    };

    return (
        <div>
        <form>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="이메일을 입력해 주세요."
                    name="register_useremail"
                    onChange = { handleOnchangeItem }
                    onKeyPress = { handleOnKeyPressItem }
                    ref = { ref_register_useremail }
                />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="사용할 이름을 입력해 주세요."
                    name="register_username"
                    onChange = { handleOnchangeItem }
                    onKeyPress = { handleOnKeyPressItem }
                    ref = { ref_register_username }
                />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="사용할 비밀 번호를 입력해주세요."
                    name = "register_password"
                    autoComplete="register_password"
                    onChange = { handleOnchangeItem }
                    onKeyPress = { handleOnKeyPressItem }
                    ref = { ref_register_password }
                />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="비밀번호 확인"
                    name="register_repassword"
                    autoComplete="register_repassword"
                    onChange = { handleOnchangeItem }
                    onKeyPress = { handleOnKeyPressItem }
                    ref = { ref_register_repassword }
                />
            </div>
            {
                <FormErrorMessage errorMessage={errorMessage}/>
            }
            <RegisterButton buttonClick={handleClickButton} isReady={registerRedy}/>
        </form>
        </div>
    );
};
