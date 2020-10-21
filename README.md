"# server" 

#DEMO 
    https://server-for-dashboard.herokuapp.com/    {main} 

    https://server-for-dashboard.herokuapp.com//api/users
 
    // create a new user
    .post("/", users.create);
  
    // findAll users
   .get("/", users.findAll);
  
    // findAll users with params
    .post("/searchWithParam", users.findAllwithParams);
  
    // findOne user with id
    .get("/:id", users.findOne);
  
    // Update a User with id
    .put("/:id", users.update);
  
    // Delete a User with id
    .delete("/:id", users.delete);
  
    // Create a new User
    .delete("/", users.deleteAll);
  
 