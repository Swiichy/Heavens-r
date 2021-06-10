const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const MemberModel = require("./models/Member");

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://swiichy:alphabeta@cluster0.ty0vk.mongodb.net/heavenMember?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.post('/insert', async (req, res) => {

    const memberPseudo = req.body.memberPseudo;
    const memberLevel = req.body.memberLevel;
    const memberClasse = req.body.memberClasse;
    const memberSucces = req.body.memberSucces;

    const Member = new MemberModel({
        memberPseudo: memberPseudo,
        memberLevel: memberLevel,
        memberClasse: memberClasse,
        memberSucces: memberSucces
    });

    try {
        await Member.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
})

app.get('/read', async (req, res) => {
    MemberModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } 

        res.send(result)
    })
});

app.put('/update', async (req, res) => {

    const newMemberPseudo = req.body.newMemberPseudo;
    const id = req.body.id;

    try {
        await MemberModel.findById(id, (err, updateMember) => {
            updateMember.memberPseudo = newMemberPseudo
            updateMember.save();
            res.send("update");
        })
    } catch (err) {
        console.log(err);
    }
})

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    
    await MemberModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});



app.listen(3001, () => {
    console.log('Server running on port 3001');
});