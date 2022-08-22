import React,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom";


function ExerciseDetail() {
    let { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect=(()=>{
        const fetchDataById =async ()=>{

            await fetch (`https://exercisedb.p.rapidapi.com/exercises/exercise/0001`,{
                 headers: {
                     'X-RapidAPI-Key': '52434c8457msh346dca9e93126dfp16d282jsn6ba222a40c98',
                     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                 },
             }).then(response => response.json())
             .then(response => {
                 console.log(response)
                 
             })
            };
            fetchDataById();

    },[])
  return (
    <>
     <h1>Hii</h1>
  </>
  )
}

export default ExerciseDetail