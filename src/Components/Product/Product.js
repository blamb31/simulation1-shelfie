import React , {Component} from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props)

    }

    handleDeleteClick = () => {
        this.props.deleteProduct(this.props.id)
    }

    handleEditClick = () => {
        this.props.editProduct(this.props.product)
    }

    render() {
        let {product} = this.props
        return(
            <div>
                <div>
                    <img height='200'  src={product.image_url} />
                </div>

                <div>
                    <div>
                        <h2>{product.name}</h2>
                        <h3>{`$ ${product.price}`}</h3>
                    </div>
                    <div>
                        <button onClick={this.handleDeleteClick} >Delete</button>
                        <button onClick={this.handleEditClick}>Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}