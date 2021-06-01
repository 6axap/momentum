let momentum
let activities

class DAO {
  static async injectDB(client) {
    if (activities) {
      return
    }
    try {
      momentum = await client.db(process.env.MONGODB_DB)
      activities = await momentum.collection("activities")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in DAO: ${e}`,
      )
    }
  }

  static async getData() {
    let cursor
    let data
    try {
      cursor = await activities.find()
      data = await cursor.toArray()
      return data
    } catch (err) {
      console.error(err)
    }
  }

  static async postData(body) {
    let dateString = body.rounds[0].start;
    let date = new Date(dateString);
    let rounds = body.rounds;
    try {
      let insertResult = await activities.updateOne(
        { 
          rounds: { $all: [ rounds[0] ] },
        },
        {
          $set: {
            date: date.toLocaleDateString(),
            rounds: rounds,
          },
        },
        { upsert: true },
      )
      return insertResult
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = DAO