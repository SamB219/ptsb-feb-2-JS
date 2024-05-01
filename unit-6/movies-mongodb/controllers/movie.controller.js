const router = require('express').Router();
// const { mongo } = require('mongoose');
const Movie = require('../models/movie.model');



//Error Response Function
const errorResponse = (res, error) => {
    return(
        res.status(500).json({
            Error: error.message
        })
    )
}// helps us reduce our written code -- use this instead of personal error messages


// TODO POST
router.post('/', async (req, res) => {
    try {
        
        //1. Pull Data from client (body)
        const { title, genre, rating, length, releaseYear } = req.body;

        //2. Create a new object using the Model
        const movie = new Movie({
            title, genre, rating, length, releaseYear
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
// router.get('/find-one/:id',  async (req, res) => {
//     try {
//         // const { title, genre, rating, length, releaseYear } = req.body;
//         console.log(req._id);
    
    
//     } catch (err) {
//         errorResponse(res, err);
//     }
//     })
// TODO Get All Genre


// TODO PATCH One


// TODO DELETE One


module.exports = router;