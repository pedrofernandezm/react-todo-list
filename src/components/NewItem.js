import React, {Component} from 'react';

export default class NewItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      newItem: ''
    }
    this.onChangeNewItem = this.onChangeNewItem.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onChangeNewItem(event){
    var name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  onEnter(event){
    if(event.key === 'Enter'){
      this.props.onSubmitHandler(event);
      event.target.value = '';
    }
  }

  render(){
    return(
      <input type="text" className="new-todo" autoFocus placeholder={this.props.placeholder} name="newItem" onChange={this.onChangeNewItem} onKeyPress={this.onEnter} />
    );
  }
}