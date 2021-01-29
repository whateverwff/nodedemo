import express from "express";
import Workberch from '../../controller/workberch/workberch'

const router = express.Router()

/**
 * @api {get} /home/getnoticelist  获取通知列表
 * @apiDescription 获取通知列表
 * @apiName getnoticelist
 * @apiGroup Home
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *
 *  }
 * @apiSampleRequest http://localhost:9918/home/getnoticelist
 * @apiVersion 0.0.0
 */
router.get('/getnoticelist',Workberch.getNoticeList)


export default router
