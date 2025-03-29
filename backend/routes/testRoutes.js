const express = require("express");
const router = express.Router();

// Test route to check API connection
router.get("/test", (req, res) => {
  res.json({ message: "API connection successful!" });
});

module.exports = router;
