import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Dashboard from './Components/Dashboard/Dashboard'
import Axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      productList: []
    }
  }

  componentDidMount() {
    Axios.get('/api/products').then( products => {
      this.setState({
        productList: products.data
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard productList={this.state.productList} />
        <Form />
  
      </div>
    );

  }
}

export default App;
