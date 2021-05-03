import React from 'react'
import classes from './Message.module.css';

type MessagePropsType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: MessagePropsType) {
  return (
    <div className={classes.message}>
      <div className={classes.imageContainer}>
        <img src={props.avatar} alt="User avatar"/>
      </div>
      <div className={classes.cloudRadius}></div>
      <div className={classes.messageCloud}>
        <div
          className={classes.userName}>{props.name}</div>
        <div
          className={classes.userMessage}>{props.message}</div>
        <div
          className={classes.timeStamp}>{props.time}</div>
      </div>
    </div>
  )
}

export default Message
