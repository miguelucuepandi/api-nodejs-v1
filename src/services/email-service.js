'use strict';
const config = require('../config');
const sendgrid = require('@sendgrid/mail');

// Configura a chave de API no SendGrid
sendgrid.setApiKey(config.sendgridKey);

exports.send = async (to, subject, body) => {
    try {
        await sendgrid.send({
            to: to,
            from: global.EMAIL,
            subject: subject,
            html: body
        });
    } catch (error) {
        console.error('Erro ao enviar e-mail via SendGrid:', error.response ? error.response.body : error);
    }
};