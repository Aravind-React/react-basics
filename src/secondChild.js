import React from 'react';

const secondChild = (props) => {
    return (
        <div>
            <button onClick={() => props.updateHobby("dancing")}> child 2</button>
        </div>
    )
}

export default secondChild;
