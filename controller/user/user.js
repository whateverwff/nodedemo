import userModel from "../../models/user/user";

class User {
    constructor() {
    }
    list(req, res, next) {
        const id = req.query.userId;
       res.send([id])
    }
    /**
     * @author: wf
     * @createdate: 2021-01-28 17:33
     * @mark:
     */
    async login(req, res, next) {
        const user = await userModel.find()
        // userModel.create({
        //     username:'周瑜'
        // })
        res.send(user)
    }
}

export default new User()
