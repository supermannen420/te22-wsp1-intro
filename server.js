import express, { request, response } from "express"
import nunjucks from "nunjucks"


const app = express()

nunjucks.configure("views", {
    autoescape: true,
    express: app,
})

app.use(express.static("public"))



app.get('/', (req, res) => {
    console.log(req.query)
    const name = req.query.name
    console.log(name)
    res.render('index.njk', {
        message: 'hello world!', 
        title: 'hej jag hetter',
    })
})

app.get('/watch', (request,response) => {
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

app.get('/ytub' , (request,response) => {
    const ID = request.query.v
    console.log(ID)

    response.render('ytub.njk', {
        title: 'youtube',
        youtubeID: ID,
    })
})


})

app.get('/om', (req, res) => {
    res.render("om.njk", {
        message: "det är om!", 
        title: "om",
    })
})

app.get('/readme', (req, res) => {
    console.log(req)
    response.send("vad hände")

})


app.listen(3000, () => {
    console.log('server is running on http://localhost:3000')
})

