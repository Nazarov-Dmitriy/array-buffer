// TODO: write your code here
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
    let str = '';
    for (let i = 0; i < this.buffer.length; i++) {
      str += String.fromCharCode(this.buffer[i])
    }
    return str
  }
}




