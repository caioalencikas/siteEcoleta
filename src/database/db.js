// importar a dependência do sqlite3
// verbose mostra mensagens no terminal
const sqlite3 = require("sqlite3").verbose()

// criar/iniciar o objeto que irá fazer operações no banco de dados
// constructor ou classe
const db = new sqlite3.Database("./src/database/database.db")

// exportar arquivo database pra outro local
// exports permite usar o require em cima desse arquivo
module.exports = db



// abaixo só teste para aprendizagem

// utilizar o objeto de banco de dados, para nossas operações
// serialize vai rodar uma sequência de código
db.serialize(() => {

    // com comandos SQL:

    // 1- Criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)


    // // 2- Inserir dados na tabela
    // const query = `
    //         INSERT INTO places (
    //             image,
    //             name,
    //             address,
    //             address2,
    //             state,
    //             city,
    //             items
    //         ) VALUES (?,?,?,?,?,?,?);
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
    //     "Paperside",
    //     "Guilherme Gemballa, Jardim América",
    //     "N° 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papés e Papelão",
    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // rodar query(insert), passar os valores e chamar uma função de callback

    // db.run(query, values, afterInsertData)

    // 3- Consultar os dados da tabela
    // db.all(`SELECT name FROM places`, function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log('Aqui estão seus registros:')
    //     console.log(rows)
    // })

    // 4 - Deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function (err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log('Registro deletado com sucesso')
    // })

    // 5- Consultar os dados da tabela pra ver se deletou
    // db.all(`SELECT name FROM places`, function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log('Aqui estão seus registros:')
    //     console.log(rows)
    // })



})