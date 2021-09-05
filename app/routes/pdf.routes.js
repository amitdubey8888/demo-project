const express = require('express');
const router = express.Router();
const PdfController = require('../controllers/pdf');

router.get('/download/:pdf_name(*)', PdfController.downloadPDF);
router.post('/generate-pdf-by-url/:pdf_name?', PdfController.generatePdfByUrl);
router.post('/generate-pdf-by-html/:pdf_name?', PdfController.generatePdfByHtml);
router.post('/generate-pdf-by-json/:pdf_name?', PdfController.generatePdfByJson);

router.get('/', function(req, res, next) {
    res.status(200);
    res.json({
        message: 'Welcome to coolest api on the earth !',
    });
});

module.exports = router;