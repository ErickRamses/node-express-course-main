
// const http =require("http")
// const { endianness } = require("os")

// const bunny = http.createServer((req,res)=>{
    
//     console.log('Express Tutorial')
//     console.log('does it work?? of course that it will jajajsasjsajsajsajjdjsajdjasjdjsajdsakjfhd')
//     res.end("this is not in irland js")
// })
// bunny.listen(5000)
const express =require("express")
const app=express()

app.listen(5000,()=>{
    console.log("serverlistening")
})