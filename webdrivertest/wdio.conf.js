exports.config = {
    specs: [
        'webdrivertest/test/actionbar/actionbar.visual.js'
    ],
    capabilities: [
        {
            browserName: 'chrome'
        }
    ],
    logLevel: 'verbose',
    screenshotPath: 'shots',
    baseUrl: 'http://localhost:8000/webdrivertest/test',
    plugins: {
        webdrivercss: {
            screenshotRoot: 'my-shots',
            failedComparisonsRoot: 'diffs',
            mismatchTolerance: 0.05,
            screenWidth: [1024]
        }
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 5000,
        expectationResultHandler: function (passed, assertion) {
            //do something
        }
    },
    onPrepare: function () {
        console.log('lets go');
    },
    before: function () {
        console.log('run the tests');
    },
    after: function () {
        console.log('finish up the tests');
    },
    onComplete: function () {
        console.log('thats it');
    }

}
