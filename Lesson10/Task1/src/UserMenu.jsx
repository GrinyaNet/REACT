import React from 'react';

const UserMenu = ({userDate}) => {
    if (!userDate) {
        return null;
    }

const { name, avatar_url } = userDate;

  return (
    <div className="menu">
      <span className="menu__greeting">{name}</span>
      <img
        alt="User Avatar"
        src={avatar_url}
        //src="https://avatars1.githubusercontent.com/u/9919?v=4"
        className="menu__avatar"
      />
    </div>
  );
};

export default UserMenu;
