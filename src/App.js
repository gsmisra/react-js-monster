import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box-component.jsx';


class App extends Component {

  constructor(){
    super();

    this.state={
      userList:[],
      searchField:'Monster RolodEx',
      title: '',
      someRandomNumber: 0
    };

    this.handleChange = this.fnHandleChange.bind(this);
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
    .then(users=> this.setState({userList: users}));
  };

  fnHandleChange = e => {
    this.setState({searchField: e.target.value});
  };

  fnHandleClick=()=> {
      this.setState({someRandomNumber: this.state.someRandomNumber + 1}, 
        ()=> console.log( this.state.someRandomNumber ));
  }

  render(){
    const { userList, searchField } = this.state;

    const filteredUserNames = userList.filter(fUser=>
        fUser.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className='App' onClick={this.fnHandleClick}>
        <h1>{this.state.searchField}</h1>
          <SearchBox 
            placeholder='Search using a name'
            handleChange={this.fnHandleChange}
          />

        <CardList oUserList={userList}/>
        <p><h1>{this.state.someRandomNumber}</h1></p>
        <button onClick={this.fnHandleClick}><b>Click</b></button>
      </div>
    );
  }
}

export default App;