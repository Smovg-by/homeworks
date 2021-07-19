

import { currentThemeType } from "../h10/bll/switchThemeReducer";
import DiscreteSlider from "./common/DiscreteSlider";
import s from "./HW12.module.css";

type HW12PropsType = {
    theme: currentThemeType
}

export function HW12(props: HW12PropsType) {

    return (

        <div className={s[props.theme + '']}>
            <hr />
            <span className={s[props.theme + '-text']}>
                homeworks 12
            </span>
            <DiscreteSlider />
            <hr />
        </div>
    );
}

export default HW12;
