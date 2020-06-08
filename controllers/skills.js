const Skill = require("../models/skill");

module.exports = {
  index,
  show,
  add,
  remove,
  update,
  newSkill,
  edit,
};

function newSkill(req, res) {
  res.render("skills/new");
}
function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
  });
}

function show(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render("skills/show", {
    skill: skill,
  });
}

function add(req, res) {
  Skill.addOne(req.body);
  res.redirect("skills");
}

function remove(req, res) {
  Skill.removeOne(req.params.id);
  res.redirect("/skills");
}

function update(req, res) {
  Skill.update(req.params.id, req.body);
  res.redirect("/skills");
}

function edit(req, res) {
  res.render("skills/edit", {
    skill: Skill.getOne(req.params.id),
  });
}
