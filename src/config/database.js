// require("dotenv/config");

module.exports = {
  dialect: "postgres",
  host: "localhost",
  port: "2022",
  username: "postgres",
  password: "postgres",
  database: "admin",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
