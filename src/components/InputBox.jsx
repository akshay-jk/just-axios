import React from "react";

const InputBox = (props) => {
    return (
        <div>
            <p>Type the ID here</p>
            <input type="text" placeholder="Only nymbers please" onChange={props.searchKey} />
        </div>
    )
}

export default InputBox;