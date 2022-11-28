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
}, { timestamps: true });

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        returnedObject.createdAt = returnedObject.createdAt.toString();
        returnedObject.updatedAt = returnedObject.updatedAt.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

module.exports = mongoose.model('Notes', noteSchema);