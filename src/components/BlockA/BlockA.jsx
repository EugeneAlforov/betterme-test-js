import Button from "../common/Button/Button"
import classes from "./BlockA.module.css"

export const BlockA = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div>
                    Discount expires at
                </div>
                <div>
                    cards
                </div>
                <Button handleClick={() =>console.log("test")} />
            </div>
        </div>
    )
}