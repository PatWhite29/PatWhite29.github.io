// El módulo 'http' se utiliza para crear un servidor HTTP
const http = require('http');

// El módulo 'fs' permite interactuar con el sistema de archivos del servidor
const fs = require('fs');

    //Esta función deberá mostrar deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
           // 500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        // 200 OK: The request has succeeded.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }


    
    function getEscuelas(req, res) {
        
        const escuelas = [
            {
                "nombre": "Escuela Benito Juárez",
                "direccion": "Av. Principal 123, Ciudad de México"
            },
            {
                "nombre": "Escuela Miguel Hidalgo",
                "direccion": "Calle Secundaria 456, Ciudad de México"
            }
        ];  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      res.end(JSON.stringify(escuelas));
    }

     //Agrega un enlace a bienvenida y a donantes en escuelas.html 
    function mostrarEscuelas(req, res) {
        fs.readFile('escuelas.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

      //Agrega un enlace a bienvenida y a escuelas en donantes.html
      function mostrarDonantes(req, res) {
        //Construye una página básica donantes.html
        fs.readFile('donantes.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    //Esta función deberá enviar un json con los datos de las donantes
    function getDonantes(req, res) {
      const donantes = [
        {
          "nombre": "Juan Pérez",
          "cantidad": 100
        },
        {
          "nombre": "María López",
          "cantidad": 200
        }
      ];
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(donantes));
    }

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      //Cambia el mensaje por algo más divertido
      res.end('Oops parece que no ubicamos esa escuela.');
    }

    //incluye el enlace a la documentación de createServer
    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/') {
        darBienvenida(req, res);
      } else if (url === '/api/escuelas') {
        getEscuelas(req, res);
      } else if (url === '/api/donantes') {
        getDonantes(req, res);
      } 
      else if (url === '/escuelas') {
        mostrarEscuelas(req, res);
      } 
      else if (url === '/donantes') {
        mostrarDonantes(req, res);
      } 
      else if (url === '/equipo') {
        mostrarEquipo(req, res);
      } else if (url === '/opinion') {
        mostrarOpinion(req, res);
      } else {
        manejarRuta404(req, res);
      }
    });

    function mostrarEquipo(req, res) {
      fs.readFile('equipo.html', 'utf8', (error, data) => {
          if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!!');
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
      });
    }

    function mostrarOpinion(req, res) {
      fs.readFile('opinion.html', 'utf8', (error, data) => {
          if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!!');
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
      });
    }

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    

    //Importante
    //En esta actividad deberás agregar en supertarea un enlace a servidor.js y al resto de los html
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a opinion.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?

      //Agrega una ruta /opinion
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
      //¿Qué es el freedombox?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      
      
    });

    //Importante
    //En esta actividad deberás agregar en supertarea un enlace a servidor.js y al resto de los html