import { useReducer } from 'react'
import { initialMainState } from '../state/initialMainState'
import { mainReducer } from '../state/mainReducer'
import Menu from '../components/Menu'
import Posts from '../components/Posts'
import AddComment from '../components/modal/AddComment'
import Comments from '../components/modal/Comments'
import NewPost from '../components/modal/NewPost'
import Search from '../components/modal/search'
import { useParams } from 'react-router-dom'

function Favorite(){
    let {id} = useParams();
    const [state, dispatch] = useReducer(mainReducer, initialMainState);
    const {modalAddCommentVisible, modalCommentsVisible, modalNewPostVisible, modalSearchVisible} = state;

    return(
        <div className="app-container">
            <div>
            <h1>{id}</h1>
            <Posts dispatch={dispatch} state={state}/>
            <Menu state={state} dispatch={dispatch}/>
            {modalAddCommentVisible && <AddComment dispatch={dispatch}/>}
            {modalCommentsVisible && <Comments dispatch={dispatch}/>}
            {modalNewPostVisible && <NewPost dispatch={dispatch}/>}
            {modalSearchVisible && <Search dispatch={dispatch}/>}
            </div>
        </div>
    )
}

export default Favorite;