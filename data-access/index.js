const User = require('../model/users');

exports.createUser = async (employee) => {
    try{
        const newuser = new User(employee);
        newuser = await newuser.save();
        return newuser;
    } catch(err){
        throw new Error(err);
    }
};