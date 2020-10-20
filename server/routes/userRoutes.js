module.exports = app => {
    const users = require("../controllers/userController");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", users.create);
  
    // findAll users
    router.get("/", users.findAll);
  
    // findAll users with params
    router.post("/searchWithParam", users.findAllwithParams);
  
    // findOne user with id
    router.get("/:id", users.findOne);
  
    // Update a User with id
    router.put("/:id", users.update);
  
    // Delete a User with id
    router.delete("/:id", users.delete);
  
    // Create a new User
    router.delete("/", users.deleteAll);
  
    app.use('/api/users', router);
  };