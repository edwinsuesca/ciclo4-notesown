const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    updateDate: {
        type: Date,
        required: false
    },
    ownerId: {
        type: String,
        required: true
    },
    lastEditorId: {
        type: String,
        required: true
    },
    folderId: {
        type: String,
        required: true
    },
    pinned: {
        type: Boolean,
        default: false
    },
    archived: {
        type: Boolean,
        default: false
    }
});

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

module.exports = mongoose.model('Notes', noteSchema);