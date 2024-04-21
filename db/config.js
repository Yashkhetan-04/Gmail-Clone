import mongoose from 'mongoose';
const connected = mongoose.connect("mongodb://127.0.0.1:27017/Gmail-app");

export default connected;
