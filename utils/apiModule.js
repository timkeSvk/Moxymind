const { expect } = require("@playwright/test");

class ApiModule {

    constructor(request) {
        this.request = request;
        this.requestTime;
        this.responseTime;
    };

    async createRequest(reqData) {
        let cmd = `this.request.${reqData.requestType}('${reqData.endpoint}'`
        cmd = reqData.data ? cmd.concat(`, {data: ${JSON.stringify(reqData.data)} })`) : cmd.concat(')');
        console.log(`Creating Request: ${cmd}`);
        this.requestTime = new Date();
        const response = await eval(cmd);
        this.responseTime = new Date() - this.requestTime;
        return response
    };

    async verifyRespnse(response, expData) {
        const respJson = await response.json();
        let actValue;

        if (expData.responseCode) {
            expect.soft(response.status()).toBe(expData.responseCode);
        };

        if (expData.maxResponseTime) {
            expect.soft(this.responseTime).toBeLessThan(expData.maxResponseTime);
        };

        if (expData.dataVerification) {
            expData.dataVerification.forEach(expElement => {
                switch (expElement.verificationType) {
                    case 'value': {actValue = eval(`respJson.${expElement.dataPath}`);break;};
                    case 'dataType': {actValue = eval(`typeof(respJson.${expElement.dataPath})`);break;};
                    default: throw new Error(`Unsupported verification type: ${expElement.verificationType}`);
                };
                expect.soft(actValue).toBe(expElement.expected);
            });
        };
    };
};

module.exports = {ApiModule};