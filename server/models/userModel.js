module.exports = (mongoose) => {
    var schema = mongoose.Schema(
      {
        name: {
          type: String,
        },

        birthday_date: {
          type: String,
        },

        passport_id: {
          type: String,
        },

        isActive: Boolean
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const User = mongoose.model("dashboard_users", schema);
    return User;
  };