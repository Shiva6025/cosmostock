import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
const StockOverview = (props) => {
    const [stock, setStock]=useState();

    useEffect(()=>{
        const url=`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${props.symbol}&apikey=7JRATCNNDL7A1PRH`;
     axios.get(url)
     .then(
         response =>{
             
             console.log(response.data);
             setStock({...response.data})
             
            
         }
        ).catch(error=>console.log(error));
    }, [props.symbol]);
 return(
     <div>
         {
             stock ?
            Object.keys(stock).map((ele, index)=>{
               var values=[ele]
                console.log(values);
               return <div>
                   <table>
                       <tr>
                   <td>{ele} </td>
                   <td>{stock[ele]}</td>
                   </tr>
                   </table>
                   </div>


             }
              ):"no data"
         }

     </div>
 );

};

//StockOverview.propTypes = {};
export default StockOverview;