const da = require('../data-access/index');

exports.create = async (req,res) => {
    try{
        const response = await da.createUser(req.body);
        res.status(201).json({message: "Successful", response : response});
    } catch (err){
        res.status(501).json({message: "Error!", response: err});
    }
};

exports.delete = async (req,res) => {
    try {
        const response = await da.deleteUser(req.body);
        if(response) res.json({message: "Successful", response : response});
        else res.status(404).json({message:"User not found!"});
    } catch (err) {
        res.status(504).json({message: "Error!", response: err});
    }
};

exports.update = async (req,res) => {
    try {
        const response = await da.updateUser(req.body);
        if(response) res.json({message: "Successful", response : response});
        else res.status(404).json({message:"User not found!"});
    } catch (err) {
        res.status(504).json({message: "Error!", response: err});
    }
};

exports.get = async (req,res) => {
    try {
        const response = await da.getUser(req.body);
        if(response) res.json({message: "Successful", response : response});
        else res.status(404).json({message:"User not found!"});
    } catch (err) {
        res.status(504).json({message: "Error!", response: err});
    }
};

exports.getAll = async (req,res) => {
    try {
        const response = await da.getAll(req.body);
        if(response) res.json({message: "Successful", response : response});
        else res.json({message:"No user found in the database!"});
    } catch (err) {
        res.status(504).json({message: "Error!", response: err});
    }
};