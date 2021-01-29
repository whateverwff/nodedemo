import express from 'express'
import user from './api/users.js'
import workberch from './api/workberch.js'

export default app => {
    // app.use('/v1/api', express.static('public'));
    app.use('/user', user)
    app.use('/home', workberch)
}
