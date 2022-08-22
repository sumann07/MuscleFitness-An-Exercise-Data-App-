import React, { useEffect, useState } from 'react'
import icon from "../assests/icon-1.png";
import Exercise from './exercise';
import Homebox from './homebox';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchPart = async ()=>{
      await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', {
            headers: {
                'X-RapidAPI-Key': '340e287f3cmshfdb5e1e57c5b1acp1433b9jsn9a65f89af096',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            },
        }).then(response => response.json())
            .then(response => {
                console.log(response)
                setData(response);
            })
        };
        
        fetchPart();
    }, []);

    return (
        <>   
        <Homebox />
        <h1 className='text-center' style={{fontWeight:"bolder", marginBottom:"40px"}}>Awesome exercise you should know</h1>
        <div className='home-container'>
            <ul>
                {data.map((item, index) =>
                    <li key={index}>
                        <a href="#exer" style={{color:"black",textDecoration:"none"}}><img src={icon} alt="type" />
                        <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p></a>
                    </li>
                )}
            </ul>
        </div>
        <Exercise />
        </>
    )
}

export default Home