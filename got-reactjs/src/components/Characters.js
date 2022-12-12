import React from "react";

const Characters = ({ characters = [] }) => {
    return (
        <div className="box">
        {
            characters.map((item, index) => (
                <div className="card">
                    <div key={index} className="imgBx">
                        <img src={item.imageUrl} alt="images" />
                    </div>
                    <div className="details">
                        <h2>{item.fullName}<br /><span>{item.title}</span></h2>
                    </div>
                </div>
            ))
        }
        </div>
    );
};
export default Characters;