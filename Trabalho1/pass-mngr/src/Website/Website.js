import React from 'react';

const website = (props) => {
    return (
        <div>
            <p>Website: {props.website} <br></br> Password: {props.password}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default website;