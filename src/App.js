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
      productList: [],
      editMode: false,
      editProduct: {}
    }
  }

  componentDidMount =() => {
    Axios.get('/api/products').then( products => {
      this.setState({
        productList: products.data
      })
    }).catch(err => console.log(err))
  }

  addProduct = (newProduct) => {
    Axios.post('/api/products', newProduct).then( products => {
        this.setState({
          productList: products.data
        })
    })
  }

  deleteProduct = (id) => {
    Axios.delete(`/api/products/${id}`).then( products =>{
      this.setState({
        productList: products.data
      })
    })
  }

  editProduct = (product) => {
    this.setState({
      editProduct: product,
      editMode: true
    })
  }

  saveEditedProduct = (product) => {
    console.log(999999, product)
    Axios.put(`/api/products/${product.editId}`, product).then( products => {
      this.setState({
        productList: products.data,
        editMode: false,
        editProduct:{}
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard editProduct={this.editProduct} deleteProduct={this.deleteProduct} productList={this.state.productList} />
        <Form saveEditedProduct={this.saveEditedProduct} editProduct={this.state.editProduct} editMode={this.state.editMode} 
        addProduct={this.addProduct} />
  
      </div>
    );

  }
}

export default App;
