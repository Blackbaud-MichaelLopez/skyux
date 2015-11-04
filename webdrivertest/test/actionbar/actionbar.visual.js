/*global describe, it, browser */

describe('actionbar', function () {
    'use strict';
    it('should take an actionbar screenshot', function (done) {
        console.log('in this test');
        browser
            .url('/actionbar/fixtures/test.full.html')
            .webdrivercss('actionbar', [
                {
                    name: 'actionbar',
                    elem: '#screenshot-actionbar'
                }
            ]).call(done);

        console.log('out this test');
    });
});
