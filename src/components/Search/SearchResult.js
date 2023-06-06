import React from 'react';
import propTypes from 'prop-types';
import SingleResult from './SingleResult';


const SearchResults = (props) =>{
    return(

<div>
    {
        (props.searchData && props.searchData.length) ?

        props.searchData.map((ele,index)=>{
            return <SingleResult singleData={ele}></SingleResult>
        }) : "No search results"
    }

</div>


    )
}

SearchResults.propTypes={};
export default SearchResults;