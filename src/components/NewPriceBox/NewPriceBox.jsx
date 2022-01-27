import "./NewPriceBox.css"

export const NewPriceBox = (props) => {
    return(
        <div className="rectangle">
            <div className="newPriceBox">
                <p className="newPriceText">New Price!</p>
            </div>
            <div className="price">
                <p className="priceLabel">$4.99</p>
            </div>
        </div>
    )
}

export default NewPriceBox;