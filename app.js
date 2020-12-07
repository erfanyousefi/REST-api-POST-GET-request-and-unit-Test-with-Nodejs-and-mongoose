const express = require("express");
const {
    ObjectID
} = require("mongodb");
const bodyParser = require("body-parser");
let app = express();
const PORT = 5000;
const mongoose = require("./db/mongoose");
const {
    UserModel
} = require("./models/User");
const {
    TodoModel
} = require("./models/Todo");

app.use(bodyParser.text());
app.use(bodyParser.json());

app.post("/user", (req, res) => {
    const userdata = new UserModel({
        name: req.body.name,
        family: req.body.family,
        phone: req.body.phone,
        email: req.body.email
    })
    userdata.save().then((doc) => {
        console.log("------------------------------------------------------------------");
        console.log(`name : ${doc.name}, family : ${doc.family}, phone  ${doc.phone}, email : ${doc.email}`);
        console.log("insert 1 count document in user collection");
        res.send(doc);
    }, (err) => {
        console.log("unable to save data in user collection");
        res.status(400).send(err);
    })
})
app.post("/todo", (req, res) => {
    const todoData = new TodoModel({
        title: req.body.title,
        body: req.body.body
    });
    todoData.save().then((doc) => {
        console.log("----------------------------------------------------------------");
        console.log(`title : ${doc.title}`);
        console.log(`body : ${doc.body}`);
        console.log("insert 1 count document in todo collection");
        res.send(doc);
    }, (err) => {
        console.log("Unable to insert data in todo collection");
        res.status(400).send(err);
    })
})
app.get("/users", (req, res) => {
    UserModel.find({}).then(docs => {
        res.send(docs);
    }, (err) => {
        res.send(err)
    })
})
app.get("/todos", (req, res) => {
    TodoModel.find({}).then((docs) => {
        res.send(docs);
    }, (err) => {
        res.send(err);
    })
})
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    if (ObjectID.isValid(id)) {
        UserModel.findById({
            _id: new ObjectID(id)
        }).then((user) => {
            if (user) {
                res.send(user)
            } else {
                res.status(404).send({
                    Error: 'not found document in userts collection'
                })
            }
        }, (err) => {
            res.send(err);
        })
    } else {
        res.status(404).send({
            error: "user id is invalid please enter the valid id"
        })
    }

})
app.get("/todos/:id", (req, res) => {
    const id = req.params.id;
    if (ObjectID.isValid(id)) {
        TodoModel.findOne({
            _id: new ObjectID(id)
        }).then(todo => {
            if (todo) {
                res.send(todo);
            } else {
                res.status(404).send({
                    Error: "not found Todo document in Todos collection"
                })
            }
        }, err => {
            res.send(err);
        })
    } else {
        res.status(404).send({
            error: "todo id is invalid please enter the valid id"
        })
    }

})
app.listen(PORT, () => {
    console.log(`Server is runing on port : http://localhost:${PORT}`);
})

module.exports = {
    app
};