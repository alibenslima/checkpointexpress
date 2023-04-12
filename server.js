const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Server is running on port ${PORT}`)
);
// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.use(function (req, res, next) {
  var date = new Date();
  let day = date.getDay();
  let hour = date.getHours();

  if (day > 0 && day < 6 && hour > 9 && hour < 17) {
    next();
  } else {
    res.send("This website works only on weekdays and work time");
  }
});

app.use(express.static("pages"));
