import ArrayBufferConverter from '../ArrayBufferConverter.js'

test('should sum', () => {
  let data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const result = new ArrayBufferConverter();
  result.load(data);

  expect(result.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
