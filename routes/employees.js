const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { all, add, remove } = require("../controllers/employees");

router.get("/", auth, all);

router.get("/:id", auth, () => console.log("employees id"));

router.post("/add", auth, add);

router.post("remove/:id", remove);

router.put("edit/:id", auth, () => console.log("employees remove"));

module.exports = router;
