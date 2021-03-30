import Button from "../common/Button/Button"
import classes from "./BlockA.module.css"
import {handleScroll} from "../../helpers/smoothScroll";
import usatoday from "../../assets/icons/usatoday.svg";
import forbes from "../../assets/icons/forbes.svg"
import wsj from "../../assets/icons/wsj.svg"
import nypost from "../../assets/icons/nypostlogo.svg"
import mashable from "../../assets/icons/mashable.svg"

export const BlockA = () => {

    return (
        <div className={classes.wrapper} id="blockA">
            <div className={classes.content}>
                <div className={classes.left}>
                    Discount <span style={{color: "#50C9F5"}}>expires</span> at
                    09:59
                <Button handleClick={() => handleScroll("blockB")} />
                </div>
                <div className={classes.right}>
                    <div className={classes.bottomCard}>
                        Standard Price
                        <div className={classes.bottomPrice}>
                            $40
                        </div>
                    </div>
                    <div className={classes.topCard}>
                        New price!
                        <div className={classes.topPrice}>
                            $4.99
                        </div>
                    </div>
                </div>
    
            </div>
            <div className={classes.brands}>
                <p className={classes.brandsTitle}>As feautured in:</p>
                <div className={classes.logoWrapper}>
                    <img src={usatoday} />
                    <img src={forbes}/>
                    <img src={wsj} />
                    <img src={nypost}/>
                    <img src={mashable}/>
                </div>
            </div>
        </div>
    )
}