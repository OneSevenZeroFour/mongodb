var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/laoyao';

MongoClient.connect(DB_CONN_STR, function(err, db) {
  console.log("连接成功！");
  //选中age集合，并用find方法把结果集拿回来进行处理
  // db.collection("age").find({title: "cba"}).toArray(function(err, result) {
  //   if (err) {
  //     console.log('Error:' + err);
  //     return;
  //   }
  //   console.log(result);
  // });

  // db.collection("age").insert([
  //   {
  //     title: "插入的值A"
  //   }, {
  //     title: "插入的值B"
  //   }
  // ], function(err, result) {
  //   if (err) {
  //     console.log('Error:' + err);
  //     return;
  //   }
  //   console.log(result)
  // })
  // db.collection("age").update({
  //   "_id": 1
  // }, {
  //   $set: {
  //     title: "你好，世界",
  //     skill: "js"
  //   }
  // }, function(err, result) {
  //   if (err) {
  //     console.log('Error:' + err);
  //     return;
  //   }
  //   //console.log(result);
  // });
  db.collection("age").remove({
    "_id": 1
  }, function(err, result) {
    if (err) {
      console.log('Error:' + err);
      return;
    }
    //console.log(result);
    db.close();
  });
});
