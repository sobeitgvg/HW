import React from "react";
import './massage.css';

export const Button = ({title, onButtonClick}) => {
return <button onClick={()=> onButtonClick (`Добрый день`)} className="btn-main">{title}</button>
}