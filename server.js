import express from "express"

const app = express()
app.use(express.json());

const alunos =[
    {
        id: "3",
        matricula: "3",
        nome: "Bianca",
        turma: "2V",
        opcaoNota: "Avaliação",
        nota1: 10,
        nota2: 10
    },
    {
        id: "4",
        matricula: "4",
        nome: "ana",
        turma: "2M",
        opcaoNota: "Avaliação",
        nota1: 50,
        nota2: 80
    }
]


app.get('/alunos', async (req,res) => {
    res.json(alunos);
})

app.get('/alunos/:matricula', (req, res) => {
    const aluno  = alunos.find(a => a.matricula === req.params.matricula);
    return res.json(aluno)
})

app.listen(3000, () => {
    console.log("Servidor rodando.")
})

app.delete('/alunos/:matricula', (req,res) => {
    const aluno = alunos.findIndex(aluno => a.matricula == id);
    return res.json({message: "removido"})
})

