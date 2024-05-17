import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string)=>void// need to fix any
}


// если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: (name: string)=>void) => {
    if (name.trim() !== '') {
        addUserCallback(name.trim())
        setName('')
    }
    else {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnBlur = (name: any, setError: any) => {
    if (name.trim()===''){
        setError('Ошибка! Введите имя!')
    }
    // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: any) => {
    if (e.key === 'Enter') {
        addUser()
    }
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>(null) // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(event.currentTarget.value) // need to fix
        error && setError('')

    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)

    }

    const onBlur = () => {
        pureOnBlur(name, setError)
        // setError('Ошибка! Введите имя!')
    }

    const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(event, addUser)

    }

    const totalUsers =users.filter(u=>u).length; // need to fix
    const lastUserName=users.map(n => n.name).slice(-1).join()

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer

