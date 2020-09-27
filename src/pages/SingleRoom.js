import React, { Component } from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../components/context';
import StyleHero from '../components/Styled';
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
    };
  }
  static contextType = RoomContext;
  render() {
    let { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyleHero img={mainImg}>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
              Back to rooms
            </Link>
          </Banner>
        </StyleHero>
        <section className='single-room'>
          <div className='single-room-images'>
            {defaultImg.map((item,index)=>
              <img src={item}  key={index} alt=""/>
            )}
          </div>
          <div className="single-room-info">
            <div className="desc">
              <h3>detail</h3>
              <p>{description}</p>
            </div>
            <div className="info">
              <h3>info</h3>
              <h6>price:${price}</h6>
              <h6>size:{size} SOFT</h6>
              <h6>max capacity:{capacity>1?`${capacity} people`:`${capacity} person`}</h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </div>
          </div>
        </section>
          <div className="room-extras">
            <h6>Extras</h6>
            <ul className="extras">
            {extras.map((item,index)=><li key={index}>-{item}</li>)}

            </ul>
          </div>
      </>
    );
  }
}
