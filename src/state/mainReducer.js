export function mainReducer(state, action){
    switch (action.type) {
        case "CLICK_USER":
            return {...state, userId: action.userId};
        case "CLICK_SEARCH":
            return {...state, searchText: action.searchText, modalSearchVisible: false};
        case "FETCH_START":
            return {...state, loading: true};
        case "FETCH_END":
            return {...state, loading: false};
        case "GET_COMMENTS":
            return {...state, comments: action.comments};
        case "GET_POSTS":
            return {...state, posts: action.posts};
        case "GET_USERS":
            return {...state, users: action.users};
        case "MODAL_ADD_COMMENT_VISIBLE":
            return {...state, modalAddCommentVisible: action.value, modalCommentsVisible: false, modalNewPostVisible:false, modalSearchVisible: false};
        case "MODAL_COMMENTS_VISIBLE":
            return {...state, modalCommentsVisible: action.value, postId: action.postId, modalAddCommentVisible:false, modalNewPostVisible:false, modalSearchVisible: false};
        case "MODAL_NEW_POST_VISIBLE":
            return {...state, modalNewPostVisible: action.value, modalAddCommentVisible:false, modalCommentsVisible: false, modalSearchVisible: false};
        case "MODAL_SEARCH_VISIBLE":
            return {...state, modalSearchVisible: action.value, modalAddCommentVisible:false, modalCommentsVisible: false, modalNewPostVisible:false};
        default:
            return state;
    }
}