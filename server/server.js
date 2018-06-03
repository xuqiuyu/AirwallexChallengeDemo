/**
 * ------------------------------------------------------------------
 * node http server
 * ------------------------------------------------------------------
 */
const serve = require('koa-static');
const path = require('path');
const Koa = require('koa');

const app = new Koa();

app.use(serve(path.resolve(__dirname, '../dist')));

app.listen(8080);

console.log(`\n==>   Listening on port ${8080}. Open up http://localhost:${8080}/ in your browser.\n`);
