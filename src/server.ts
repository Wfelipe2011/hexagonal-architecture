import express from "express";

const app = express()

app.post('/orderPreview', (req, res) => {
    const { cpf, orderItems } = req.body;
    res.json({
        total: 6350
    });
});

app.listen(3000, () => {
    console.log("Server is running!")
})  