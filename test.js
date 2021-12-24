const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

// create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// create a photo
/* Photo.create({
  title: 'Photo title 1',
  description: 'Photo desc 1',
});
 */

// read photo
/* 
Photo.find({}, (err, data) => {
  console.log(data);
}); */

// update photo

/* const id = '61c514154319beb5cec32a34';
Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo 1 title updated',
    description: 'photo 1 desc updated',
  },
  {
      new: true
  },
  (err, data) => {
    console.log(data);
  }
); */

// delete photo
const id = "61c514154319beb5cec32a34";
Photo.findByIdAndDelete(id, (err, data) => {
    console.log('Photo is removed');
})