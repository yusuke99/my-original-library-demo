const { expect } = require('chai');
const myOriginalLibrary = require('../src/index.js');

describe('myOriginalLibrary', () => {
  it('should pass emoji as argument', () => {
    const response = myOriginalLibrary('🎉');
    expect(response).to.equal('OK');
  });

  it('should throw error when emoji is not passed', () => {
    expect(() => myOriginalLibrary('')).to.throw();
    expect(() => myOriginalLibrary('test')).to.throw();
    expect(() => myOriginalLibrary(123)).to.throw();
    expect(() => myOriginalLibrary(null)).to.throw();
    expect(() => myOriginalLibrary()).to.throw();
    expect(() => myOriginalLibrary([])).to.throw();
    expect(() => myOriginalLibrary({})).to.throw();
  });
});
