const express = require("express");
const router = express.Router();

const Review = require("../../models/Review");

// GET REQUEST
// Public

router.get("/", (req, res) => {
  Review.find()
    .sort({ date: -1 })
    .then(review => res.json(review))
    .catch(err => console.log(err));
});

router.get("/:id", (req, res) => {
  Review.findById(req.params.id)
    .then(review => {
      if (!review) {
        return res.status(400).end();
      }
      return res.status(200).json(review);
    })
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
    categories: req.body.categories,
    type: {
      anime: req.body.type.anime,
      manga: req.body.type.manga
    },
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

router.put("/:id", (req, res) => {
  const id = req.params.id;
  Review.findById(id, (err, review) => {
    review.likes = req.body.likes;
    review
      .save()
      .then(review => res.json(review))
      .catch(err => console.log(err));
  });
});

module.exports = router;
