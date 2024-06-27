import { createTransport } from "nodemailer";
import Logger from "../utils/Log4js.js";
const logger = Logger.loggerCustom

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: 'baccegajoaquin@gmail.com',
        pass: 'beqt xgrn dmyy yyru'
    }
});

const sendEmail = async (data) => {
    const productos = data.products.map(product => `
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${product.id}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${product.title}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${product.price}</td>
        </tr>
    `).join('');

    // Calcula el subtotal
    const subtotal = data.products.reduce((acc, product) => acc + parseFloat(product.price), 0).toFixed(2);

    const mensaje = {
        from: "Ecommerce Node",
        to: 'baccegajoaquin@gmail.com', // TODO cambiar por email del usuario
        bcc: 'baccegajoaquin@gmail.com',
        subject: 'Confirmación de pedido',
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2>Confirmación de pedido</h2>
                <p>Gracias por tu compra. Aquí están los detalles de tu pedido:</p>
                <table style="border-collapse: collapse; width: 100%;">
                    <thead>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">ID</th>
                            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Producto</th>
                            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${productos}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="2" style="border: 1px solid #ddd; padding: 8px; text-align: right; font-weight: bold;">Subtotal</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${subtotal}</td>
                        </tr>
                    </tfoot>
                </table>
                <p style="margin-top: 20px;">Si tienes alguna pregunta, no dudes en contactarnos.</p>
                <p>Saludos,</p>
                <p>El equipo de Ecommerce Node</p>
            </div>
        `
    };

    try {
        const info = await transporter.sendMail(mensaje);
        console.log('Correo enviado: ' + info.response);
    } catch (error) {
        console.error(error);
    }
};



    try {
        const info = await transporter.sendMail(mensaje)
        logger.info(info)
    } catch (err) {
        logger.error(err)
    }

export default {sendEmail};