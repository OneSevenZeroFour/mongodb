
|id|name|age|
|-|-|-|
|1|laoyao|16|
|2|laoxie||
|3||25|

1.创建数据库如果数据库没有就创建，如果有，切换到对应的数据库
```js
use 数据库名
```

2.创建表
```js
db.createCollection("表名")
```

3.显示数据库
```js
show dbs
```

4.往表中插入数据
```js
db.表名.insert(json格式)
//插入多条
db.表名.insert([{},{},{}])
```

5.删除数据库
```js
db.dropDatabase()
```

6.查找表

查找所有数据
```
db.表名.find()
```
where语句
```js
db.表名.find({
	name:"asd"
})
```

where id < 2 OR (name = "asdasdas" AND id = 4)
```js
db.skill.find({
  $or: [
    {
      _id: {
        $lte: 2
      }
    }, {
      $and: [
        {
          "_id": 4
        }, {
          "name": "asdasdas"
        }
      ]
    }
  ]
})
```
where _id = 7 and name "hello world"
```
db.skill.find({
  $and: [
    {
      "_id": 7
    }, {
      "name": "hello world"
    }
  ]
})
```

where _id = 7 or name "hello world"
```
db.skill.find({
  $or: [
    {
      "_id": 7
    }, {
      "name": "hello world"
    }
  ]
})
```
where like < 50
```
db.col.find({
  "likes": {
    $lt: 50
  }
})
```

7. 更新数据

第一个对象就是find条件，第二个就是需要更新($set)或者覆盖的内容
```js
db.skill.update({
  _id: {
    $lte: 4
  }
}, {
	//$set更新
  $set: {
    name: "aaaa"
  }
}, {
	//默认改一条，加了就是可以改多条
	multi: true
})
```

8. 删除数据

删除_id小于5的所有数据
```js
db.skill.remove({
  _id: {
    $lte: 5
  }
})
```

9. limit和skip

limit 显示的条数
skip  就是从第几行开始显示
```
db.skill.limit().skip()
```

10 排序sort

1和-1
```
db.表名.find().sort({KEY:1})
```
