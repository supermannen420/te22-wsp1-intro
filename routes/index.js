import express from "express"


const Router = express.Router()



Router.get("/test" , (req, res) => {
    res.send("hello world")

   
})

Router.get('/', (req, res) => {
    console.log(req.query)
    const name = req.query.name
    console.log(name)
    res.render('index.njk', {
        message: 'hello world!', 
        title: 'hej jag hetter',
    })
})

Router.get('/watch', (request,response) => {
    const movieID = request.query.v
    console.log(movieID)

    const movies = {
        'tt0111161':{
            title: 'The Shawshank Redemtion',
            year: 1994
        }
    }



    const movie = movies[movieID]

    console.log(movie)

    response.render('watch.njk', {
        title: 'watch',
        movie: movie
    })

    //res.json(movie)
})

Router.get('/ytub' , (request,response) => {
    const ID = request.query.v
    console.log(ID)

    response.render('ytub.njk', {
        title: 'youtube',
        youtubeID: ID,
    })
})

Router.get('/om', (req, res) => {
    res.render("om.njk", {
        message: "det är om!", 
        title: "om",
    })
})

Router.get('/readme', (req, res) => {
    console.log(req)
    response.send("vad hände")

})


export default Router