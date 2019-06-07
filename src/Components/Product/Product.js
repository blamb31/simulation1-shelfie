import React , {Component} from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        let {product} = this.props
        console.log(333333333, product)
        return(
            <div>
                <img src={product.image_url} />
                <h2>{product.name}</h2>
                <h3>{`$ ${product.price}`}</h3>
            </div>
        )
    }
}