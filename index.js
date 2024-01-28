const mongoose=require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');

  console.log("hi")
}


const movieSchema=new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
});

 const Movie= mongoose.model('Movie',movieSchema) //name of a string
const amadeus= new Movie({ title:'Amadeus',year:1986,score:9.2,rating:'R'});

Movie.insertMany([
    {title:'La La Land',year:2015},
     {title:'Three of Us',year:2024},
     {title:'Yeh Jawaani Hai Deewani',year:2012}
 ])
 .then(data=>{
     console.log("IT WORKED")
    console.log(data);
 })
