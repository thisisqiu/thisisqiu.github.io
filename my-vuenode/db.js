const { MongoClient } = require("mongodb");
const CONN_DB_STR = "mongodb://47.93.229.143:27017/coffee";
function conn(callback) {
  MongoClient.connect(
    CONN_DB_STR,
    (err, db) => {
      if (err) {
        console.log(err);
        callback(err, null);
      } else {
        callback(null, db);
      }
    }
  );
}

exports.conn = conn;
