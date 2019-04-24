import React from "react";
import * as Helper from 'lib/Helper';

export const AccountHome = ({
    lastLoginDate,
    lastLoginDateString,
    registDate,
    userAddress,
    userBirthday,
    userEmail,
    userGender,
    userGenderCodeName,
    userIntro,
    userName,
    userPhoneNumber,
    userUid,
    userWebSite,
    userProfileImage,
    handleProfileImageOnchange,
    handleProfileImageButton
}) => {
    let userIntroText;
    if( Helper.isEmpty(userIntro) === false )
    {
        userIntroText = userIntro.split(/\r\n|\r|\n/).map((item, key) => {
            return (
                <p key={key}>{item}</p>
            )
        })

    } else {
        userIntroText = '';

    }

    return (
        <div className="tab-pane profile active" id="profile-tab">
            <div className="row">
                <div className="col-md-3">
                    <div className="user-info-left">
                        <img src={userProfileImage} alt="ProfilePicture" />
                        <h2>{userName}.</h2>
                        <div className="contact">
                            <p>
                                <span className="file-input btn btn-azure btn-file">
                                    프로필 사진 선택 <input type="file" name="select_file" onChange={handleProfileImageOnchange} />
                                </span>
                            </p>
                            <p><button type="button" className="btn btn-blue active" onClick={handleProfileImageButton}>변경</button></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="user-info-right">
                        <div className="basic-info">
                            <h3><i className="fa fa-square"></i> 기본 정보</h3>
                            <p className="data-row">
                                <span className="data-name">사용자이름</span>
                                <span className="data-value">{userName}</span>
                            </p>
                            <p className="data-row">
                                <span className="data-name">생일</span>
                                <span className="data-value">{userBirthday}</span>
                            </p>
                            <p className="data-row">
                                <span className="data-name">성별</span>
                                <span className="data-value">{userGenderCodeName}</span>
                            </p>
                            <p className="data-row">
                                <span className="data-name">웹사이트</span>
                                <span className="data-value"><a href="#account">{userWebSite}</a></span>
                            </p>
                            <p className="data-row">
                                <span className="data-name">Last Login</span>
                                <span className="data-value">{lastLoginDateString}</span>
                            </p>
                            <p className="data-row">
                                <span className="data-name">Date Joined</span>
                                <span className="data-value">{registDate}</span>
                            </p>
                        </div>
                        <div className="contact_info">
                            <h3><i className="fa fa-square"></i> 개인 정보</h3>
                            <p className="data-row">
                                <span className="data-name">이메일</span>
                                <span className="data-value">{userEmail}</span>
                            </p>
                            <p className="data-row">
                                <span className="data-name">전화번호</span>
                                <span className="data-value">{userPhoneNumber}</span>
                            </p>
                            <p className="data-row">
                                <span className="data-name">주소</span>
                                <span className="data-value">{userAddress}</span>
                            </p>
                        </div>
                        <div className="about">
                            <h3><i className="fa fa-square"></i> 소개</h3>
                            {userIntroText}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};






