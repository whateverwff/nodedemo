import User from '../../controller/user/user'
var express = require('express');
var router = express.Router();



/**
 * @api {get} /user/login 用户登录
 * @apiDescription 用户登录
 * @apiName login
 * @apiGroup User
 * @apiParam {string} loginName 用户名
 * @apiParam {string} loginPass 密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "result" : {
 *          "name" : "loginName",
 *          "password" : "loginPass"
 *      }
 *  }
 * @apiSampleRequest http://localhost:9918/user/login
 * @apiVersion 0.0.0
 */
router.get('/login', User.login);

/**
 * @api {get} /user/list 用户列表
 * @apiDescription 用户列表
 * @apiName list
 * @apiGroup User
 * @apiParam {number} userId 用户ID
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 * {}
 * @apiSampleRequest http://localhost:9918/user/list
 * @apiVersion 0.0.0
 */
router.get('/list', User.list);

export default router
