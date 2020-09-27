import React from "react"

import Roomfilter from "./Roomfilter";
import Roomlist from "./Roomlist";
import Loading from "./Loading"
import {withRoomContainer} from "./context"
function RoomContainer({context}){
  const {loading,sortedRooms,rooms}=context
  if(loading){
    return <Loading/>
  }
  return(
    <>
    <Roomfilter rooms={rooms}/>
    <Roomlist rooms={sortedRooms}/>
    </>
  )
}

export default withRoomContainer(RoomContainer);