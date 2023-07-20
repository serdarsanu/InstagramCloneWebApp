function AddComment(props){
    const {dispatch} = props;

    return(
        <div className="add-comment-container">
            <i className="fa-solid fa-caret-down" onClick={()=> dispatch({type: "MODAL_ADD_COMMENT_VISIBLE", value: false})}></i>
            <input type="text" placeholder="yorum giriniz..." style={{width: '320px'}}/>
            <button>Add Comment</button>
        </div>
    )
}

export default AddComment;