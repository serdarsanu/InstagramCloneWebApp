import { useState } from "react";
import { Link } from "react-router-dom";

function Search(props){
    const {dispatch} = props;
    const [inputText, setInputText] = useState("");

    function onChangeHandle(event){
        setInputText(event.target.value);
    }

    return(
        <div className="search-container">
            <i className="fa-solid fa-caret-down" onClick={()=> dispatch({type: "MODAL_SEARCH_VISIBLE", value: false})}></i>
            <input type="text" placeholder="kullanıcı giriniz..." style={{width: '350px'}} onChange={onChangeHandle}/>
            <Link to={`/search/${inputText.toLowerCase()}`} onClick={()=> dispatch({type: "CLICK_SEARCH", searchText: inputText})}>
                <button>Search</button>
            </Link>
        </div>
    )
}

export default Search;