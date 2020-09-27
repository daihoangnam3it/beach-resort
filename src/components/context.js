import React, { Component } from 'react'
import data from "../data"
const RoomContext=React.createContext();
export default class RoomProvider extends Component {
  state={
    rooms:[],
    sortedRooms:[],
    featuredRooms:[],
    loading:true,
    type:'all',
    capacity:1,
    price:600,
    minPrice:0,
    maxPrice:0,
    minSize:0,
    maxSize:0,
    breakfast:false,
    pets:false

  }
  componentDidMount(){
    let rooms=this.formatData(data);
    // console.log(rooms);
    let featuredRooms=rooms.filter(item=>item.featured===true);
    let maxPrice=Math.max(...rooms.map(item=>item.price));
    let maxSize=Math.max(...rooms.map(item=>item.size))
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms:rooms,
      loading:false,
      maxPrice:maxPrice,
      maxSize:maxSize
    })
  }
  formatData(data){
    let tempItems=data.map(item=>{
      let id=item.sys.id;
      let images=item.fields.images.map(image=>
        image.fields.file.url
      )
      let rooms={...item.fields,images,id}
      return rooms;
    })
    return tempItems;
  }
  getRoom=(slug)=>{
    let tempRoom=[...this.state.rooms];
    let room=tempRoom.find(room=>room.slug === slug);
    return room;

  }
  handleChange=e=>{
    let name=e.target.name;
    let type=e.target.type;
    let value=type==="checkbox" ?e.target.checked:e.target.value;
    console.log(name,type,value)
    this.setState({
      [name]:value
    },()=>this.getFilter())
  }
  getFilter=()=>{
    let tempRoom=[...this.state.rooms]
    if(this.state.type !== "all"){
        tempRoom=tempRoom.filter(item=>item.type===this.state.type)
    }
    //capacity
    tempRoom=tempRoom.filter(item=>item.capacity>=this.state.capacity)
    //price
    tempRoom=tempRoom.filter(item=>item.price<=this.state.price)
    //Size
    tempRoom=tempRoom.filter(item=>item.size>=this.state.minSize && item.size<=this.state.maxSize)
    //Break fast
    if(this.state.breakfast){
      tempRoom=tempRoom.filter(item=>item.breakfast===true)
    }
    //pets
    if(this.state.pets){
      tempRoom=tempRoom.filter(item=>item.pets===true)
    }

    this.setState({
      sortedRooms:tempRoom
    })
  }
  render() {
    return (
      <RoomContext.Provider value={{
        ...this.state,
        getRoom:this.getRoom,
        handleChange:this.handleChange
        }}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

export function withRoomContainer (Component){
  return function ConsumerWrapper(props){
    return <RoomContext.Consumer>
      {value=><Component {...props} context={value}/>}
    </RoomContext.Consumer>
  }
}

export  {RoomContext,RoomProvider};