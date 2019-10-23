const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  type: {
    anime: {
      type: Boolean,
      required: true
    },
    manga: {
      type: Boolean,
      required: true
    }
  },

  backgroundImage: {
    type: String,
    required: true
  },
  posterImage: {
    type: String,
    required: true
  },
  mainDesc: {
    type: String,
    required: true
  },
  watchLink: {
    type: String,
    required: true
  },
  readLink: {
    type: String,
    required: true
  },
  shopLink: {
    type: String,
    required: true
  },
  ytVideo: {
    type: String
  },
  ratings: {
    overall: {
      B: { type: Number, required: true },
      M: { type: Number, required: true }
    },
    romance: {
      B: { type: Number, required: true },
      M: { type: Number, required: true }
    },
    drama: {
      B: { type: Number, required: true },
      M: { type: Number, required: true }
    },
    action: {
      B: { type: Number, required: true },
      M: { type: Number, required: true }
    },
    sfw: {
      B: { type: Number, required: true },
      M: { type: Number, required: true }
    }
  },
  reviews: {
    romance: {
      B: { type: String, required: true },
      M: { type: String, required: true }
    },
    drama: {
      B: { type: String, required: true },
      M: { type: String, required: true }
    },
    action: {
      B: { type: String, required: true },
      M: { type: String, required: true }
    },
    sfw: {
      B: { type: String, required: true },
      M: { type: String, required: true }
    }
  },
  categories: { type: Object },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Reviews = mongoose.model("review", ReviewSchema);
