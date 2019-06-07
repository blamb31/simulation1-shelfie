module.exports = {
    read: (req, res) => { 
        let db = req.app.get('db')

        db.get_products().then( products => {
            res.status(200).send(products)
        }).catch(err => console.log(err))

       
    },
    create: (req, res) => {
        let db = req.app.get('db')

        db.create_product(req.body).then( products => {
            res.status(200).send(products)
        }).catch(err => console.log(err))

    },
    delete: (req, res) => {
        let db = req.app.get('db')

        db.delete_product(req.params.id).then( products => {
            res.status(200).send(products)
        }).catch(err => console.log(err))
    },
    update: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params
        console.log(555555555555, req.body)
        let {name, price, image_url} = req.body

        db.update_product({id, name, price, image_url}).then( products => {
            res.status(200).send(products)
        }).catch(err => console.log(err))
    }
}

