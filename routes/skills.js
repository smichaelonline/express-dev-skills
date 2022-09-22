import { Router } from 'express'
import { skills } from '../data/skill-data.js'

const router = Router()

router.get('/', function(req,res) {
  res.render('skills/index', {
    skills: skills
  })
})

export {
  router,
}