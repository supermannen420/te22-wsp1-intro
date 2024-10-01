import express from "express"

const router = express.Router()



router.get("/", (req, res) => {


    res.render("calc.njk")
})

router.get("/add",(req, res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2
    const sum = Number(num1) + Number(num2)
    res.send(`summan av ${num1} och ${num2} är ${sum}`)
})






export default router