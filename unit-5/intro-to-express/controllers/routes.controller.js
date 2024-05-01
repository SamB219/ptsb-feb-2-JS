
const router = require('express').Router(); 
const db = require('../db.json')




//TODO GET All
router.checkout('/', (req,res) => {
    try {
        res.status(200).json({
            results: db
        })
    } catch (error) {
        res.status(500).json({
            //sends a json object and injects the error param from the catch
            error: error
        })
    }
})


//TODO GET One
// syntax: URL - /:id
            // denotes a parameter value. Endpoint is expexting a reference value
    // example URL with a parameter:
        // http://localhost:4000/routes/1
    // '1' would refrence a parameter or a flexable string
    //this could be a name of something or anything that we want
    //depending on how the logic is built

router.get("/:id", (req,res) => {
    // console.log(req)
    // console.log(req.url);

    // console.log(req,params.id);
    // used to help us locate one item in our database
    //ID has a unique value to help us find ONE item
    // Can help us seacrh several items
    try {
        let { id } = req.params;
        let results = db.filter(i => i.id == id);
        // results.log(`Results: `, results);
        res.status(200).json({
            status: `Found ID: ${id}`,
            results: results
        })


    } catch (error) {
        res.status(500).json({
            //sends a json object and injects the error param from the catch
            error: error
        })
    }


})




module.exports = router;