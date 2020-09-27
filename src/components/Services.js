import React, { Component } from 'react'
import Title from "./Title"
import {FaCocktail,FaBreadSlice} from "react-icons/fa"
export default class Services extends Component {
  state={
    services:[
      {
        icon:<FaCocktail/>,
        title:"Free cocktail",
        info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id maxime eum odit doloribus dolorum architecto consequatur autem, ratione rem modi!        "
      },
      {
        icon:<FaBreadSlice/>,
        title:"Free cocktail",
        info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id maxime eum odit doloribus dolorum architecto consequatur autem, ratione rem modi!        "
      },
      {
        icon:<FaCocktail/>,
        title:"Free cocktail",
        info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id maxime eum odit doloribus dolorum architecto consequatur autem, ratione rem modi!        "
      },
      {
        icon:<FaBreadSlice/>,
        title:"Free cocktail",
        info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id maxime eum odit doloribus dolorum architecto consequatur autem, ratione rem modi!        "
      },
      
    ]
  }
  render() {
    return (
      <div className="services">
        <Title/>
        <div className="services-center">
          {this.state.services.map((item,index)=>
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          )}
        </div>
      </div>
    )
  }
}
