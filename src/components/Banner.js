import React, {Component } from 'react'

export default class Banner extends Component {
  render() {
    const {title,subtitle,children}=this.props
    return (
      <div className="banner">
        <h1>{title}</h1>
        <div/>
        <p>{subtitle}</p>
        {children}
      </div>
    )
  }
}
