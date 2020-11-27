const express = require('express');
const Contestant = require('../../model/contestant');
const ObjectId = require('mongodb').ObjectID;
const routes = express();

routes.delete('/delete-contestant/:id',async(req,res)=> {
    const id = ObjectId(req.params.id);
    Contestant.deleteOne({_id:id})
        .then((statement)=>{
            return res.status(202).send('Deleted');
        })
        .catch(err=>console.log(err));
});

routes.delete('/delete-all-contestant',async(req,res)=> {
    Contestant.deleteMany({})
        .then((statement)=>{
            return res.status(202).send('Deleted all');
        })
        .catch(err=>console.log(err));
})

module.exports = routes;
