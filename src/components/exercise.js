import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ExerciseData from "./exercisedata";
import Pagination from './pagination';
import Spinner from './spinner';

function Exercise() {
    const [searchdata, setSearchdata] = useState(' ');
    const [exercisedata, setExercisedata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [displayData, setDisplayData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(12);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = displayData.slice(indexOfFirstRecord,indexOfLastRecord);
    const nPages = Math.ceil(displayData.length / recordsPerPage)
    const handleChange = (e) => {
        setSearchdata(e.target.value);
        //console.log(searchdata);
    }
   
    useEffect(()=>{
       const fetchData =async ()=>{

       await fetch ('https://exercisedb.p.rapidapi.com/exercises',{
            headers: {
                'X-RapidAPI-Key': '52434c8457msh346dca9e93126dfp16d282jsn6ba222a40c98',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            },
        }).then(response => response.json())
        .then(response => {
            //console.log(response)
            setExercisedata(response);
            setDisplayData(response);
            setLoading(false);
            setSearchdata('');
        })
    };
    fetchData();
        
    },[])
    const buttonClicked = async() => {
        const  searchedExercisedata = exercisedata.filter((
            item)=> item.name.toLowerCase().includes(searchdata)
            || item.target.toLowerCase().includes(searchdata)
            || item.equipment.toLowerCase().includes(searchdata)
            || item.bodyPart.toLowerCase().includes(searchdata),
            );
               setDisplayData(searchedExercisedata);
               setLoading(false);
               setSearchdata('');
               
    }
    
    return (
        <>   
            <div className='search-box'>         
            <input id="search" type="text" placeholder='Search from bodyparts, equipment or muscles ....' value={searchdata} onChange={handleChange} />
            <button className="cmn-btn" onClick={buttonClicked}>Search</button>
            </div>
            {loading && <Spinner/>}
        
            <div className='row row-data' id="exer" >
                <h1>Showing <strong style={{color:"#f76955"}}>exercise</strong>  results</h1>   

               {currentRecords.map((e,id) => {
                           
                return (
                 <Link className="col-md-3 my-3" style={{textDecoration:"none", color:"black"}} to="#exer">
                    <div key={id} >
                    <ExerciseData equipment={e.equipment} gifUrl={e.gifUrl} name={e.name} target={e.target} />
                </div>
                </Link>

           ) })}
            </div>

            <Pagination nPages = { nPages } currentPage = { currentPage } setCurrentPage = { setCurrentPage }/>
        </>
    )
}

export default Exercise