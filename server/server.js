/**
 * ------------------------------------------------------------------
 * node http server
 * ------------------------------------------------------------------
 */
const serve = require('koa-static');
const path = require('path');
const Koa = require('koa');

const app = new Koa();

// apply koa middlewares
// app.use(async (ctx) => {
//   ctx.body = 'hello koa2';
// });


// app.use(views(path.resolve(__dirname, '../view/template'), { map: { html: 'ejs' } }));
app.use(serve(path.resolve(__dirname, '../dist')));

app.listen(8080);

console.log(`\n==>   Listening on port ${8080}. Open up http://localhost:${8080}/ in your browser.\n`);
