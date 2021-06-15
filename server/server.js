const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

const MemberModel = require("./models/Member");

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.use(express.json());

mongoose.connect('mongodb+srv://swiichy:alphabeta@cluster0.ty0vk.mongodb.net/heavenMember?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.post('/insert', async (req, res) => {

    const memberPseudo = req.body.memberPseudo;
    const memberLevel = req.body.memberLevel;
    const memberClasse = req.body.memberClasse;
    const memberSucces = req.body.memberSucces;
    const memberRang = req.body.memberRang;

    const Member = new MemberModel({
        memberPseudo: memberPseudo,
        memberLevel: memberLevel,
        memberClasse: memberClasse,
        memberSucces: memberSucces,
        memberRang: memberRang
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



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});