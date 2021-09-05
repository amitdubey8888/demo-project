const express = require('express');
const routes = express.Router();

const userRoutes = require('./user.routes');
const pdfRoutes = require('./pdf.routes');
const formRoutes = require('./form.routes');

routes.use('/user', userRoutes);
routes.use('/pdf', pdfRoutes);
routes.use('/form', formRoutes);

module.exports = routes;