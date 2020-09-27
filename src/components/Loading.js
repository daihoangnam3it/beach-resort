import React from 'react'
import LoadingImg from "../images/gif/loading-arrow.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h2>Loading data ....</h2>
      <img src={LoadingImg} alt=""/>
    </div>
  )
}
