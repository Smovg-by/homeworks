import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid'


// types
export type UserType = {
  _id: string // need to fix any
  name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {

  const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

  const addUserCallback = (name: string) => { // need to fix any
    const newUser: UserType = {_id: v1(), name: name}// create a new variable assigned new user
    const newUsersArray = [...users, newUser] // add a new user to a users array
    setUsers(newUsersArray) // put new data in setUsers
  }

  return (
    <div>
      <hr/>
      homeworks 3

      {/*should work (должно работать)*/}
      <GreetingContainer users={users}
                         addUserCallback={addUserCallback}/>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeGreeting/>*/}
      <hr/>
    </div>
  )
}

export default HW3
