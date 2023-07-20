function Comments(props){
    const {state, dispatch} = props;
    const comments = state.comments.filter(item => item.postId == state.postId);
    return(
        <div className="comments-container">
            <div className="comments">
                <div className="close-icon">
                    <i className="fa-solid fa-caret-down" onClick={()=> dispatch({type: "MODAL_COMMENTS_VISIBLE", value: false})}></i>
                </div>
                <ul>
                    {comments.map(item => <li key={item.id}><img src="https://i.pravatar.cc/100" alt=""/><p><span>{item.name}</span></p></li>)}
                </ul>
            </div>
        </div>
    )
}

export default Comments;