const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req, res) =>{
    return res.send("Test API");
})

app.get("/users", async (req, res) =>{
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const resp = await axios.get(url);
        const users = resp.data
        console.log(users);
        return res.status(200).send({
            status: true,
            users
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            status: false,
            msg: error.data
        })
    }
})

const PORT = 7000;

app.listen(PORT, (() => {
    console.log("Server started at PORT " + PORT);
}))