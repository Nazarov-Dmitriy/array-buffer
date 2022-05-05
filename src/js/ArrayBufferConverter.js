export default class ArrayBufferConverter {
  constructor() {
    this.buffer;
  }

  load(data) {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < data.length; i++) {
      bufferView[i] = data.charCodeAt(i);
    }
    this.buffer = bufferView;
  }

  toString() {
    return this.buffer.reduce(function(str, current) {
      return str + String.fromCharCode(current);
    }, '');
  }
}
