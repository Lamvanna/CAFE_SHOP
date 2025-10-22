const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
        unique: true
    },
    capacity: {
        type: Number,
        required: true,
        min: 1
    },
    status: {
        type: String,
        enum: ['available', 'occupied', 'reserved', 'maintenance'],
        default: 'available'
    },
    location: {
        type: String,
        enum: ['indoor', 'outdoor', 'private'],
        default: 'indoor'
    },
    reservations: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        date: {
            type: Date,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        duration: {
            type: Number, // in minutes
            default: 120
        },
        notes: String
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Table', tableSchema);
