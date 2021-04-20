import React from 'react';

const SearchBox=({Searchfield, searchchange})=>{
    return(
        <div className='pa2'>
            <input 
                className='pa3 ba b--geen bg-lightest-blue' 
                type='search' 
                placeholder='search robots' 
                onChange={searchchange}
            />
        </div>
    );
}
export default SearchBox;