import ArrayBufferConverter from '../ArrayBufferConverter';

test('should sum', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const result = new ArrayBufferConverter();
  result.load(data);
  expect(result.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
