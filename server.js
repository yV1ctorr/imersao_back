import express from "express";

const post = [
    {
        descricao: "Uma foto teste",
        imagem: "https://  placecats.com/millie/300/150"
    },
    {
        descricao: "teste 2",
        imagem: "https://  placecats.com/millie/300/150"
    }
];

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send();
});