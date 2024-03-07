const {test, expect} = require('@jest/globals');
const {normalizeUrl} = require('./crawl.js');

test('try the following url: boot.dev/path//', () =>{
    expect(normalizeUrl('boot.dev/path//')).toBe('boot.dev/path')
});