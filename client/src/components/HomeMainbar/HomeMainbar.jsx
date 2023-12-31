import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import { useSelector } from 'react-redux'
const HomeMainbar= () => {
    const location= useLocation()
    const user = 1;
    const navigate = useNavigate()
    const questionsList = useSelector(state => state.questionsReducer)
    // console.log(questionsList)

    // var questionsList=[{
    //     id:1,
    //     upvotes:3,
    //     downvotes:2,
    //      noOfAnswers:2,
    //     questionTitle:"What is a function",
    //     questionBody:"It meant to be",
    //     questionTags:["Java","node js","react js","mongodb","express js"],
    //     userPosted:"mano",
    //     userId:1,
    //     askedOn:"jan 1",
    //     answer:[{
    //         answerBody:"Answer",
    //         userAnswered:'kumar',
    //         answeredOn:"jan 2",
    //         userId:2,
    //     }]
   
    // },{
    //     id:2,
    //     upvotes:3,
    //     downvotes:2,
    //     noOfAnswers:0,
    //     questionTitle:"What is a function",
    //     questionBody:"It meant to be",
    //     questionTags:["Javascript","R","Phython"],
    //     userPosted:"mano",
    //     userId:1,
    //     askedOn:"jan 1",
    //     answer:[{
    //         answerBody:"Answer",
    //         userAnswered:'kumar',
    //         answeredOn:"jan 2",
    //         userId:2,
    //     }]
   
   

    // },{
    //     id:3,
    //     upvotes:3,
    //     downvotes:2,
    //    noOfAnswers:0,
    //     questionTitle:"What is a function",
    //     questionBody:"It meant to be",
    //     questionTags:["Java","R","Phython"],
    //     userPosted:"mano",
    //     userId:1,
    //     askedOn:"jan 1",
    //     answer:[{
    //         answerBody:"Answer",
    //         userAnswered:'kumar',
    //         answeredOn:"jan 2",
    //         userId:2,
    //     }]
   
    // }]

    const checkAuth=()=>{
        if(user === null){
            alert("login or signup to ask a question")
            navigate('/Auth')
        }else{
            navigate('/AskQuestion')
        }
    }
    return(
        <div className='main-bar'>
            <div class="main-bar-header">
                {
                    location.pathname ==='/'? <h1>Top Questions</h1>:<h1>All Questions</h1>
                }
                <button onClick={checkAuth}className='ask-btn'>Ask Question</button>

            </div>
            <div>
                {
                questionsList.data === null ?
                <h1>Loading.....</h1> :
                <>
                <p>{questionsList.data.length} questions</p>
                    <QuestionList questionsList={questionsList.data}/>
            </>
                }
            </div>
           
        </div>
    )
}

export default HomeMainbar