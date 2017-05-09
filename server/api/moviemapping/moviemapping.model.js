'use strict';

import mongoose from 'mongoose';

var MoviemappingSchema = new mongoose.Schema({
  movie: String,
  city: String,
  cine: String,
  time: [String],
  date: [Date]
});

export default mongoose.model('Moviemapping', MoviemappingSchema);
