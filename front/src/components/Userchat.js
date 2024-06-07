import React from "react";

const Userchat = ({ data, classname}) => {
    return (
        <div className={`${classname}`}>
            <h2> {data.Username}: {data.message} </h2>
        </div>
    )
};

export default Userchat;