import { getPostList } from "../modle/db";

var express = require('express');
var router = express.Router();






const ins = (req: any, res: any, next: () => void) => {
  console.log(res.data,'req~~~')
  next();
};

/* GET users listing. */
router.get('/getPostList',  async function(req: any, res: any, next: () => void) {
   let a =  await getPostList()
   req.data=a
  res.data=a
   next()
});
router.use('/detail',ins)



module.exports = router;
/*  */