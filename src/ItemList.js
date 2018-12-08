import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

class ItemList extends Component{
  static propTypes ={
    items: PropTypes.array.isRequired
  }
  render(){
    return(
      <div>
         <p className="items">Items</p>   
         <ol className="item-list">
             {this.props.items.map((item, index) => <Item key={index} item={item}/>)}
          </ol>
     </div>
      )
  }
}

export default ItemList
