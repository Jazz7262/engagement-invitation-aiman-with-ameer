import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mr. Panchi Nazeer Ahmed</h2>

                {/* <h5 className="address">
                    W/O Al-Haaj Khanbu Abdul Aleem Sahab,
                    <br />
                    Retd. Teacher and Pesh Imam
                </h5> */}
                <h5 className="address mb-3">
                    H.No.: 2/160, Bharpet,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> AP - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 77801 80731.
                    {/* <br />
                    +91 98856 34576. */}
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
