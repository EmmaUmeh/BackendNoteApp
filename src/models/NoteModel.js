const mongoose = require("mongoose")

const NoteSchema = new mongoose.Schema({
title: String,
body: String,
createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now },
});

NoteSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
  });

const Notes = mongoose.model('Notes', NoteSchema)

module.exports = Notes