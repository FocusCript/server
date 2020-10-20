const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const chalk = require('chalk')

const app = express()

var corsOptions = {
  origin: "*",
}
app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.get("/", (req, res) => {
  res.json({ message: "Welcome to Focus application." })
})

// routes
require("./routes/userRoutes")(app)



// set port, set db.url 
const PORT = process.env.PORT || 5000;
const db = require("./models")

async function Start(){
  try{
      await db.mongoose.connect(db.url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false
      })
      await console.log(chalk.bold(`Database succesfuly connected : ${db.url} `))
      await app.listen(PORT, ()=>{
          console.log(chalk.blue.bold(`Server is running on port ${PORT}.`))
      })
  }
  catch(e){
      console.log(chalk.red(e.message))
  }
}

// start the SERVER
Start();