import PostItem from "./PostItem";

function Posts(props){
    const {dispatch, state, posts} = props;
    return(
        <div>
            {
                posts.map(post => <PostItem key={post.id} dispatch={dispatch} state={state} post={post}></PostItem>)
            }
        </div>
    )
}

export default Posts;