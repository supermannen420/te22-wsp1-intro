import express from "express"

const router = express.Router()


router.get("/", (req, res) =>{
    const query =req.query.q || ""
    console.log("Query:", query)
    const names = ["jhon", "Jane", "Alice", "Bob"]
    const filteredNames = names.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase()))

    res.render("search.njk", {
        title: "search",
        query,
        names: filteredNames

    })
})

export default router