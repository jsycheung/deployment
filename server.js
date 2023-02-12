const express = require("express");
const app = express();
app.use(express.static(`${__dirname}/public`));
app.listen(4200, () => console.log("server running on port 4200"));
