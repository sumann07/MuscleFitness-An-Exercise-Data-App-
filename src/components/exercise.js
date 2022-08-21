import React, { useState, useEffect } from 'react'
import ExerciseData from "./exercisedata";

function Exercise() {
    const [searchdata, setSearchdata] = useState();
    const [exercisedata, setExercisedata] = useState([]);
    const handleChange = (e) => {
        setSearchdata(e.target.value);
        //console.log(searchdata);
    }
   
    const buttonClicked = async() => {
        let text = searchdata.toLowerCase();
        setSearchdata(text);
        if(searchdata){
        await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${text}`, {
            headers: {
                'X-RapidAPI-Key': 'b3fbb65be6msh708d22c9ae315c7p1d4446jsn53a7919f98c4',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            },
        }).then(response => response.json())
            .then(response => {
                console.log(response)
                setExercisedata(response);
                setSearchdata('');
            })
    }
    else {
        
    }
}
    

    return (
        <>   
            <div className='search-box'>         
            <input id="search" type="text" placeholder='Enter here to search ....' value={searchdata} onChange={handleChange} />
            <button className="cmn-btn" onClick={buttonClicked}>Search</button>
            </div>
            <div className='row row-data'>
                <h1>Showing <strong style={{color:"#f76955"}}> {searchdata}</strong> exercise results</h1>         
               {exercisedata.map((e,id) => {
                           
                return <div key={id}className='col-md-3 my-3 ' >
                    <ExerciseData equipment={e.equipment} gifUrl={e.gifUrl} name={e.name} target={e.target} />
                </div>
            })}
            </div>

            
        </>
    )
}

export default Exercise