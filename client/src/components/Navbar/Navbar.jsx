import React,{useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import logo from '../../assets/logo1.png'
import search from '../../assets/magnifying-glass-solid.svg'
import decode from 'jwt-decode'
import Avatar from '../Avatar/Avatar'
import {useSelector,useDispatch} from 'react-redux'
import './Navbar.css'
import {setCurrentUser} from '../../actions/currentUser'


const Navbar = () => {
    const dispatch = useDispatch()
    var User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

        const handleLogout = () =>{
        dispatch({type:'LOGOUT'});
        navigate('/')
        dispatch(setCurrentUser(null))
    }
    useEffect(()=>{
        const token = User?.token
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])
    return(
        <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt='logo' width='180'/>
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For item</Link>
            <form>
                <input type="text" placeholder='      search.....'/>
                <img src ={search} alt='search' width='15' className='search-icon'/>
            </form>
            {User == null ?
            
            <Link to='/Auth' className='nav-item nav-btn nav-links'>Log in</Link>:
            <>
           <Avatar backgroundColor="#5398fe" px="10px" py="15px" borderRadius="50%" color='white'><Link to ={`/Users/${User?.result?._id}`} style={{color:"white" , textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()} </Link></Avatar> 
           <button className='nav-item nav-links' onClick={handleLogout}> Log out</button>
           </>
            }


        </div>

        </nav>
    )
}
export default Navbar