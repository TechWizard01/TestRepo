const User = require('./../model/users');

exports.createUser = async (employee) => {
    try{
        const user = new User(employee).save();
        return await user;
    } catch(err){
        throw new Error(err);
    }
};

exports.deleteUser = async (deluser) => {
    try{
        const user = await User.findOneAndDelete({username: deluser.username});
        return user;
    } catch(err){
        throw new Error(err);
    }
};

exports.updateUser = async (upuser) => {
    try{
        const user = await User.findOneAndUpdate({username: upuser.username});
        return user;
    } catch(err){
        throw new Error(err);
    }
};

exports.getUser = async (getuser) => {
    try{
        const user = await User.findOne({username: getuser.username});
        return user;
    } catch(err){
        throw new Error(err);
    }
};

exports.getAll = async () => {
    try{
        const users = await User.find();
        return users;
    } catch(err){
        throw new Error(err);
    }
};