const Form = require('../modals/Form');
const _ = require('lodash');

module.exports = {
    addForm: addForm,
    fetchForm: fetchForm,
    updateForm: updateForm,
    removeForm: removeForm,
};

function addForm(req, res) {
    Form.insertMany(req.body)
        .then(response => {
            res.status(200);
            return res.json({
                status: true,
                message: 'Form saved successfully!',
                data: response
            });
        })
        .catch(error => {
            res.status(200);
            return res.json({
                status: false,
                message: 'Unable to save form!',
                error: error
            });
        });
}

function fetchForm(req, res) {
    let query = {};
    if (req.query.form_name) {
        query = {
            form_name: { $regex: req.query.form_name, $options: 'i' }
        };
    }
    Form.find(query).then(response => {
        res.status(200);
        return res.json({
            status: true,
            message: 'Form fetched successfully!',
            data: _.groupBy(response, obj => obj.form_id)
        });
    }).catch(error => {
        res.status(200);
        return res.json({
            status: false,
            message: 'Unable to fetch form!',
            error: error
        });
    });
}

function updateForm(req, res) {
    Form.findOneAndUpdate({ _id: new ObjectId(req.body._id) }, { $set: req.body }, { new: true })
        .then(response => {
            res.status(200);
            return res.json({
                success: true,
                message: 'Form updated successfully!',
                data: response
            });
        }).catch(error => {
            res.status(400);
            return res.json({
                success: false,
                message: 'Unable to update form!',
                error: error
            });
        });
}

function removeForm(req, res) {
    Form.findOneAndRemove({ _id: new ObjectId(req.body['_id']) })
        .then(response => {
            res.status(200);
            return res.json({
                success: true,
                message: 'form removed successfully!'
            });
        }).catch(error => {
            res.status(400);
            return res.json({
                success: false,
                message: 'Unable to remove form!',
                error: error
            });
        });
}
