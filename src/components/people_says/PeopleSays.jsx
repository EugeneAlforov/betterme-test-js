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
        <div key={id} className="review">
            
            <div>
            <h6 className="review-title">{title}</h6>
            <span className="review-data">{data}</span>
            <p className="review-name">{name}</p>
            </div>
           
            <p className="review-subtitle">{subtitle}</p>
       
       
        </div>
       
        </>
        
    )
}

export default PeopleSays