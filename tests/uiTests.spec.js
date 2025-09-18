const {test,expect} = require("@playwright/test");
const {LoginPage, ProductPage} = require('../utils/pageObjects');
const testDataList = JSON.parse(JSON.stringify(require('../resources/loginTestData.json')));

test.describe.configure({mode: 'parallel'});
testDataList.forEach(testData => {
    test(`TEST: ${testData.testName}`, async ({page}) => {
        const loginPage = new LoginPage(page);
        const productPage = new ProductPage(page);
        
        await loginPage.goTo();
        await loginPage.logIn(testData.userName, testData.password);
        if (testData.result === 'OK') {
            await expect(productPage.getMenu()).toBeVisible();
        } else {
            await expect(loginPage.getErrorMessage()).toHaveText(testData.errorMessage);
        };
    });
});