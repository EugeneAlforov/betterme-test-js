import React from "react";
import "./peopleSays.css";


const PeopleSays  = (props) => {
    const {
        id,
        title,
        data,
        name,
        subtitle,
    } = props;

    
    return (
        <>
        <div key={id}>
            <h6>{title}</h6>
            <span>{data}</span>
            <p>{name}</p>
            <p>{subtitle}</p>
        <h2>People</h2>
       
        </div>
       
        </>
        
    )
}

export default PeopleSays