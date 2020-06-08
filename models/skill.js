const skills = [
  { id: 25634, skill: "JavaScript" },
  { id: 26158, skill: "Python" },
  { id: 78469, skill: "React" },
];

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find((skill) => skill.id === parseInt(id));
}

function removeOne(id) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skills.splice(idx, 1);
}

function addOne(skill) {
  skill.id = Math.floor(Math.random() * (99999 - 10000)) + 10000;
  skills.push(skill);
}

function update(id, skill) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skill.id = parseInt(id);
  skills.splice(idx, 1, skill);
}

module.exports = {
  getAll,
  getOne,
  removeOne,
  addOne,
  update,
};
