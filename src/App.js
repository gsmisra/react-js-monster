import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box-component.jsx';


class App extends Component {

  constructor(){
    super();

    this.state={
      userList:[],
      searchField:''
    };

    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
    .then(users=> this.setState({userList: users}));
  };

  handleChange = e => {
    this.setState({searchField: e.target.value});
  };


  render(){

    const { userList, searchField } = this.state;

    const filteredUserNames = userList.filter(fUser=>
        fUser.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className='App'>

        <h1>Monster RolodEx</h1>
          <SearchBox 
            placeholder='Search using a name'
            handleChange={this.handleChange}
          />

        <CardList oUserList={filteredUserNames}/>
      </div>
    );
  }
}



export default App;