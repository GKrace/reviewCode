let express = require("express")
let app = express()

let WebSocket = require('ws');

let wss = new WebSocket.Server({ port: 3999 })

wss.on("connection", function (ws) {

    wss.on("message", function(data)  {
        console.log(data)
        ws.send('摩卡')
    })
})
