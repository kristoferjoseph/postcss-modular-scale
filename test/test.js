var fs = require('fs')
var postcss = require('postcss');
var expect  = require('chai').expect;
var plugin = require('../');


function filename(name) { return 'test/fixtures/' + name + '.css' }
function read(name) { return fs.readFileSync(name, 'utf8') }

function test(input, output, opts, done) {
  postcss([ plugin(opts) ]).process(input).then(function (result) {
    expect(result.css).to.equal(output);
    done();
  });
};

describe('postcss-modular-scale', function () {

    it('should parse modular scale', function (done) {
      var input = read(filename('scale'))
      var output = read(filename('scale.expected'))
      test(input, output, {}, done)
    });

});
