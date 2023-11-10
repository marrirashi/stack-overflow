import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Auth from './components/pages/Auth/Auth'
import Questions from './components/pages/Questions/Questions'
import AskQuestion from './components/pages/AskQuestion/AskQuestion'
import DisplayQuestion from './components/pages/Questions/DisplayQuestion'
import Tags from './components/pages/Tags/Tags'
import Users from './components/pages/Users/Users'
import UserProfile from './components/pages/UserProfile/UserProfile'
const AllRoutes =() => {
    return(
        <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route  path='/Auth' element={<Auth/>}/>
            <Route  path='/Questions' element={<Questions/>}/>
            <Route  path='/AskQuestion' element={<AskQuestion/>}/>
            <Route path='/Questions/:id' element={<DisplayQuestion/>}/>
            <Route path='/Tags' element={<Tags/>}/>
            <Route path='/Users' element={<Users />}/>
            <Route path='/Users/:id' element={<UserProfile/>}/>
            


            

        
        </Routes>

        
    )
}
export default AllRoutes