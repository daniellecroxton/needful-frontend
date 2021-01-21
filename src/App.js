import React from 'react';

class App extends React.Component {

  componentDidMount() {

    fetch('http://localhost:3000/api/v1/users/2/items')
    .then(response => response.json())
    .then(res => console.log(res))
  }

  render() {

    return (
      <div className="App">
          <p>Welcome to needful. A work in progress.</p>
      </div>
    );
  }
}

export default App;
