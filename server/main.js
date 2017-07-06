import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';


const app = express();
const port = 8010;
const devPort = 8011;

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}

app.use('/',express.static(__dirname+'/../public'));

app.get('/hello',(req,res)=>{
	return res.send('is it works???');
})

import posts from './routes/posts';
app.use('/posts',posts);

const server = app.listen(port,()=>{
	console.log('Server started with : '+port);
})