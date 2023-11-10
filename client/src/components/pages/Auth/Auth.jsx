import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './Auth.css'
import icon from '../../../assets/icon.png'
import AboutAuth from './AboutAuth'
import{signup, login} from '../../../actions/auth'
const Auth= () => {
    const [isSignup , setIsSignup] = useState(false)
    const [name, setName] = useState(' ')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSwitch = () =>{
        setIsSignup(!isSignup)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(!email && password){
            alert('Enter email and password')
        }
        if(isSignup){
            if(!name){
                alert("Enter a name to continue")
            }
            dispatch(signup({name,email,password}, navigate))
        }else{
            dispatch(login({email,password}, navigate))
        }
        

    }
        
    return(
        <section class='Auth-section'>
            {isSignup && <AboutAuth/>}
            <div class='Auth-container-2'>
                {!isSignup && <img src={icon} alt='Stack overflow' className='login-logo'/>}
                <form onSubmit={handleSubmit}>
                    {
                        isSignup && (
                            <label htmlFor='name'>
                                <h4>Dispaly Name</h4>
                                <input type="text" name="name" id="name" onChange={(e) => {setName(e.target.value)}}/>

                            </label>
                        )
                    }
                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input type="email" name="email" id="email"  onChange={(e) => {setEmail(e.target.value)}}/>
                    </label>
                    <label htmlFor="Password">
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                        <h4>Password</h4>
                        { !isSignup &&<p style={{color:"#007ac6" ,fontSize:"13px"}}>Forgot Password</p>}
                        </div>
                        <input type="Password" name="Password" id="Password"  onChange={(e) => {setPassword(e.target.value)}}/>
                        {isSignup && <p style={{fontSize:"13px",color:"#666767"}}>Passwords must contain at least eight characters,<br/> including at least 1 letter and 1 number.</p>}</label>
                    {
                        isSignup &&(
                            <label htmlFor="check">
                            <input type="checkbox"  id="check"/>
                            <p style={{fontSize:"13px"}}>Opt-in to receive occasional product<br/> updates, user research invitations, company <br/>announcements, and digests.</p> </label>
                       
                            
                        )
                    }
                    <button type="submit" className='auth-button'>{isSignup ? 'Signup' : 'Log in'}</button>
                    {
                        isSignup &&(
                            <p style={{fontSize:"13px" ,color:"#666767"}}>By clicking "sign up ",you agree to our to<span style={{color:"#007ac6"}}> terms</span> <br/> <span style={{color:"#007ac6"}}>services privcy policy </span>and <span style={{color:"#007ac6"}}>cookie </span>policy.</p>  )
                    }
                
                </form>
                <p>
                {isSignup ?'Already have an account?' : "Don't have an account?"}
                <button type='button' className='handle-switch-button' onClick={handleSwitch}>{isSignup ? "Log in" : 'Sign up'}</button>
                </p>

            </div>

        </section>
    )
}
export default Auth