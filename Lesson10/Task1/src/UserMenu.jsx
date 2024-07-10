import React from 'react';

const UserMenu = ({userDate}) => {
    if (!userDate) {
        return null;
    }

const { name, avatar_url } = userDate;

  return (
    <div class="menu">
      <span class="menu__greeting">{name}</span>
      <img
        alt="User Avatar"
        src={avatar_url}
        //src="https://avatars1.githubusercontent.com/u/9919?v=4"
        class="menu__avatar"
      />
    </div>
  );
};

export default UserMenu;
