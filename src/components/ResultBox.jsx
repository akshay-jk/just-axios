import React from "react";

const ResultBox = (props) => {
    const propData = props.userData;
    return (
        <div>
            <p key={propData.id}> {propData.email} </p>
        </div>
    )
}

export default ResultBox;