import express from 'express'
import user from './users.js'
import workberch from './workberch.js'
import system from "./system";
export default app => {
    // app.use('/v1/api', express.static('public'));
    app.use('/user', user)
    app.use('/home', workberch)
    app.use('/system', system)
}
