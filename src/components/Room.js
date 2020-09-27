import React from 'react';
import {Link} from "react-router-dom"
import PropType from "prop-types"
export default function Room(props) {
  let { name, slug, price, images } = props.room;
  return (
    <article className='room'>
      <div className='img-container'>
        <img src={images[0]} alt='' />
        <div className='price-top'>
          <h6>${price}</h6>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">Featured</Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}
Room.PropType={
  room:PropType.shape({
    name:PropType.string.isRequired,
    slug:PropType.string.isRequired,
    images:PropType.arrayOf(PropType.string).isRequired,
    price:PropType.number.isRequired,
  })
}