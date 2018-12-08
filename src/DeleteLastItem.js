import React, {Component} from 'react'
import PropTypes from 'prop-types'

class DeleteLastItem extends Component{
  static propTypes={
    onDeleteLastItem:PropTypes.func.isRequired,
    onNoItemsFound:PropTypes.func.isRequired
  }
    deleteLastItem =(event) => {
       this.props.onDeleteLastItem();
    };
     noItemsFound=()=>{
       this.props.onNoItemsFound();
     };
  render(){
    return(
    <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>);
  }
}

export default DeleteLastItem;