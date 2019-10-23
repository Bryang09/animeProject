const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
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
  date: {
    type: Date,
    default: Date.now()
  },
  listItems: [{ type: String }]
  //   {

  //     0: {
  //       type: String,
  //       required: true
  //     },
  //     1: {
  //       type: String,
  //       required: true
  //     },
  //     2: {
  //       type: String,
  //       required: true
  //     },
  //     3: {
  //       type: String,
  //       required: true
  //     },
  //     4: {
  //       type: String,
  //       required: true
  //     },
  //     5: {
  //       type: String,
  //       required: true
  //     },
  //     6: {
  //       type: String,
  //       required: true
  //     },
  //     7: {
  //       type: String,
  //       required: true
  //     },
  //     8: {
  //       type: String,
  //       required: true
  //     },
  //     9: {
  //       type: String,
  //       required: true
  //     }
  //   }
});

module.exports = Lists = mongoose.model("lists", ListsSchema);
