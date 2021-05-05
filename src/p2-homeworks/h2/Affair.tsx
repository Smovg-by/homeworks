import React from 'react'
import {AffairType} from './HW2';
import classes from './Affair.module.css'

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType // need to fix any
  deleteAffairCallback: (key: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  }// need to fix

  return (
    <div className={classes.affairLine}>
      <div className={classes.textLine}>
        <div className={classes.affairName}>{props.affair.name}</div>
        <div>{props.affair.priority}</div>
      </div>
      <button onClick={deleteCallback}
              className={classes.button}>Delete
      </button>
    </div>
  )
}

export default Affair
