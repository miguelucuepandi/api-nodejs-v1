
const app = require("../src/app");
const debug = require("debug")("miguelucuepandi:server");
const http = require("http");

const port = normalisePort(process.env.PORT || "3000"); 
app.set("port", port);

const server = http.createServer(app);
  
server.listen(port)
server.on("error", onError)
server.on("listening", onListening)
console.log(`API rodando na porta ${port}`)

// Função para normalizar a porta, garantindo que seja um número válido ou uma string.
function normalisePort(val) {
    const port = parseInt(val, 10)

    if (isNaN(port)) {
        return val
    }

    if (port >= 0) {
        return port
    }

    return false
}

// Função para lidar com erros do servidor, como problemas de permissão ou porta já em uso.
function onError(error) {
    if (error.syscall !== "listen") {
        throw error
    }

    const bind = typeof port === "string" ? 
    "Pipe " + port :    
    "Port " + port;

    switch (error.code) {
        //Erro de permissão de acesso à porta, geralmente ocorre quando a porta é menor que 1024 e o processo não tem privilégios de administrador.
        case "EACCES":
            console.error(bind + " requires elevated privileges")
            process.exit(1)
            break

        // erro de endereço já em uso, ocorre quando a porta já está sendo utilizada por outro processo.
        case "EADDRINUSE":
            console.error(bind + " is already in use")
            process.exit(1)
            break
        default:
            throw error
    }
}

function onListening() {
    const addr = server.address()
    const bind = typeof addr === "string" 
    ? "pipe " + addr 
    : "port " + addr.port
    debug("Listening on " + bind)
}   

// Explicacao do codigo acima:
// 1- Importa os módulos necessários: o aplicativo Express, o módulo de depuração e o módulo HTTP.
// 2- Define a porta em que o servidor irá escutar, normalizando-a para garantir que seja um número válido ou uma string.
// 3- Cria o servidor HTTP usando o aplicativo Express.
// 4- Inicia o servidor e define os manipuladores de eventos para lidar com erros e quando o servidor estiver ouvindo.
// 5- Define a função normalisePort para garantir que a porta seja válida.
// 6- Define a função onError para lidar com erros específicos do servidor, como problemas de permissão ou porta já em uso.
// 7- Define a função onListening para registrar quando o servidor estiver ouvindo na porta especificada.   
