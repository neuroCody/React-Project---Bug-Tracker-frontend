import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {signIn} from '/Users/darkp/Bug-tracker/frontend/src/Controllers/Redux/authSlice'

import './login.css'

export default ()=>{
    const dispatch = useDispatch();

    const [formInput,setFormInput]= useState({
        name:"",
        password:""
    })

    function inputChanged(e){
        setFormInput({
            ...formInput,
            [e.target.name]:e.target.value
        })
    }

    function submit(e){
        dispatch(signIn(formInput));
        e.preventDefault();
    }

    return(
        <div className="loginBG">
            <div style={{
                textAlign: 'center',
            }}>
                <h1 style={{
                    fontSize: 90,
                    color: '#F7F7E8',

                }}>Bugchain</h1>
            </div>
            <form className="login-panel">
                <h1 id="loginHeader">Login:</h1>
                <input name='name' placeholder='Name' onChange={inputChanged} value={formInput.name}></input>
                <input name='password' type='password' placeholder='Password' onChange={inputChanged} value={formInput.password}></input>
                <button type='submit' onClick={submit}>Login</button>
            </form>
        </div>
    )
}