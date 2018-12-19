var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "umabrisfx8afs3ja.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "xgydtcobn88kciix",
  password: "qxycjgwje83vohmu",
  database: "x5xce85t1cqd0unb"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
