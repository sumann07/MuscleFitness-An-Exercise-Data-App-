import React from 'react'

const ExerciseData =(props)=>{
    let { equipment, gifUrl, name, target} = props;
    return (
      <>
      <div className="card " >
          <img src={!gifUrl ? "https://www.kindpng.com/picc/m/396-3969430_news-icon-icon-news-logo-hd-png-download.png" : gifUrl} className="card-img-top" alt="..." />
          <div className="card-body card-text">
            <span className='first-span'>{equipment.charAt(0).toUpperCase() + equipment.slice(1)}</span>
            <span className="second-span">{target.charAt(0).toUpperCase() + target.slice(1)} </span>
            <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
           
          </div>
        </div>
        </>
    )
  }
export default ExerciseData;