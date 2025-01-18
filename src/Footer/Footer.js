import React from "react";
import "./footer.css"

function Footer(props) {
    return (
        <div className="footerBottom">
            <div className="footerWrapper">
                <h2 className="best_score">Click game field before start</h2>
                <h2 className="best_score">Your best score: {localStorage.getItem('bestScore')}</h2>
            </div>
        </div>
    )
}

export default Footer;