import s from './HW13.module.css'
import { RequestsAPI } from './api'
import { useState } from 'react'

export const HW13 = () => {

  let [isChecked, setChecked] = useState(false)

  let [message, setMessage] = useState('')

  const onChangeHandler = (e: any) => {
    // console.log(e.currentTarget.checked);
    setChecked(e.currentTarget.checked)
  }

  const onClickHandler = (e: any) => {
    e.preventDefault();
    RequestsAPI.makeTest(isChecked).then(data => {
      console.log(data.data.errorText)
      setMessage(data.data.errorText)
    }).catch(error => {
      console.log(error.response.data.errorText)
      setMessage(error.response.data.errorText)
    }
    )
  }

  return (
    <div>
      <form id='authForm'>
        <label className={s.input}>
          <input checked={isChecked} type='checkbox' onChange={onChangeHandler} /> Get error
        </label>
        <input value="Send Data" type="submit" className={s.btn} onClick={onClickHandler} form='authForm' />
      </form>
      <div className={s.message}><b>message from server:</b>  '{message}'</div>
      <hr />
    </div>
  )
}
