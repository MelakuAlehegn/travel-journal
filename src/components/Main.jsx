import React from 'react'

function Main(props) {
  return (
    <div className='main'>
        <img className='travel-image' src= {`${props.place.imageUrl}`}/>
        <div className='discription'>
            <div className='header'>
                <p><i class="fa-solid fa-location-dot"></i><span className='location'>{props.place.location}</span> <a href={`${props.place.googleMapsUrl}`} target="_blank">View on Google Maps</a></p>
            </div>
            <p className='title'>{props.place.title}</p>
            <h5>{props.place.startDate} - {props.place.endDate}</h5>
            <p className='discription1'>{props.place.description}</p>
            
        </div>
    </div>
  )
}

export default Main