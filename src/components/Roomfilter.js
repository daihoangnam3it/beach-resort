import { useContext } from 'react';
import React from 'react';
import { RoomContext } from '../components/context';
const getUnique=((items,value)=>[...new Set(items.map(item=>item[value]))])
export default function Roomfilter({rooms}) {
  const context = useContext(RoomContext);
  //types
  let types=getUnique(rooms,'type');
  types=["all",...types];
  types=types.map((item,index)=><option key={index} value={item}>{item}</option>)
  //capacity
  let capacities=getUnique(rooms,'capacity');
  capacities=[...capacities];
  capacities=capacities.map((item,index)=><option key={index} value={item}>{item}</option>)
  return (
    <div className='filter-container'>
      <div className='filter-form'>
        <div className='form-group'>
          <label htmlFor="">Type</label>
          <select 
          name="type" 
          id="type" 
          value={context.type}
          className="form-control"
          onChange={context.handleChange}
          >
          {types}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor="">Guests</label>
          <select 
          name="capacity" 
          id="capacity" 
          value={context.capacity}
          className="form-control"
          onChange={context.handleChange}
          >
          {capacities}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor="">PRICE {context.price}</label>
          <input 
          type="range"
          name="price" 
          id="price" 
          min={context.minPrice}
          max={context.maxPrice}
          value={context.price}
          className="form-control"
          onChange={context.handleChange}
          />
          
        </div>
        <div className='form-group'>
        <label htmlFor="">Size SOFT</label>
        <div className="size-inputs">
          <input 
          type="number"
          name="minSize" 
          id="minsSize" 
          value={context.minSize}
          className="size-input"
          onChange={context.handleChange}
          />
          <input 
          type="number"
          name="maxSize" 
          id="maxSize" 
          value={context.maxSize}
          className="size-input"
          onChange={context.handleChange}
          />
        </div>
          
        </div>
        <div className="form-group">
        <div className="single-extra">
          <input type="checkbox" name="breakfast" id="" onChange={context.handleChange} checked={context.breakfast}/>
          <label htmlFor="">Breakfast</label>
        </div>
        <div className="single-extra">
          <input type="checkbox" name="pets" id="pets" onChange={context.handleChange} checked={context.pets}/>
          <label htmlFor="">Pets</label>
        </div>
        </div>
      </div>
    </div>
  );
}
