/*
 * @Author: KG
 * @Date: 2025-12-11 18:22:02
 * @LastEditors: KG
 * @LastEditTime: 2025-12-11 18:22:07
 * @FilePath: \vercel-node-example\app.js
 * @Description:
 *
 */
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello Vercel!");
});
const port = process.env.PORT || 3210;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
