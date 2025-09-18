class LoginPage {
    
    constructor(page) {
        this.page = page;
        this.inpUsername = this.page.locator("//input[@id='user-name']");
        this.inpPasswprd = this.page.locator("//input[@id='password']");
        this.btnLogin = this.page.locator("//input[@id='login-button']");
        this.contErrMsg = this.page.locator("//div[contains(@class, 'error')]");
    };

    async logIn(username, password) {
        await this.inpUsername.fill(username);
        await this.inpPasswprd.fill(password);
        await this.btnLogin.click();
    };

    async goTo() {
        await this.page.goto('https://www.saucedemo.com/');
    };

    getErrorMessage() {
        return this.contErrMsg;
    };

};

class ProductPage {

    constructor(page) {
        this.page = page;
        this.btnMenu = this.page.locator("//button[@id='react-burger-menu-btn']");
    };

    getMenu() {
        return this.btnMenu;
    }

};

module.exports = {LoginPage, ProductPage};