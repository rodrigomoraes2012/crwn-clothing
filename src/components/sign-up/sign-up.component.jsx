import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

class SignUp extends React.Component{

    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPass: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const {displayName, email, password, confirmPass} = this.state

        if(password !== confirmPass)
        {
            alert("Passwords don't match")
            return
        }

        try
        {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})

            // this will clear the form
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPass: ''
            })

        }catch(e){console.error(e)}
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render(){

        const {displayName, email, password, confirmPass} = this.state

        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with yout email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <FormInput
                        type='password'
                        name='confirmPass'
                        value={confirmPass}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />

                    <CustomButton type='submit'>Sign Up</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp