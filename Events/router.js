const {Router} = require('express');
const Events = require('./model');

const router = new Router();

router.get("/events", (req,res) => {
    Events.findAll()
          .then(events => {
              if(events){
                  res.status(200).send(events)
              }
          })
          .catch(err => console.error(err))
})

router.post("/events", (req,res) => {
    Events.create(req.body)
          .then(event => {
              if(event){
                  res.status(201).send(event)
              }
          })
          .catch(err => console.error(err))
})


router.get("/events/:id", (req,res) => {
    Events.findByPk(req.params.id)
         .then(event => {
            if(event){
                res.status(200).send(event)
            }
         })
         .catch(err => console.error(err))
})

router.put("/events/:id", (req,res) => {
    Events.findByPk(req.params.id)
         .then(event => {
             if(event){
                event.update(eq.body)
                     .then(event => {
                         res.status(201).send(event)
                     })
             }
         })
         .catch(err => console.error(err))
})

router.delete("/events/:id", (req,res) => {
    Events.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(number => {
        if(number){
            return res.send({number})
        }
        return res.status(404).end();
    })
})

module.exports = router