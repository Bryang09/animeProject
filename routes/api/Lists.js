const express = require("express");
const router = express.Router();

const Lists = require("../../models/Lists");

// GET REQUEST
// Public

router.get("/", (req, res) => {
  Lists.find()
    .sort({ date: -1 })

    .then(review => res.json(review))
    .catch(err => console.log(err));
});

router.get("/:id", (req, res) => {
  Lists.findById(req.params.id)
    .then(list => {
      if (!list) {
        return res.status(400).end();
      }
      return res.status(200).json(list);
    })
    .catch(err => console.log(err));
});

// POST Request
// Public

router.post("/", (req, res) => {
  const newList = new Lists({
    title: req.body.title,
    likes: req.body.likes,
    backgroundImage: req.body.backgroundImage,
    posterImage: req.body.posterImage,
    mainDesc: req.body.mainDesc,
    listItems: req.body.listItems
  });

  newList
    .save()
    .then(review => res.json(review))
    .catch(err => console.log(err));
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  Lists.findById(id, (err, list) => {
    //   Set the 'likes' to the number in the request
    list.likes = req.body.likes;
    list
      .save()
      .then(list => res.json(list))
      .catch(err => console.log(err));
  });
});

module.exports = router;
