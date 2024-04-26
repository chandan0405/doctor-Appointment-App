import React, { useState } from 'react'
import signinImage from '../assets/signup.jpg';

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    avatarUrl: ''
}

const Auth = () => {
    const [isSignup, setIsSignup] = useState(true);

    const [form, setForm] = useState(initialState);

    const onHandleChange = (e) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
    }

    const handleSubmit=(e)=>
    {
      e.preventDefault();
      console.log(form)
    }
    return (
        <div className='auth__form-container'>
            <div className='auth__form-container_fields'>
                <div className='auth__form-container_fields-content'>
                    <p>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </p>
                    <form onSubmit={handleSubmit}>
                        {
                            isSignup && (
                                <div className='auth__form-container_fields-content_input'>
                                    <label htmlFor='fullName'>FullName</label>
                                    <input
                                        type='text'
                                        placeholder='John..'
                                        name='fullName'
                                        onChange={onHandleChange}
                                        required

                                    />
                                </div>

                            )
                        }
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='username'>Username</label>
                            <input
                                type='text'
                                placeholder='John@123..'
                                name='username'
                                onChange={onHandleChange}
                                required

                            />
                        </div>
                        {
                            isSignup && (
                                <div className='auth__form-container_fields-content_input'>
                                    <label htmlFor='email'>Email</label>
                                    <input
                                        type='email'
                                        placeholder='John@gmail.com'
                                        name='email'
                                        onChange={onHandleChange}
                                        required

                                    />
                                </div>

                            )
                        }
                        {
                            isSignup && (
                                <div className='auth__form-container_fields-content_input'>
                                    <label htmlFor='avatarUrl'>Avtar URL</label>
                                    <input
                                        type='text'
                                        placeholder='avatar URL'
                                        name='avatarUrl'
                                        onChange={onHandleChange}
                                        required

                                    />
                                </div>

                            )
                        }
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                placeholder='password'
                                name='password'
                                onChange={onHandleChange}
                                required

                            />
                        </div>
                        {
                            isSignup && (
                                <div className='auth__form-container_fields-content_input'>
                                    <label htmlFor='confirmPassword'>Confirm Password</label>
                                    <input
                                        type='password'
                                        placeholder='Confirm password'
                                        name='confirmPassword'
                                        onChange={onHandleChange}
                                        required

                                    />
                                </div>

                            )
                        }
                        <div className='auth__form-container_fields-content_button'>
                            <button>{isSignup ? 'Sign Up' : 'Sign In'}</button>
                        </div>
                    </form>
                    <div className='auth__form-container_fields-account'>
                        <p>
                            {
                                isSignup ?
                                    'Already have an account?'
                                    : "Don't have an account?"
                            }
                            <span onClick={switchMode}>
                                {isSignup ? 'Sign In' : 'Sign Up'}
                            </span>
                        </p>

                    </div>
                </div>
            </div>
            <div className='auth__form-container_image'>
                <img
                    src={signinImage}
                    alt='sign in'
                />
            </div>

        </div>
    )
}

export default Auth
