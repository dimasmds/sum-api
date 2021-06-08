const Hapi = require('@hapi/hapi');
const sum = require('./sum');

const init = async () => {
  const server = Hapi.server({
    host: '0.0.0.0',
    port: '5000',
  });

  server.route({
    method: 'GET',
    path: '/sum/{a}/{b}',
    handler: async (request) => {
      const { a, b } = request.params;
      const result = sum(Number(a), Number(b));

      return {
        result,
      };
    }
  });

  await server.start();
  console.log(`server start At ${server.info.uri}`);
}

init();
