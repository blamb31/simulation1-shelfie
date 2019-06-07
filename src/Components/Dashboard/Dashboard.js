import React , {Component} from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        let product = this.props.productList.map( elem => {
            console.log(elem)
            return <Product product={elem} />
        })
        return(
            <div>
                Dashboard
                {product}
            </div>
        )
    }
}