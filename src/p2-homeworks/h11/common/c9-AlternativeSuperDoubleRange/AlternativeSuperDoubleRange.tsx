import React, {
    DetailedHTMLProps,
    InputHTMLAttributes,
    useState,
} from 'react'
import s from './AlternativeSuperDoubleRange.module.css'

import { useRef } from "react";

type DefaultInputPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    min: number
    max: number
}

export const AlternativeSuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
    min,
    max,

}) => {

    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef<HTMLDivElement>(null);

    return (
        <>AlternativeSuperDoubleRange
            <div className={s.wrapper}>
                <div>{minVal}</div>
                <div className={s.container}>
                    < input
                        type={'range'}
                        min={min}
                        max={max}
                        value={minVal}
                        onChange={(event) => {
                            const value = Math.min(Number(event.target.value), maxVal - 1);
                            setMinVal(value);
                            minValRef.current = value;
                        }}
                        className={s.thumb + ' ' + s.thumbleft}

                        style={{ zIndex: (minVal > max - 100) ? 5 : 3 }}

                    />
                    < input
                        type={'range'}
                        min={min}
                        max={max}
                        value={maxVal}
                        onChange={(event) => {
                            const value = Math.max(Number(event.target.value), minVal + 1);
                            setMaxVal(value);
                            maxValRef.current = value;
                        }}
                        className={s.thumb + ' ' + s.thumbright}
                    />

                    < div className={s.slider} >
                        <div className={s.slidertrack} />
                        <div ref={range} className={s.sliderrange} />
                        <div className={s.sliderleftvalue}></div>
                        <div className={s.sliderrightvalue}></div>
                    </div >
                </div >
                <div>{maxVal}</div>
            </div>
        </>
    );
};
