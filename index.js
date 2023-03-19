const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Docker test! This has been updated");
})

app.listen(8080, () => console.log('Server is running'));