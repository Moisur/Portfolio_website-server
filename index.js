const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT||5000
const cors = require('cors')
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://Mosiurprofosonal:KMzDmYrWIjptSrnH@cluster0.bnqyhn4.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
      await client.connect();
      const collection = client.db("protfosonal").collection("Data");
      app.get('/service',async (req, res) => {
        // http://localhost:5000/service 
        const data = {};
        const result = await collection.find(data).toArray();
        res.send(result)
    })
     
    } finally {
    //   await client.close();
    }
  }
  run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello User!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})