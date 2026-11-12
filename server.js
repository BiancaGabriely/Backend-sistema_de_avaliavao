import express from "express"
import cors from "cors"

const app = express()
app.use(cors());
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

app.get('/alunos', (req,res) => {
    res.json(alunos);
})

app.get('/alunos/:matricula', (req, res) => {
    const aluno  = alunos.find(a => a.matricula === req.params.matricula);
    return res.json(aluno)
})

app.post('/alunos/', (req,res) => {
    const novoAluno = {
        id:req.body.id,
        matricula: req.body.matricula,
        nome: req.body.nome,
        turma: req.body.turma,
        opcaoNota: req.body.opcaoNota,
        nota1: req.body.nota1,
        nota2: req.body.nota2
    }

    alunos.push(novoAluno);

    return res.json({message: "Aluno cadastrado", novoAluno});
})

app.delete('/alunos/:matricula', (req,res) => {
    const aluno = alunos.findIndex(a => a.matricula === req.params.matricula);

    alunos.splice(aluno, 1);

    return res.json({message: "removido"})
})

app.put('/alunos/:matricula', (req,res) => {
    const aluno = alunos.find(a => a.matricula === req.params.matricula);

    if(!aluno){
        return res.status(404).json({message:"Aluno não encontrado."});
        
    }

    aluno.nome = req.body.nome;
    aluno.turma = req.body.turma;
    aluno.opcaoNota = req.body.opcaoNota;
    aluno.nota1 = req.body.nota1;
    aluno.nota2 = req.body.nota2;

    return res.json({message: "Aluno atualizado", aluno});
})

app.listen(3000, () => {
    console.log("Servidor rodando.")
})