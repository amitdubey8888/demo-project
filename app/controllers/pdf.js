const htmlPdf = require('html-pdf-chrome');
const uuid = require('uuid');
const path = require('path');
const config = require('../config');

module.exports = {
    downloadPDF: downloadPDF,
    generatePdfByUrl: generatePdfByUrl,
    generatePdfByHtml: generatePdfByHtml,
    generatePdfByJson: generatePdfByJson,
};
function downloadPDF(req, res) {
    const pdf_name = req.params.pdf_name;
    const pdfLocation = path.join('static/pdf', pdf_name);
    res.status(200);
    return res.download(pdfLocation, pdf_name);
}

function generatePdfByUrl(req, res) {
    const url = req.body.url;
    if (url) {
        const options = {
            printOptions: {
                displayHeaderFooter: false,
                printBackground: true,
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                preferCSSPageSize: true,
            },
        };
        const pdf_name = req.params.pdf_name;
        const pdf_id = pdf_name ? pdf_name : uuid();
        htmlPdf
            .create(url, options)
            .then(pdf => {
                pdf.toFile(`./static/pdf/${pdf_id}.pdf`);
                res.json({
                    success: true,
                    message: 'PDF generated successfully!',
                    pdf_url: `https://partners.hostbooks.com/pdf/${pdf_id}.pdf`,
                    download_url: `https://partners.hostbooks.com/files/pdf/download/${pdf_id}.pdf`,
                });
            })
            .catch(error => {
                res.json({
                    success: false,
                    message: 'There seems to be an error, while generate pdf!',
                    error: error,
                });
            });
    } else {
        res.json({
            success: false,
            message: 'Unable to generate pdf!',
        });
    }
}

function generatePdfByHtml(req, res) {
    const pdfData = req.body.pdfData;
    if (pdfData) {
        const options = {
            printOptions: {
                displayHeaderFooter: false,
                printBackground: true,
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                preferCSSPageSize: true,
            },
        };
        const pdf_name = req.params.pdf_name;
        const pdf_id = pdf_name ? pdf_name : uuid();

        let base64Data = Buffer.from(pdfData, 'base64');
        const htmlData = base64Data.toString('ascii');
        htmlPdf
            .create(htmlData, options)
            .then(pdf => {
                pdf.toFile(`static/pdf/${pdf_id}.pdf`);
                res.json({
                    success: true,
                    message: 'PDF generated successfully!',
                    pdf_url: `https://partners.hostbooks.com/pdf/${pdf_id}.pdf`,
                    download_url: `https://partners.hostbooks.com/files/pdf/download/${pdf_id}.pdf`,
                });
            })
            .catch(error => {
                res.json({
                    success: false,
                    message: 'There seems to be an error, while generate pdf!',
                    error: error,
                });
            });
    } else {
        res.json({
            success: false,
            message: 'Unable to generate pdf!',
        });
    }
}

function generatePdfByJson(req, res) {
    if (req.body.headerTemplate && req.body.bodyTemplate && req.body.footerTemplate) {
        const headerTemplate = JSON.parse(JSON.stringify(req.body.headerTemplate));
        const bodyTemplate = JSON.parse(JSON.stringify(req.body.bodyTemplate));
        const footerTemplate = JSON.parse(JSON.stringify(req.body.footerTemplate));
        const options = {
            printOptions: {
                displayHeaderFooter: true,
                headerTemplate: headerTemplate,
                footerTemplate: footerTemplate,
                printBackground: true,
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                preferCSSPageSize: true,
            },
        };
        const pdf_name = req.params.pdf_name;
        const pdf_id = pdf_name ? pdf_name : uuid();
        htmlPdf
            .create(bodyTemplate, options)
            .then(pdf => {
                pdf.toFile(`./static/pdf/${pdf_id}.pdf`);
                res.json({
                    success: true,
                    message: 'PDF generated successfully!',
                    pdf_url: `https://partners.hostbooks.com/pdf/${pdf_id}.pdf`,
                    download_url: `https://partners.hostbooks.com/files/pdf/download/${pdf_id}.pdf`,
                });
            })
            .catch(error => {
                res.json({
                    success: false,
                    message: 'There seems to be an error, while generate pdf!',
                    error: error,
                });
            });
    } else {
        res.json({
            success: false,
            message: 'Unable to generate pdf!',
        });
    }
}