import conectarAoBanco from "../config/dbConfig.js";
const Conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    const db = conexao.db("imersao-back")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
};
