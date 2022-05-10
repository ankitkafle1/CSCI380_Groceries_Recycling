import React from "react";
import SocialMedia from "../SocialMedia";
const Footer =()=>{
    return ( 
        <div className="footer">
            <SocialMedia/>
            <div className="team-container">
                    <h4 className="team-title">Team Members</h4>
                    <div className="members">
                        <i className="member">Name Name</i>
                        <i className="member">Name Name</i>
                        <i className="member">Name Name</i>
                        <i className="member">Name Name</i>
                        <i className="member">Name Name</i>
                    </div>
            </div>
        </div>
    )
}
export default Footer