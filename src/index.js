const express = require('express');

const{ PORT } = require('./config/serverconfig');

const setupandstartserver = () => {
    const app = express();
    app.listen(PORT,() =>{
        console.log(`Server started at ${PORT}`);
    })
}

setupandstartserver();