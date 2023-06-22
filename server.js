
const mongodb = require("./config/database");
const app = require("./app");
const dotEnv = require("dotenv")
dotEnv.config(); // Load environment variables from .env file
const connectedDb = require("./config/database")
const PORT = process.env.PORT || 9000;


connectedDb();

app.get("/",(req,res)=> {
    res.send('ecommerce api is running')
})

app.listen(process.env.PORT,()=> {
console.log(`PORT IS RUNNING ON ${PORT}`)
})