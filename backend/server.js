const express = require("express");
const app = express();

// Use Render’s assigned port, or default to 3000 locally
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Backend is running on Render 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
