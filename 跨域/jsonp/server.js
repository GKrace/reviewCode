var express = require("express")
let app = express()
app.get("", (req, res) => {
	let { wd, cb } = req.query
    console.log(wd)
    res.end(`${cb}('分别是摩卡和布丁')`)
})
app.listen(3999)
