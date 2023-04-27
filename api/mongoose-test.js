const mongoose =require("mongoose")
const uri= "mongodb+srv://priyanka123:Priya%401234@cluster0.il5kt6p.mongodb.net/eyecare"
mongoose.connect(uri)
.then (()=>{
    console.log("Connection Established")
})