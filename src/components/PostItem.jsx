import { Link } from "react-router-dom";

function PostItem(props){
    const {dispatch, state, post} = props;
    const postComments = state.comments.filter(item => item.postId == post.id);
    const postUser = state.users.find(item => item.id == post.userId);
    
    return (
        <div className="post-item">
            <div className="post-header">
            <Link to={`/profile/${postUser.username.toLowerCase()}`} onClick={()=> dispatch({type: "CLICK_USER", userId: postUser.id})}>
                <img src="https://i.pravatar.cc/100" alt=""/>
                <p>{postUser.username.toLowerCase()}</p>
            </Link>
            </div>
            <div className="post-img">
                <img src="https://i.pravatar.cc/300" alt="" />
            </div>
            <div className="post-footer">
                <div className="post-favorite">
                    {/* <i className="fa fa-heart"></i> */}
                    <i className="fa-regular fa-heart"></i>
                </div>
                <div className="post-content">{post.title}</div>
                <div className="post-comment" onClick={()=> dispatch({type: "MODAL_COMMENTS_VISIBLE", value: !state.modalCommentsVisible, postId: post.id})}>{postComments.length} Yorumu gör</div>
                <div className="post-add-comment" onClick={()=> dispatch({type: "MODAL_ADD_COMMENT_VISIBLE", value: !state.modalAddCommentVisible})}>Yorum ekle...</div>
            </div>
        </div>
    )
}

export default PostItem;