//增
db.skill.insert([
  {
    name: "hello world",
    skill: [
      "ps", "js", "css"
    ],
    obj: {
      name: "a",
      skill: "b"
    },
    num: 1
  }, {
    a: "a",
    b: "b"
  }
])

db.skill.insert([
  {
    name: "asdasdas",
    _id: 2
  }
])
db.col.find({
  "likes": {
    $lt: 50
  }
})
where id < 5 and name = "laoyao"
db.skill.find({_id: 1})
db.skill.find({})
where id < 5 OR(name = "hello world" AND id = 7)
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
db.skill.find({
  $and: [
    {
      "_id": 7
    }, {
      "name": "hello world"
    }
  ]
})
db.skill.update({
  _id: 1
}, {
  _id: 1,
  arr: ['a', 'b', 'c']
})

db.skill.update({
  _id: {
    $lte: 4
  }
}, {
  $set: {
    name: "aaaa"
  }
}, {multi: true})

db.skill.remove({
  _id: {
    $lte: 5
  }
})
