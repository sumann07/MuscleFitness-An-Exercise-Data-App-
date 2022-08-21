import React, { useState, useEffect } from 'react'
import ExerciseData from "./exercisedata";
import Pagination from './pagination';

function Exercise() {
    const [searchdata, setSearchdata] = useState(' ');
    const [exercisedata, setExercisedata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(8);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = exercisedata.slice(indexOfFirstRecord,indexOfLastRecord);
    const nPages = Math.ceil(exercisedata.length / recordsPerPage)
    const handleChange = (e) => {
        setSearchdata(e.target.value);
        //console.log(searchdata);
    }
   
    useEffect(()=>{
       const fetchData =async ()=>{

       await fetch ('https://exercisedb.p.rapidapi.com/exercises',{
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
    };
    fetchData();
        
    },[])
    const buttonClicked = async() => {
        //let text = searchdata.toLowerCase();
        // setSearchdata(text);
        // await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${text}`, {
        //     headers: {
        //         'X-RapidAPI-Key': 'b3fbb65be6msh708d22c9ae315c7p1d4446jsn53a7919f98c4',
        //         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        //     },
        // }).then(response => response.json())
        //     .then(response => {
        //         console.log(response)
        //         setExercisedata(response);
        //         setSearchdata('');
        //     })
        const  searchedExercisedata = exercisedata.filter((
            item)=> item.name.toLowerCase().includes(searchdata)
            || item.target.toLowerCase().includes(searchdata)
            || item.equipment.toLowerCase().includes(searchdata)
            || item.bodyPart.toLowerCase().includes(searchdata),
            );
               setExercisedata(searchedExercisedata);
               setSearchdata('');
    }
    
    return (
        <>   
            <div className='search-box'>         
            <input id="search" type="text" placeholder='Enter here to search ....' value={searchdata} onChange={handleChange} />
            <button className="cmn-btn" onClick={buttonClicked}>Search</button>
            </div>
            <div className='row row-data'>
                <h1>Showing <strong style={{color:"#f76955"}}>exercise</strong>  results</h1>         
               {currentRecords.map((e,id) => {
                           
                return <div key={id}className='col-md-3 my-3 ' >
                    <ExerciseData equipment={e.equipment} gifUrl={e.gifUrl} name={e.name} target={e.target} />
                </div>
            })}
            </div>

            <Pagination nPages = { nPages } currentPage = { currentPage } setCurrentPage = { setCurrentPage }/>
        </>
    )
}

export default Exercise