import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import * as emoji from "node-emoji";;
import mailer from "../services/mail.service.js";

import ordersService from "../services/orders.service.js";
import xlsxManager from "../services/xlsx.service.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const saveOrder = async (req, res) => {
    try {
        const { body } = req;

        const id = await ordersService.create(body);
        if (id) {
            console.log(
                emoji.get("heavy_check_mark"),
                ` The order was saved with success: ${id}`
            );
            return res.status(200).send(id);
        } else {
            throw new Error("There was an error, the order couldn't be saved.");
        }
    } catch (error) {
        res.status(404).send(error.message);
        console.log(emoji.get("x"), ` ${error.message}`);
    }
};

export const sendXlsxOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const showRef = await ordersService.getDocRef(id);

        const orders = await ordersService.getConditional([
            {
                field: "show",
                operator: "==",
                value: showRef,
            },
        ]);

        const finalOrders = await orders.map((order) => {
            order["show"] = order.show._path.segments[1];
            return {
                Show: order.show,
                Name: order.name,
                Email: order.email,
                Quantity: order.quantity,
            };
        });

        console.log(finalOrders);

        const xlsx = await xlsxManager.convertJsonToExcel(
            finalOrders,
            "Ordenes"
        );

        const info = await mailer.sendEmail({
            subject: `Órdenes show ${finalOrders[0].Show}`,
            attachments: [
                xlsx
                    ? {
                          filename: "Ordenes.xlsx",
                          content: xlsx,
                          encoding: "binary",
                          contentType:
                              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                          contentDisposition:
                              "attachment; filename=Ordenes.xlsx",
                      }
                    : {
                          filename: "Ordenes.xlsx",
                          path: resolve(__dirname, "../data/Ordenes.xlsx"),
                      },
            ],
        });

        if (info) {
            console.log(
                emoji.get("heavy_check_mark"),
                ` E-mail sended with success: ${info}`
            );
            return res.status(200).send(info);
        } else {
            throw new Error(
                "There was an error, the e-mail couldn't be sended."
            );
        }

        /*         if (orders) {
            console.log(
                emoji.get("heavy_check_mark"),
                ` The orders of show with id ${id} was getted with success: `
            );

            return res.status(200).send(finalOrders);
        } else {
            throw new Error(
                "There was an error, the orders couldn't be getted."
            );
        } */
    } catch (error) {
        res.status(404).send(error.message);
        console.log(emoji.get("x"), ` ${error.message}`);
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await ordersService.deleteById(id);

        if (data) {
            console.log(
                emoji.get("heavy_check_mark"),
                ` The order was deleted with success: ${id}`
            );
            return res.status(200).send(data);
        } else {
            throw new Error(
                "There was an error, the order couldn't be deleted."
            );
        }
    } catch (error) {
        res.status(404).send(error.message);
        console.log(emoji.get("x"), ` ${error.message}`);
    }
};
