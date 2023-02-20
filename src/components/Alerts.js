import React from 'react'

export default function alerts(props) {

    const capitilize = (word) => {
        let temp = word;
        return temp.charAt(0).toUpperCase() + temp.slice(1);
    }

    
    return (
        props.alert &&
        <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitilize(props.alert.type)}</strong>: {props.alert.msg}
            </div>
        </div>
    )
}
