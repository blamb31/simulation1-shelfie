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

    }
}

