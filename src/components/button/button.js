import React from "react";
import './styles.css'

function Button(props) {
    return (
        <div className="containerButton">
        <button onClick={() => props.onClick(20)} className={props.active ? 'button' : 'disabledButton'}>{props.name}</button>
        <span>Seus dados estão a salvo</span>
        </div>
    )
}

export default Button