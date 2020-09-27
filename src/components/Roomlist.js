import React from 'react'
import Room from "./Room"
export default function Roomlist({rooms}) {
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.length>0?rooms.map((item,index)=><Room key={index} room={item}/>):"no more"}
      </div>
    </section>
  )
}
