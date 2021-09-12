import { Component } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Card from "./Components/Card/Card";
import SearchBox from "./Components/SearchBox/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchTerm: "",
    };
  }

  async componentDidMount() {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => this.setState({ users: json }));
    } 
    catch (err) {
      console.log(err);
    }
  }

  // function to handle user input chagne passed to SearchBox Comp
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { users, searchTerm } = this.state;
    const filteredUser = users.filter((user) => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
      <div className="App">
        <h1>User List</h1>
        <SearchBox placeHolder="Search" handleChange={this.handleChange} />

        <CardList>
          {filteredUser.map((user) => {
            return <Card key={user.id}>{user}</Card>;
          })}
        </CardList>
      </div>
    );
  }
}

export default App;
