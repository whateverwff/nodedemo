import mongoose from 'mongoose'
import chalk from "chalk";

mongoose.connect('mongodb://localhost:27017/elm')

const db = mongoose.connection


db.on('open', () => {
    console.log(
        chalk.green('数据库连接成功')
    )
})

db.on('error', (error) => {
    console.log(
        chalk.red(`Error in MongoDb connection: ${error}`)
    )
})

db.on('close', () => {
    console.log(
        chalk.blue('数据库连接断开，正在重新连接数据库')
    )
    mongoose.connect('mongodb://localhost:27017/elm')
})

export default db
