import User from '../models/user.model.js';

export const GetUsersForSidebar = async (req, res) => {
    try {

        const loggedUser = req.userId._id;

        const allUsers = await User.find({_id : {$ne: loggedUser}}).select('-password');

        res.status(200).json(allUsers);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Error getting users'});
    }
}