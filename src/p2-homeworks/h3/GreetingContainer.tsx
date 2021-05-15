import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
  users: Array<UserType> // need to fix any
  addUserCallback: (name:string)=>void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                   users,
                                                                   addUserCallback
                                                                 }) => { // деструктуризация пропсов
  //Работа с Input:
  // 1. При onChange поля input сразу закидываем значения в name.
  // 2. При нажатии на кнопку onClick отправляем name в users
  // 3. Очищаем текст ошибки и поле ввода input

  const [name, setName] = useState<string>('') // need to fix any
  const [error, setError] = useState<string>('') // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setName(e.currentTarget.value) // need to fix
  }
  const addUser = () => {
    if (name === '' || name.indexOf(' ') === 0) {
      setError('Please, input valid user name')
    } else {
      addUserCallback(name)
      setError('')
      alert(`Hello, ${name}!`) // need to fix
      setName('')
    }
  }

  const totalUsers = users.length // need to fix

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer
