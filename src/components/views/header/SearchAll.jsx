import React, {Component} from 'react'

export default class SearchAll extends Component {
  render() {
    return (
      <form className="form-inline float-left">
        <input className="form-control mr-sm-2" placeholder="Search" type="text"/>
        <button type="submit" value="search" className="search-btn"><img src="img/search-icon.png" alt=""/></button>
      </form>
    )
  }
}
