module.exports = {
    addShow: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { tmdb_id, list_type } = req.body
        // console.log('req.user', req.user.id)
        dbInstance.addShow([tmdb_id, list_type, req.user.id])
            .then(res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'oops! something went wrong!' })
                console.log('error: ', err);

            })
    },

    getShows: (req, res, next) => {
        const dbInstance = req.app.get('db')

        console.log('req.user', req.user)
        dbInstance.getShows([req.user.id])
            .then(shows => {
                res.status(200).send(shows)
            })
            .catch(err => {
                res.status(500).send({ errorMessage: 'oops! something went wrong!' })
                console.log('error: ', err);

            })
    }
}