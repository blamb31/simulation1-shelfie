import React , {Component} from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        let product = this.props.productList.map( (elem, index) => {
            return <Product 
            editProduct={this.props.editProduct} 
            id={elem.id} 
            deleteProduct={this.props.deleteProduct} 
            key={index} 
            product={elem} />
        })
        return(
            <div>
                Dashboard
                {product}
            </div>
        )
    }
}