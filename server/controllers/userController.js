const db = require("../models");
const User = db.users;

exports.create = async (req, res) => {
    try {
      if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" })
        return
      }
      const { name, birthday_date, passport_id, isActive } = req.body
      const user =  await new User({
        name, 
        birthday_date, 
        passport_id, 
        isActive
      })
        const data = await user.save(user)
        res.send(data);
    }

     catch(err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      })
    }
  }




exports.findAll = async (req, res) => {
  const name = req.query.name;
    try{
      var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {}
      const data = await User.find(condition)
        res.send(data)
    }
    catch{
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      })
     }
 }


exports.findOne = async (req, res) => {
      const id = req.params.id

      try {
        const data = await  User.findById(id)
        if (!data)
          res.status(404).send({ message: "Not found User with id " + id });
        else res.send(data);
      }

      catch(e) {
        res
          .status(500)
          .send({ message: "Error retrieving User with id=" + id })
      }
  }


exports.update = async (req, res) => {
    const id = req.params.id

     try{
      if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      
    
      const data = await User.findByIdAndUpdate(id, req.body)
        if (!data) {
          res.status(404).send({
            message: `Cannot update User with id=${id}. Maybe User was not found!`
          });
        } else res.send({ message: "User was updated successfully." })
      }

      catch(e) {
        res.status(500).send({
          message: "Error updating User with id=" + id
        })
      }
  }


exports.delete = async (req, res) => {

    const id = req.params.id;
    
    try{    
      const data = await User.findByIdAndRemove(id)
        if (!data) {
          res.status(404).send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          })
        } else {
          res.send({
            message: "User was deleted successfully!"
          })
        }
    }

    catch(e) {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        })
    }
  }


exports.deleteAll = async (req, res) => {
      try{
        const data = await User.deleteMany({})
        res.send({
          message: `${data.deletedCount} Users were deleted successfully!`
        });
      }
      catch(e) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all users."
        });
      }
  };


exports.findAllwithParams = async (req, res) => {
    const params = {...req.body}
      try{
        const data = await User.find(params)
        res.send(data);
      }
      catch(e) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      };
  };