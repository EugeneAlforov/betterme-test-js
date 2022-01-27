import "./NewPriceBox.css"

export const NewPriceBox = (props) => {
    return(
        <div className="rectangle">
            <div className="newPriceBox">
                <>New Price!</>
            </div>
            <div className="price">
                <p>$4.99</p>
            </div>
        </div>
    )
}

export default NewPriceBox;