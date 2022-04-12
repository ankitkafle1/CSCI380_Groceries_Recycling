import React from "react";
import SocialMedia from "../SocialMedia";
const Footer =()=>{
    return ( 
        <div className="footer">
            <SocialMedia/>
            <div className="team-container">
                    <h4 className="team-title">Team Members</h4>
                    <div className="members">
                        <i className="member">Ankit Kafle</i>
                        <i className="member">Asmeeta Rana</i>
                        <i className="member">Jonh Alkbun</i>
                        <i className="member">Mr. B</i>
                        <i className="member">Mrs. K</i>
                    </div>
            </div>
        </div>
    )
}
export default Footer