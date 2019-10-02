const express = require("express");
const router = express.Router();

const Review = require("../models/Review");

// GET REQUEST
// Public

router.get("/", (req, res) => {
  Review.find()
    .then(review => res.json(review))
    .catch(err => console.log(err));
});

// POST Request
// Public

router.post("/", (req, res) => {
  const newReview = new Review({
    title: req.body.title,
    likes: req.body.likes,
    backgroundImage: req.body.backgroundImage,
    posterImage: req.body.posterImage,
    mainDesc: req.body.mainDesc,
    watchLink: req.body.watchLink,
    readLink: req.body.readLink,
    shopLink: req.body.shopLink,
    ytVideo: req.body.ytVideo,
    ratings: {
      overall: {
        B: req.body.ratings.overall.B,
        M: req.body.ratings.overall.M
      },
      romance: {
        B: req.body.ratings.romance.B,
        M: req.body.ratings.romance.M
      },
      drama: {
        B: req.body.ratings.drama.B,
        M: req.body.ratings.drama.M
      },
      action: {
        B: req.body.ratings.action.B,
        M: req.body.ratings.action.M
      },
      sfw: {
        B: req.body.ratings.sfw.B,
        M: req.body.ratings.sfw.M
      }
    },
    reviews: {
      romance: {
        B: req.body.reviews.romance.B,
        M: req.body.reviews.romance.M
      },
      drama: {
        B: req.body.reviews.drama.B,
        M: req.body.reviews.drama.M
      },
      action: {
        B: req.body.reviews.action.B,
        M: req.body.reviews.action.M
      },
      sfw: {
        B: req.body.reviews.sfw.B,
        M: req.body.reviews.sfw.M
      }
    }
  });

  newReview
    .save()
    .then(review => res.json(review))
    .catch(err => console.log(err));
});

module.exports = router;
