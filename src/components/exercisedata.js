import React from 'react'

const ExerciseData =(props)=>{
    let { equipment, gifUrl, name, target} = props;
    return (
      <>
        <div className="card" >
          <img src={!gifUrl ? "https://www.kindpng.com/picc/m/396-3969430_news-icon-icon-news-logo-hd-png-download.png" : gifUrl} className="card-img-top" alt="..." />
          < div className="card-body">
            <p className="card-text">{equipment}</p>
            <p className="card-text"><small class="text-danger">{name} </small></p>
            <p className="card-text"><small class="text-danger">{target} </small></p>
          </div>
        </div>

      </>
    )
  }
export default ExerciseData;