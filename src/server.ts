import app from './app';

export const createServer = () => {
  return app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
  });
};
