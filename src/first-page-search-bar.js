import './first-page-search-bar.css'
import React from 'react';

const Firstpagesearchbar = () => {
    return (<React.Fragment>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className='bg'>
            <div className='searchbutton'>
                <form>
                    <input type="text" className="searchinput" placeholder='Start your journey, Search for tutorials here!'></input>
                    <button type="submit" className="searchoutput" ><i class="fa fa-search" style={{color:'white'}}></i></button>
                </form>
            </div>
        </div>
    </React.Fragment>)
}
export default Firstpagesearchbar;