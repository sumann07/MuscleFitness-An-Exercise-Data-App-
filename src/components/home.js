import React, { useEffect, useState } from 'react'
import icon from "../assests/icon-1.png";
import Exercise from './exercise';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {

        fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', {
            headers: {
                'X-RapidAPI-Key': 'b3fbb65be6msh708d22c9ae315c7p1d4446jsn53a7919f98c4',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            },
        }).then(response => response.json())
            .then(response => {
                console.log(response)
                setData(response);
            })
    }, []);

    return (
        <>   
        <div className='home-container'>
            <ul>
                {data.map((item, index) =>
                    <li key={index}>
                        <img src={icon} alt="type" />
                        <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
                    </li>
                )}
            </ul>
        </div>
        <Exercise />
        </>
    )
}

export default Home