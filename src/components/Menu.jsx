import { Link } from "react-router-dom";

function Menu(props){
    const {state, dispatch} = props;
    const id = 5;

    return(
        <div className="menu-container">
            <Link to="/"><i className="fa fa-house"></i></Link>
            <i className="fa-solid fa-magnifying-glass" onClick={()=> dispatch({type: "MODAL_SEARCH_VISIBLE", value: !state.modalSearchVisible})}></i>
            <i className="fa-regular fa-square-plus" onClick={()=> dispatch({type: "MODAL_NEW_POST_VISIBLE", value: !state.modalNewPostVisible})}></i>
            <Link to={`/favorites/${id}`}><i className="fa-regular fa-heart"></i></Link>
            <Link to="/profile"><i className="fa-solid fa-user"></i></Link>
        </div>
    )
}

export default Menu;