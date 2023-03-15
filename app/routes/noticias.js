var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    port: 3306,
    password : '1234',
    database : 'portal_noticias'
});


module.exports = function(app) {

    app.get('/noticias',async function(req,res){


        await connection.connect();
        //const dbResult = request.query<any>(`select * from noticias`);
        const result = await connection.query('select * from noticias');
        //console.log('result: ', result);

        await connection.end();

        res.send(result);
    })
}