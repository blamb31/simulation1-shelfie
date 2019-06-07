import React , {Component} from 'react'

export default class Form extends Component{
    constructor(props) {
        super(props)


// Image for when no image has been entered https://cdn.shopify.com/s/files/1/0249/6132/t/46/assets/no-image.svg?419
        this.state = {
            image_url : '',
            name: '',
            price: 0,
            editId: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps !== this.props) {
            let {image_url, name, price, id} = this.props.editProduct

            this.setState({
                image_url,
                name,
                price,
                editId:id
            })

        }
    }

    handleChange(name, input) {
        this.setState({
            [name]: input
        })
    }

    handleCancelClick =() => {
        this.setState({
            image_url: '',
            name: '',
            price: 0
        })
    }

    handleAddClick = () => {
        this.props.addProduct(this.state)
        this.setState({
            image_url: '',
            name: '',
            price: 0
        })
    }

    render() {
        return(
            <div>
                <div>
                    {(this.state.image_url) ?
                        <img height='300' width='400' src={this.state.image_url} />
                    :
                        <img height='300' width='400' src='https://cdn.shopify.com/s/files/1/0249/6132/t/46/assets/no-image.svg?419'/>
                    }
                </div>
                <div>
                    <input type='text' name='image_url' value={this.state.image_url} onChange={(e) => this.handleChange(e.target.name , e.target.value)} placeholder='Image URL' />
                    <input type='text' name='name' value={this.state.name} onChange={(e) => this.handleChange(e.target.name , e.target.value)} placeholder='Product Name' />
                    <input type='number' name='price' value={this.state.price} onChange={(e) => this.handleChange(e.target.name , e.target.value)} placeholder='Price' />
                </div>
                <div>
                    <button onClick={this.handleCancelClick}>Cancel</button>
                    {(!this.props.editMode) ?
                        
                        <button onClick={() => this.handleAddClick}>Add to Inventory</button>
                    :
                        <button onClick={() => {
                            console.log(this.state)
                            this.props.saveEditedProduct(this.state)}
                        }>Save Changes</button>
                        
                    }
                </div>
            </div>
        )
    }
}