import { useState } from "react";

export default function DiscountsExpiration(props) {
    const [smth, setSmth] = useState([]);
    
    const background = {
        position: "absolute",
        width: "1440px",
        height: "678px",
        left: "0px",
        top: "0px",
        /* Neutral / 100 */
        // backgroundColor: "#F9FAFC"
    }
    
    return(
        <div style={background}>Hello</div>
    )
}