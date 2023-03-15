const http = require ("http");

const server = http.createServer( function(req, res){
    console.log('servidor funcionando');

    var categoria = req.url

    if (categoria=="/moda"){
    res.end("<html><body> Noticias de moda</body></html>");
    

    }else if ( categoria=="/tecnologia") {   
    res.end("<html><body>noticias de tecnologia </body></html>");
    

    }else if (categoria=="/esportes"){  
    res.end("<html><body>Noticias de esportes</body></html>");
    
    }else {
    res.end("<html><body>Portal de noticias</body></html>");

    }


res.end("<html><body>Portal de noticias</body></html>");

});

server.listen(64864);

