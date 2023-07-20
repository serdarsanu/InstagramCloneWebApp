
import Menu from '../components/Menu'
import Posts from '../components/Posts'
import AddComment from '../components/modal/AddComment'
import Comments from '../components/modal/Comments'
import NewPost from '../components/modal/NewPost'
import Search from '../components/modal/search'

function Home(props){
    const {state, dispatch} = props;

    return(
        <div className="app-container">
            {state.loading && <div className='loading'>
                <h1>Loading</h1>
            </div>}
            <div>
            <Posts dispatch={dispatch} state={state} posts={state.posts}/>
            <Menu state={state} dispatch={dispatch}/>
            {state.modalAddCommentVisible && <AddComment dispatch={dispatch}/>}
            {state.modalCommentsVisible && <Comments state={state} dispatch={dispatch}/>}
            {state.modalNewPostVisible && <NewPost dispatch={dispatch}/>}
            {state.modalSearchVisible && <Search dispatch={dispatch}/>}
            </div>
        </div>
    )
}

export default Home;