import React , {Component} from 'react'

export default class Form extends Component{
    constructor(props) {
        super(props)


// Image for when no image has been entered https://cdn.shopify.com/s/files/1/0249/6132/t/46/assets/no-image.svg?419
        this.state = {
            image_url : '',
            name: '',
            price: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(name, input) {
        this.setState({
            [name]: input
        })
    }

    handleCancelClick() {
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
                    <button>Cancel</button>
                    <button>Add to Inventory</button>
                    {/* <button>Save Changes</button> */}
                </div>
            </div>
        )
    }
}