import React, { useEffect, useState } from 'react'
import { Button, Container } from 'reactstrap';

import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Profile() {

    const [editing, setEditing] = useState(false);
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const userid = localStorage.userid;

    const toggleMode = e => {
        e.preventDefault()
        setEditing(!editing)
        console.log('toggling!', editing)
    }

    useEffect(() => {
        axiosWithAuth()
        .get()
        .then((res) => {
            console.log('response from user', res)
            setUser({
                ...user,
                username: res.data.user.username
            })
        })
        .catch((err) => {
            console.log(err.response)
        })
    }, [userid])

    function updateUser(e) {
        e.preventDefault();
        axiosWithAuth()
            .put('', user)
            .then((res) => {
                console.log('response from updating user', res)
            })
            .catch((err) => {
                console.log(err)
                setUser({
                    username: '',
                    password: ''
                })
            })
            setEditing(false)
    }

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log('user to update: ', user);
    }

    if(!editing){
        return (
            <Container>
                <h1>Your Account</h1>
                <Button onClick={toggleMode}>Edit details</Button>
                <h2>Username: {user.username}</h2>
            </Container>
        )}
    else {
        return (
            <Container>
                <h1>Your Account</h1>
                <form>
                <label for='username'>username
                    <input
                        type='username'
                        name='username'
                        value={user.username}
                        onChange={handleChange}
                    />
                </label>
                <label for='password'>password
                    <input
                        type='password'
                        name='password'
                        value={user.password}
                        onChange={handleChange}
                    />
                    </label>
                <Button onClick={updateUser} type='submit'>Save</Button>
                </form>
            </Container>
        )
    }}
