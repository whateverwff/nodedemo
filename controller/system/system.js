import url from 'url'
import User from "../../models/user/user";

class System {
    constructor() {
    }
    async systemset(req,res,next){
        console.log(req.query);
        // User.create({
        //     username: 'zhangsan'
        // })
        const result = await User.deleteOne({_id:req.query.userId.toString()})
        console.log(result);
        res.send({})
    }
}


export default new System()
