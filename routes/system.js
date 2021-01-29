import express from 'express'
import system from "../controller/system/system";

const router = express.Router()


/**
 * @api {get} /system/systemset  系统设置
 * @apiDescription 系统设置
 * @apiName systemset
 * @apiGroup System
 * @apiParam {string} userId 用户id
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *
 *  }
 * @apiSampleRequest http://localhost:9918/home/systemset
 * @apiVersion 0.0.0
 */
router.get('/systemset',system.systemset)


export default router
