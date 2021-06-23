import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent
} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[]
  onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: any[] = options
    ? options?.map((item, index) => {
        return (
          <option key={index} className={s.option} value={item}>
            {item}
          </option>
        )
      })
    : [] // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e)
    onChangeOption && onChangeOption(e.currentTarget.value)
    // onChange, onChangeOption
  }

  const finalSelectClassName = s.select

  return (
    <select
      className={finalSelectClassName}
      onChange={onChangeCallback}
      {...restProps}
    >
      {mappedOptions}
    </select>
  )
}

export default SuperSelect
