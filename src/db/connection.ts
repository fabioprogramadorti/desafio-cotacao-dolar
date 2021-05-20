// Conexão mongodb
import mongoose from 'mongoose'

const dbHost = process.env.DB_HOST
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const dbName = process.env.DB_NAME

export const dbInit = () => {

  console.log(
    dbHost,
    dbUser,
    dbPassword,
    dbName,
  )

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

  var connectionString = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`

  mongoose.connect(connectionString, options)
    .then(res => {
      console.log('MongoDB connected successfuly')
    })
    .catch(err => {
      console.error(`An error occurred on the database connection: ${err.message}`)
    })
}
