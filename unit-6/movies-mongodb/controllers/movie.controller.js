const router = require('express').Router();
// const { mongo } = require('mongoose');
const Movie = require('../models/movie.model');
const validateSession = require('../middleware/validate-session');


//Error Response Function
const errorResponse = (res, error) => {
    return(
        res.status(500).json({
            Error: error.message
        })
    )
}// helps us reduce our written code -- use this instead of personal error messages


// TODO POST
router.post('/', validateSession, async (req, res) => {
    try {
        
        //1. Pull Data from client (body)
        const { title, genre, rating, length, releaseYear } = req.body;

        //2. Create a new object using the Model
        const movie = new Movie({
            title, genre, rating, length, releaseYear,
            owner_id: req.user.id
        })

        //3. Use mongoose method to save MongoDB (database)
        const newMovie = await movie.save();

        //4. Client Response
        res.status(200).json({
            result: newMovie,
            message: `${newMovie.title} added to collection!`
        })

    } catch (err) {
        errorResponse(res, err)
    }
})

// TODO GET One
router.get('/find-one/:id', async(req, res) => {
try {
    const { id } = req.params;
    const getMovie = await Movie.findOne({_id: id});
        getMovie ?
        res.status(200).json({
            result: getMovie
}) : null

} catch (err) {
    errorResponse(res, err);
}
})



// TODO Get All

router.get('/', validateSession, async (req, res) => {
    try {
        const getAllMovies = await Movie.find();
        
        getAllMovies.length > 0 ?
            res.status(200).json({
                result: getAllMovies
            }) : null;
        
    } catch (err) {
        errorResponse(res, err);
    }
});



// TODO Get All Genre
router.get('/genre/:genre', async(req,res) => {
    try {
        
        const { genre } = req.params;
        let buildWord;

        if(genre) {
            for(let i = 0; i < genre.length; i++) {
                i === 0 ?
                    buildWord = genre[i].toUpperCase():
                    buildWord += genre[i].toLowerCase();
            }
        }

        const getMovies = await Movie.find({genre: buildWord});

        getMovies.length > 0 ? 
            res.status(200).json({
                result: getMovies
            }) :
            res.status(404).json({
                result: `No movies found.`
            });

    } catch (err) {
        errorResponse(res,err);
    }
})

// TODO PATCH One
// UPDATE

// -PUT - used when needing to modify the document completely - can be used to modify one field (key)

//-PATCH - considers the individual feilds within the doc

router.patch('/:id', validateSession, async (req,res) => {
    try {
        // 1 pull value from parameter
        const { id } = req.params;
        console.log('ID:', id);
        // 2 Pull data from the body
        const info = req.body;

        //3 use method to locate the doc based off the ID and pass in new info
        const update = await Movie.findOneAndUpdate({ _id: id, owner_id: req.user._id}, info, {new: true});
        // {new: true} provides us with the updated document from the database
        // .findOneAndUpdate(query, document, options)

        // 4 respond to client

        res.status(200).json({
            message: `${update.title} updated!`,
            update
        })
    } catch (err) {
        errorResponse(res,err);
    }
})

// TODO DELETE One
router.delete('/:id', validateSession, async (req,res) => {
    try {
        // 1. Capture ID
        const { id } = req.params;

        // 2. use delete method to locate and remove base off ID
        const deleteMovie = await Movie.deleteOne({_id: id, owner_id: req.user._id});
        console.log(deleteMovie);
        // 3. Respond to client
        deleteMovie.deletedCount ?
            res.status(200).json({
                message: `Movie Removed`
            }) :
            res.status(404).json({
                message: `No movie in collection`
            })
    } catch (err) {
        errorResponse(res,err);
    }
})

module.exports = router;