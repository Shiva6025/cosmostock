import React from 'react';
import Search from '../Search/Search';
import PropTypes from 'prop-types'
import pic from './stockimage.jpg';
import './Home.css';

const Home =()=>{
    return(
        <div>
          <div style={{height:"300px",backgroundColor:"black",border:"1px solid #333"}}>
          <h1 style={{color:"white",fontFamily:"monospace"}}>COSMOSTOCKS</h1>
          <img src={pic} alt='NO IMAGE'></img>
          
          </div>
          <div style={{display:"flex", flexDirection:"row"}}>
            <div >
                <div>
                    Watchlist 
                </div>
                <div>
                    The world of finace is volatile.Every few seconds could see a major change in every stock's fate. CosmoStocks, powered by Alpha Vantage, helps
                    you search your favourite stocks and keep an eye out on its minute-by-minute changes.Find your favourite stock by entering its symbol or a character
                    in the inout box below.
                </div>
                <br/>
                <br/>
                <br/>
                <div>
                    <Search></Search>
                </div>
            </div>
            


          </div>

        </div>
    );
};

//Home.propTypes = {};

export default Home;