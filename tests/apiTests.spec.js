const {test, expect, request} = require("@playwright/test");
const {ApiModule} = require('../utils/apiModule');
const testDataList = JSON.parse(JSON.stringify(require('../resources/apiTestData.json')));

testDataList.forEach(testData => {
    test(`TEST: ${testData.testName}`, async ({request}) => {
        const api = new ApiModule(request);
        const resp = await api.createRequest(testData);
        api.verifyRespnse(resp, testData);
    });
});