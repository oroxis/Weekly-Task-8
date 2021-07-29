import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {persons: []}

  componentDidMount() {
    axios.get(`https://swapi.dev/api/people/`)
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
      })
}

  render() {
    return (
      <div style={{backgroundColor: "lightblue", display: 'flex'}}>
       
       { this.state.persons.map(person => 
       
            <div className="sector" >
              <h1>Name: </h1><p>{person.name}</p>
              <h3>Gender: </h3><p>{person.gender}</p>
              <h3>Height: </h3><p>{person.height}</p> 
              <img src = "https://picsum.photos/200/300?random=1" alt = ""/>
            </div>
              
           
            )}
      </div>
    )
  }
}