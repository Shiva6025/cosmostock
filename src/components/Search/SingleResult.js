import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';


const SingleResult = (props) =>{
    console.log(props.singleData)
    return(
        <Link to={'/stock/'+props.singleData["1. symbol"]}>

<div style={{backgroundColor: "#EEE", padding:"10px",marginBottom:"5px"}}>
    {
props.singleData["1. symbol"]
    }
    <br/>
    {
props.singleData["2. name"]
    }
    <br/>
    {
props.singleData["3. type"]
    }
    <br/>
    {
props.singleData["4. region"]
    }
    <br/>
    {
props.singleData["5. marketOpen"]
    }
    <br/>
    {
props.singleData["6. marketClose"]
    }
    

</div>
</Link>


    )
}

SingleResult.propTypes={};
export default SingleResult;