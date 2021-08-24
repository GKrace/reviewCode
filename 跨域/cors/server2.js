let express = require("express")
let app = express()
// 放行白名单里的源
let whiteList = ["http://localhost:3999"]
app.use(function (req, res, next) {
    let origin = req.headers.origin;
    // 在白名单里的源进行放行
    if (whiteList.includes(origin)) {
			// 设置哪些源可以访问我
			res.setHeader("Access-Control-Allow-Origin", origin)
			// 设置允许客户端给服务端传输数据
			res.setHeader("Access-Control-Allow-Headers", "name")

			res.setHeader("Access-Control-Allow-Methods", "PUT")
            
			// 设置请求最大存活时间，隔6s只发一次
			res.setHeader("Access-Control-Max-Age", 6000)

			//  设置能带cookie的凭证
			res.setHeader("Access-Control-Allow-Credentials", true)
            
			if (req.method === "OPTIONS") {
				res.end() // OPTIONS 请求不做任何处理
            }
        
            res.setHeader("Access-Control-Expose-Headers",'name')
		
		}

    next()
})
app.get('/getData', (req, res) => {
    console.log(req.headers)
    res.end('🐱🐱猫')
})
app.put("/getData", (req, res) => {
	console.log(req.headers)
	// 服务端想给客户端返回数据
	res.setHeader("name", "moka")
	res.end("🐱🐱猫")
})
app.use(express.static(__dirname))
app.listen(4999)
