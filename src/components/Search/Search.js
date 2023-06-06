import './Search.css'
import React, {useState} from 'react';
import Proptypes from 'prop-types';
import SearchResult from './SearchResult';
import axios from 'axios'

const Search= () => {

    const [keyword, setkeyword]=useState("");
    const [searchData, setSearchData] = useState([]);
    const keyDownHandler =(event)=>{

        if(event.keyCode ==13){
            console.log("do operation");
            console.log("keyword is:"+keyword);
           
            //`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=+`Keyword&apikey=7JRATCNNDL7A1PRH
           axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=7JRATCNNDL7A1PRH`)
          .then(response=>{
              console.log(response);
              if(response.data && response.data.bestMatches){
                  setSearchData([...response.data.bestMatches]);
              }
        
        
        }).catch(error => console.log(error));
        
        } 

    }

    return (
        
        <div>
                Serach box and results <br/>

                <input  onKeyDown={keyDownHandler} onChange={(e)=>setkeyword(e.target.value)}type="text" value={keyword}/>

                <SearchResult searchData={searchData}></SearchResult>
        </div>
    );
};


Search.propTypes={};
export default Search;