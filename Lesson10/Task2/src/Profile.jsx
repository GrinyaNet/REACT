import React from "react";
import UserForm from "./UserForn.jsx";

const Profile = ({ userData, handleChange }) => {
    <div className="column">
        <UserForm userData={userData} handleChange={handleChange}/>
    </div>
}

export default Profile;