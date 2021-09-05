var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model(
    'Form',
    new Schema({
        form_name: {
            type: String,
            default: null,
        },
        form_id: {
            type: String,
            default: null,
        },
        form_class: {
            type: String,
            default: null,
        },
        field_id: {
            type: String,
            default: null,
        },
        field_class: {
            type: String,
            default: null,
        },
        label_for: {
            type: String,
            default: null,
        },
        label_name: {
            type: String,
            default: null,
        },
        label_class: {
            type: String,
            default: null,
        },
        input_type: {
            type: String,
            default: null,
        },
        input_name: {
            type: String,
            default: null,
        },
        input_id: {
            type: String,
            default: null,
        },
        input_class: {
            type: String,
            default: null,
        },
        input_value: {
            type: String,
            default: null,
        },
        input_placeholder: {
            type: String,
            default: null,
        },
        input_required: {
            type: Boolean,
            default: false,
        },
        input_disabled: {
            type: Boolean,
            default: false,
        },
        input_reaonly: {
            type: Boolean,
            default: false,
        },
    }, {
        timestamps: true,
        collection: 'Form',
    })
);