import React from "react";
import Comment from "./Comment";
import UserAvatar from "./Avatar";


 const userInfo = {
    name: 'Tom',
     avatarUrl: 'https://avatarsl.githubusercontent.com'
 };


const App = () => {
    return (
<Comment user={userInfo} text="God job!" date={new Date('2019-01-01T11:32:19.566Z')} />
    )
};

export default App;