var fs = require('fs');
var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-modular-scale', function () {

    it('should modular scale', function (done) {
        var input = fs.readFileSync(
            'test/fixtures/scale.css',
            'utf8'
        );
        var output = fs.readFileSync(
            'test/fixtures/scale.expected.css',
            'utf8'
        );
        test(input, output, {}, done);
    });

    it('should not bomb on nothing', function (done) {
        var input = fs.readFileSync(
            'test/fixtures/null.css',
            'utf8'
        );
        var output = fs.readFileSync(
            'test/fixtures/null.expected.css',
            'utf8'
        );
        test(input, output, {}, done);
    });
});
