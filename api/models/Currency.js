const mongoose = require('mongoose');

const CurrencySchema = new mongoose.Schema({
    ISOCode: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    datetime: {
        type: String,
        required: true,
    }
});


CurrencySchema.set('toJSON', {
    transform: (doc, ret, options) => {
        delete ret._id;
        delete ret.__v;
        delete ret.datetime;
        return ret;
    }
});

const Currency = mongoose.model('Currency', CurrencySchema);

module.exports = Currency;
