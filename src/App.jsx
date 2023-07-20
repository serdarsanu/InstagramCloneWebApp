import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useReducer, useEffect } from 'react'
import { initialMainState } from './state/initialMainState'
import { mainReducer } from './state/mainReducer'
import './css/App.css'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import Profile from './pages/Profile'
import Search from './pages/SearchPage'

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialMainState);

  useEffect(()=>{
    async function getUsers(){
        dispatch({type: "FETCH_START"});
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            let data = await res.json();
            if(res.status === 200){
                dispatch({type: "GET_USERS", users: data});
            }
        } catch (error) {
            console.log(error);
        }
        dispatch({type: "FETCH_END"});
    }
    async function getPosts(){
        dispatch({type: "FETCH_START"});
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            let data = await res.json();
            if(res.status === 200){
                dispatch({type: "GET_POSTS", posts: data});
            }
        } catch (error) {
            console.log(error);
        }
        dispatch({type: "FETCH_END"});
    }
    async function getComments(){
      dispatch({type: "FETCH_START"});
      try {
          const res = await fetch("https://jsonplaceholder.typicode.com/comments");
          let data = await res.json();
          if(res.status === 200){
              dispatch({type: "GET_COMMENTS", comments: data});
          }
      } catch (error) {
          console.log(error);
      }
      dispatch({type: "FETCH_END"});
    }
    
    getUsers();
    getPosts();
    getComments();
  }, []);
  
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home state={state} dispatch={dispatch}/>}/>
        <Route path={`favorites/:id`} element={<Favorite state={state} dispatch={dispatch}/>}/>
        <Route path={`profile/:username`} element={<Profile state={state} dispatch={dispatch}/>}/>
        <Route path={`search/:searchText`} element={<Search state={state} dispatch={dispatch}/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
