const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { name } = req.body;
    const user = await User.create({ name });

    return res.json(user);
  },
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },
  async show(req, res) {
    try {
      const { name } = req.params;
      const user = await User.findOne({
        where: { name },
      });

      return res.json(user);
    } catch (error) {
      return res.json(error);
    }
  },
};
