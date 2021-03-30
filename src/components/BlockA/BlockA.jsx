import Button from "../common/Button/Button"
import classes from "./BlockA.module.css"
import {handleScroll} from "../../helpers/smoothScroll";

export const BlockA = () => {

    return (
        <div className={classes.wrapper} id="blockA">
            <div className={classes.content}>
                <div className={classes.left}>
                    Discount expires at
                    09:59
                <Button handleClick={() => handleScroll("blockB")} />
                </div>
                <div className={classes.right}>
                    cards
                </div>
            </div>
        </div>
    )
}