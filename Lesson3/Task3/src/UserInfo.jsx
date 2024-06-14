import React from "react";
import UserAvatar from "./Avatar";
import './userInfo.scss';
import './userInfoName.scss';

const UserInfo = props => {
return (
<div className="user-info">
                <UserAvatar avatarUrl={props.user.avatarUrl}
                name={props.user.name} author={props.user.author}/>
                <div className="user-info__name">
                    {props.user.name}
                    </div>
                    </div>
)
}

export default UserInfo;