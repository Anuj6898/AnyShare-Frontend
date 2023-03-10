const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://Anuj:Centenario@cluster0.55qy4.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
// // async function run() {
// //   try {
// //     const database = client.db('ships');
// //     const movies = database.collection('shipdata');
// //     // Query for a movie that has the title 'Back to the Future'
// //     const query = { shipNo: '1902382097DKJF384', pos:{lat:"78.23432432523", long:"19.72034738934" }, cargoLoad:90 };
// //     const movie = await movies.insertOne(query);
    
// //     console.log(movie);
// //   } finally {
// //     // Ensures that the client will close when you finish/error
// //     await client.close();
// //   }
// // }
// // run().catch(console.dir);
const express = require("express")
const app = express()
const cors = require("cors")

app.get("/ships",cors(),async (req,res)=>{
    try{
        const database = client.db('ships')
        const collection = database.collection('shipdata')
        const query = {
            shipNo: "IN9230",
            cargo: 90,
            offLoadTime: 120,
            position:{
                lat: "72.234324",long:"19.2343243"
            }
        }
        const push = await collection.insertOne(query)
        console.log(push)
    }
    finally{
        await client.close()
    }
    // console.log(`data Pushed: ${query}`)
})

app.get("/home",cors(), (req,res)=>{
    res.json({name:"anuj Sonsurkar", game:"forza horizon"});
})

app.listen(3000,()=>{
    console.log("Port Open at 3000")
})
