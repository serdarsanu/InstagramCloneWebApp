import { useParams } from 'react-router-dom'
import Menu from '../components/Menu'
import Posts from '../components/Posts'
import AddComment from '../components/modal/AddComment'
import Comments from '../components/modal/Comments'
import NewPost from '../components/modal/NewPost'
import Search from '../components/modal/search'

function SearchPage(props){
    const {searchText} = useParams();
    const {state, dispatch} = props;
    const findUsers = state.users.filter(item => item.username.toLowerCase().includes(searchText));
    const userPosts = state.posts.filter(item => findUsers.some(user => user.id == item.userId));

    return(
        <div className="app-container">
            <div>
            <Posts dispatch={dispatch} state={state} posts={userPosts}/>
            <Menu state={state} dispatch={dispatch}/>
            {state.modalAddCommentVisible && <AddComment dispatch={dispatch}/>}
            {state.modalCommentsVisible && <Comments state={state} dispatch={dispatch}/>}
            {state.modalNewPostVisible && <NewPost dispatch={dispatch}/>}
            {state.modalSearchVisible && <Search dispatch={dispatch}/>}
            </div>
        </div>
    )
}

export default SearchPage;