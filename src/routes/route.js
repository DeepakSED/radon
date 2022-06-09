const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", publisherController.createAuthor)
router.post("/createBook" ,publisherController.createBook)
router.post("/createPublisher" ,publisherController.createPublisher)
router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
 router.put("/updatePrice",bookController.updatePrice)
 router.put("/updatePenguin",bookController.updatePenguin)

//router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)



module.exports = router;