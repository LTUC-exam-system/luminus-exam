'use strict'
let express = require('express');
let server = express();
const cors = require('cors');
server.use(express.json());
server.use(cors());




// server.use(notFound);
// server.use(serverError);


module.exports = {
    server: server,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        server.listen(PORT, () => console.log(`listining on port: ${PORT}`));
    }
}