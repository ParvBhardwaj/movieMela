'use strict';

import mongoose from 'mongoose';

var MovieSchema = new mongoose.Schema({
  Title: String,
  Year: String,
  Rated: String,
  Released: String,
  Runtime: String,
  Genre: String,
  Director: String,
  Writer: String,
  Actors: String,
  Plot: String,
  Language: String,
  Country: String,
  Awards: String,
  Poster: String,
  // Ratings: [
  //   {
  //     Source: String,
  //     Value: String
  //   },
  //   {
  //     Source: String,
  //     Value: String
  //   },
  //   {
  //     Source: String,
  //     Value: String
  //   }
  // ],
  Metascore: String,
  imdbRating: String,
  imdbVotes: String,
  imdbID: String,
  Type: String,
  DVD: String,
  BoxOffice: String,
  Production: String,
  Website: String,
  Response: String,
  Status: String
});

export default mongoose.model('Movie', MovieSchema);
