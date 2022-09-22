import { Skill } from '../models/skill.js'


function index(req, res) {
  Skill.find({})
  .then (skills => {
  res.render('skills/index', {
    skills: skills,
    time: req.time
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req,res) {
  res.render('skills/new')
}

function create(req,res){
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req,res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function deleteSkill(req,res) {
  Skill.findByIdAndDelete(req.params.id)
  .then( skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function edit(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/edit', {
      skill: skill
    })
  })
}

export {
  index,
  show, 
  newSkill as new, 
  create, 
  deleteSkill as delete, 
  edit, 
}