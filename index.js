require('dotenv').config()
const { MongoClient } = require('mongodb');
const app = require("./src/server")
const port = process.env.PORT || 3000

var DAO = require('./src/dao')

MongoClient.connect(
  process.env.MONGODB_URI,
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  },
)
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    let db = await DAO.injectDB(client)
    // console.log(db)

/*     let momentum = await client.db(process.env.MONGODB_DB)
    let activities = await momentum.collection("activities")
    let result = await activities.find().toArray()
    console.log(result) */
  })

app.listen(port, () => console.log(`Listening on port ${port}`));