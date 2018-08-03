module.exports = {
    addShow: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { tmdb_id, list_type } = req.body

        dbInstance.addShow([tmdb_id, list_type, req.user])
            .then(res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'oops! something went wrong!' })
                console.log('error: ', err);

            })
    }
}