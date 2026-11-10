const mongoose = require('mongoose');

const kontakSchema = new mongoose.Schema({
  telepon: String,
  email: String,
}, { _id: false });

const donasiSchema = new mongoose.Schema({
  noDonatur: { type: String, required: [true, 'no wajib diisi'], trim: true },
  namaDonatur: { type: String, required: [true, 'nama wajib diisi'], trim: true },
  nominal: { type: Number, required: [true, 'nominal wajib diisi'], min: [0, 'nominal minimal 0'] },
  jenis: { type: String, required: [true, 'jenis wajib diisi'], enum: ['uang', 'barang', 'jasa'] },
  kontak: kontakSchema,
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Donasi', donasiSchema);