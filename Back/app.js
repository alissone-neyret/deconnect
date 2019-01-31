import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import cors from 'cors';
import fileUpload from 'express-fileupload';
// import favicon from 'serve-favicon';

import index from './routes/index';

const app = express();
const debug = Debug('back:app');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());

// authorize access to fetch by user
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// upload picture

app.use(fileUpload());


app.post('/upload', (req, res, next) => {
  const uploadFile = req.files.file;
  const fileName = req.files.file.name;

  if (Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  uploadFile.mv(
    `${__dirname}/public/files/${fileName}`,
    (err) => {
      if (err) {
        return res.status(500).send(err);
      }

      res.json({
        file: `public/${req.files.file.name}`,
      });
    },
  );
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
