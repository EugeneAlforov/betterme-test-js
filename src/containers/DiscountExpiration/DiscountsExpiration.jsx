import Header from "../../components/header/header";
import NewPriceBox from "../../components/NewPriceBox/NewPriceBox"
import DiscountsExpirationLabel from "../../components/DiscountExpirationLabel/DiscountExpires"
import Timer from "../../components/Timer/Timer"
import Button from "../../components/Button/Button"
import "./DiscountExpiration.css"

export default function DiscountsExpiration(props) {
    // const background = {
    //     position: "absolute",
    //     width: "1440px",
    //     height: "678px",
    //     left: "0px",
    //     top: "0px",
    // }
    
    return(
        <div className="discountExpBox">
            <Header />
            <div>
            <DiscountsExpirationLabel />
            <Timer />
            <Button />
            </div>
            <div>
            <NewPriceBox />
            </div>
         

        </div>
    )
}