var test = require('tape')
  , toUTF8 = require('./index')
  , Buffer = require('buffer').Buffer
  , convert = require('convert-buffer')

test('works as expected', function(assert) {
  var input = ['11000010', '10100010'].map(function(x) { return parseInt(x, 2) })
  assert.equal(toUTF8(input), '\u00a2')
  assert.end() 
})

test('works the same as buffer.toString(utf8)', function(assert) {
  var buf = new Buffer('淾淾淾 hello world 淾淾 yep ƒuu 淾', 'utf8')
    , str = buf.toString('utf8')

  if(buf[0] === undefined) {
    convert(Uint8Array, function(x, i) { return x.get(i) })
      .on('data', function(x) { buf = x })
      .write(buf)
  }

  assert.equal(toUTF8(buf), str)
  assert.end()
})
