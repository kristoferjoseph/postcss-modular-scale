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

var failTest = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        done(new Error('Parsing should fail.'));
    }).catch(function (error) {
        done();
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

    it('should not bomb on nonsense', function (done) {
        var input = fs.readFileSync(
            'test/fixtures/nonsense.css',
            'utf8'
        );
        var output = fs.readFileSync(
            'test/fixtures/nonsense.expected.css',
            'utf8'
        );
        test(input, output, {}, done);
    });

    it('should handle shorthand properties', function (done) {
        var input = fs.readFileSync(
            'test/fixtures/shorthand.css',
            'utf8'
        );
        var output = fs.readFileSync(
            'test/fixtures/shorthand.expected.css',
            'utf8'
        );
        test(input, output, {}, done);
    });

    it('should report an error on incorrect values', function (done) {
        var input = fs.readFileSync(
            'test/fixtures/nonsense-values.css',
            'utf8'
        );
        var output = fs.readFileSync(
            'test/fixtures/nonsense-values.expected.css',
            'utf8'
        );
        failTest(input, output, {}, done);
    });
});
