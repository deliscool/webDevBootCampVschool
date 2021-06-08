import React from "react"
import friends from "../FriendData"
import Friend from "./Friend"

function Friendlist() {
    const friendComp =friends.map(function(friend, index) {
        return <Friend key={index} friendData={friend}/>
    })

    return (
        <div className="friendList">
            <h1>Friends</h1>
            {friendComp}
        </div>
    )
}

export default Friendlist