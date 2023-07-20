function NewPost(props){
    const {dispatch} = props;
    return (
        <div className="new-post-container">
            <i className="fa-solid fa-caret-down" onClick={()=> dispatch({type: "MODAL_NEW_POST_VISIBLE", value: false})}></i>
            <div className="new-post-form">
                <input type="text" placeholder="img url"/>
                <input type="text" placeholder="post content"/>
                <div className="btn-wrap">
                    <button onClick={()=> dispatch({type: "ADD_POST", value: false})}>Add Post</button>
                </div>
                
            </div>
        </div>
    )
}

export default NewPost;