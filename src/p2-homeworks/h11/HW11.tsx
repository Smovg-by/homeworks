import React, { useState } from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import { SuperDoubleRange } from './common/c8-SuperDoubleRange/SuperDoubleRange'
import { AlternativeSuperDoubleRange } from './common/c9-AlternativeSuperDoubleRange/AlternativeSuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = React.useState<number[]>([0, 100])

    return (
        <div>
            <hr />
            homeworks 11
            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                // сделать так чтоб value1 изменялось
                />
            </div>
            <hr />
            <div>
                <span>{value2[0]}</span>
                <SuperDoubleRange value={value2} setValue={setValue2} />
                <span>{value2[1]}</span>
            </div>
            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            <AlternativeSuperDoubleRange min={0} max={100} />
            <hr />
        </div>
    )
}

export default HW11
