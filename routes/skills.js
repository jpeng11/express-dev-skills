var express = require("express");
var router = express.Router();
const skillsCtrl = require("../controllers/skills");

router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.newSkill);
router.get("/:id", skillsCtrl.show);
router.post("/", skillsCtrl.add);
router.put("/:id", skillsCtrl.update);
router.delete("/:id", skillsCtrl.remove);
router.get("/:id/edit", skillsCtrl.edit);

module.exports = router;
