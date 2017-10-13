var assert = require('assert');
describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://staging.brokerme.club');
        var title = browser.getTitle();
        assert.equal(title, 'brokerme clubi1');
    });
});
