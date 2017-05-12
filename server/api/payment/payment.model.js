'use strict';

import mongoose from 'mongoose';

var PaymentSchema = new mongoose.Schema({
  name: String,
  ContactNo: String,
  emailId: String,
  noSeats: Number,
  amount: Number,
  total: Number,
  seats: [String]
});

export default mongoose.model('Payment', PaymentSchema);
