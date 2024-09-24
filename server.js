import express, { request, response } from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"
import indexRouter from './routes/index.js'



const app = express()

app.use('/', indexRouter)

nunjucks.configure("views", {
    autoescape: true,
    express: app,
})



app.use(express.static("public"))


app.use((req, res) =>{
   // res.status(404).send("404 not found")

   res.status(404).render('404.njk' , {
    title: '404 not found',
   })
})



app.listen(3000, () => {
    console.log('server is running on http://localhost:3000')
})

