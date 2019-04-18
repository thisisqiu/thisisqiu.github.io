var express = require("express");

var async = require("async");
var { waterfall , parallel} = require("async");

var router = express.Router();
var { conn } = require("./db");

router.get("/", (req, res) => {
  // console.log("111");
  res.json({
    msg: "vue项目路由",
    code: "success"
  });
});


router.post("/regs", (req, res) => {//通过axios
  var username = req.body.username;
  var password = req.body.password;
  // console.log(req.body)
  conn((err, db) => {
    if (err) throw err;
    waterfall([
      function(cb) {
        db.collection("userinfo").findOne({ username }, (err, result) => {
          if (result != null) {
            //用户名已注册
            cb(null, true);
          } else {
            //可以注册
            cb(null, false);
          }
        });
      },function(reg,cb){
        if(reg){//用户名已注册
          cb(null,{msg:"账号名已存在,请重新注册！",code:100});
        }else{//可以注册
          db.collection("userinfo").insert({username:username,password:password},(err,result)=>{
            if(err) throw err;
            cb(null,{msg:"注册成功！前往登录",code:200});
          })
        }
      }
    ],
    function(err,result){
      if(err) throw err;
      res.send(result);
      db.close();
    });
  });
});


router.post("/login", (req, res) => {
  var username = req.body.username;
  var password = req.body.userpwd;
  // console.log(req.body)
  conn((err, db) => {
    if (err) throw err;
    db.collection("userinfo").findOne({ username, password }, (err, result) => {
      if (err) throw err;
      // console.log(result);
      if (result != null) {
        res.send({ msg: "登录成功！即将跳转", code:200,username});
      } else {
        res.send({ msg: "账户名或密码错误！请检查", code:100});
      }
    });
    db.close();
  });
});


router.get("/getCoffee",(req,res)=>{
  // console.log(req.query);
  var skip = (req.query.limit-1) * 8;
  conn((err,db)=>{
      db.collection("coffeeinfo").find({},{_id:0}).limit(8).skip(skip).toArray((err,result)=>{
      if(err) throw err;
      // console.log(result);
      res.send(result);
      db.close();
    })
  })
})


router.get("/getBread",(req,res)=>{
  conn((err,db)=>{
      db.collection("breadinfo").find({},{_id:0}).toArray((err,result)=>{
      if(err) throw err;
      // console.log(result);
      res.send(result);
      db.close();
    })
  })
})


router.get("/getGoodsInfo",(req,res)=>{
  var id = req.query.id;
  var type = req.query.type;
  var goods = "";
  conn((err,db)=>{
    if(type == "1"){
      goods = "coffeeinfo";
    }else{
      goods = "breadinfo";
    }
    db.collection(goods).findOne({id:id},{_id:0},(err,result)=>{
      if(err) throw err;
      res.send(result);
      db.close();
    })
  })
})

router.post("/addMyShoppingCar",(req,res)=>{
  var username = req.body.username;
  var goodsid = req.body.goodsid;
  var goodstitle = req.body.goodstitle;
  var goodsimg = req.body.goodsimg;
  var goodsprice = req.body.goodsprice;
  var type = req.body.type;
  var num = req.body.num * 1;
  var id = username+goodsid;
  conn((err,db)=>{
    db.collection("shoppingcarinfo").findOne({username,goodsid,id},{_id:0},(err,result)=>{
      if(err) throw err;
      if(!result){
        db.collection("shoppingcarinfo").insert({username,goodsid,goodstitle,goodsimg,goodsprice,type,num,id,check:false},(err,result)=>{
          if(err) throw err;
          res.send(result);
        })
      }else{
        db.collection("shoppingcarinfo").updateMany({username,goodsid},{$inc:{num:num}},(err,result)=>{
          if(err) throw err;
          res.send(result);
          db.close();
        })
      }
    })
  })
})

router.post("/getMyCarInfo",(req,res)=>{
  var username = req.body.username;
  conn((err,db)=>{
      db.collection("shoppingcarinfo").find({username},{}).toArray((err,result)=>{
      if(err) throw err;
      // console.log(result);
      res.send(result);
      db.close();
    })
  })
})

router.post("/del",(req,res)=>{
  var id = req.body.id;
  conn((err,db)=>{
    db.collection("shoppingcarinfo").deleteOne({id},(err,result)=>{
      if(err) throw err;
      res.send(result);
      db.close();
    })
  })
})

router.post("/delCheck",(req,res)=>{
  var delList = req.body.delList;
  conn((err,db)=>{
    db.collection("shoppingcarinfo").remove({id:{$in:delList}},(err,result)=>{
      if(err) throw err;
      // console.log(result);
      res.send(result);
      db.close();
    })
  })
})

router.post("/updateNum",(req,res)=>{
  var id = req.body.id;
  var num = req.body.num;
  conn((err,db)=>{
      db.collection("shoppingcarinfo").updateOne({id:id},{$set:{num:num}},(err,result)=>{
        if(err) throw err;
        // console.log(result);
        res.send(result);
        db.close();
    })
  })
})

router.post("/searchByKey",(req,res)=>{
  var key = req.body.key;
  var reg = new RegExp(key);
  conn((err,db)=>{
    db.collection("allgoodsinfo").find({title:reg},{}).toArray((err,result)=>{
      if(err) throw err;
      res.send(result);
    })
  })
})

module.exports = router;
