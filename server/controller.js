module.exports = {
    addShow: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { tmdb_id, list_type } = req.body

        dbInstance.getShows([req.user.id])
            .then(shows => {
                if (shows.filter(show => show.tmdb_id === tmdb_id).length === 0) {
                    dbInstance.addShow([tmdb_id, list_type, req.user.id])
                        .then(res.sendStatus(200))
                        .catch(err => {
                            res.status(500).send({ errorMessage: 'oops! something went wrong!' })
                            console.log('error: ', err);

                        })
                } else {
                    dbInstance.moveShow([list_type, req.user.id, tmdb_id])
                        .then(res.sendStatus(200))
                        .catch(err => {
                            res.status(500).send({ errorMessage: 'oops! something went wrong!' })
                            console.log('error: ', err);

                        })
                }
            })

    },

    getShows: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.getShows([req.user.id])
            .then(shows => {
                res.status(200).send(shows)
            })
            .catch(err => {
                res.status(500).send({ errorMessage: 'oops! something went wrong!' })
                console.log('error: ', err);

            })
    },

    moveShow: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { tmdb_id, list_type } = req.body

        dbInstance.moveShow([list_type, req.user.id, tmdb_id])
            .then(res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'oops! something went wrong!' })
                console.log('error: ', err);

            })
    },

    deleteShow: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { tmdb_id } = req.body

        dbInstance.deleteShow([req.user.id, tmdb_id])
            .then(res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'oops! something went wrong!' })
                console.log('error: ', err);

            })
    }
}