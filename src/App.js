import React from 'react';
import {connect} from 'react-redux'
import {fetchUsers} from './actions/fetchUsers'
import UsersContainer from './containers/UsersContainer'
import ItemsContainer from './containers/ItemsContainer'
class App extends React.Component {

  componentDidMount() {
    this.props.fetchUsers
  }


  render() {

    return (
      <div className="App">
          <p>Welcome to needful. A work in progress.</p>
          <UsersContainer />
          <ItemsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

// const mapDispatchToProps = (state) => {
  
// }

export default connect(mapStateToProps, {fetchUsers})(App);
