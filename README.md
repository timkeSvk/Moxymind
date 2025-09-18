PREPARATION
------------
- node.js must be installed
- visual studio must be installed
- create new playwright project in VS
- clone gitHub repo:  https://github.com/timkeSvk/Moxymind.git


TESTS DESCRIPTION
-----------------
UI:
	- there are 6 login page tests:
 		- success login
		- locked user
		- wrong password
		- non existing user
		- empty form
		- no password given

	- tests are data-driven so can be added , updated , removed without editing the main code
	- test-data (inputs & exp.results)can be found under: ressources/loginTestData.json

API:
	- there are 2 tests:
		* get users api request test
		* create user api request test
  
	- tests are data-driven so can be added , updated , removed without editing the main code
	- test-data (inputs & exp.results) can be found under: ressources/apiTestData.json


RUNNING THE TESTS (please run particular command from terminal or command line where the Project is stored) (can be then used in Jenkins as Parameter)
------------------
UI TESTS:
	Chrome Browser: npm run UI_chrome
	Firefox Browser: npm run UI_firefox
	Safari Browser: npm run UI_safari
	iPhone15 (web responsive testing): npm run UI_iPhone
	Samsung Galaxy S8: (web responsive testing): npm run UI_samsung
	UI_Full_Regression (all UI tests): npm run UI_all

	NOTE: You can run tests (in one test-file)) in parallel mode : just uncomment line: "test.describe.configure({mode: 'parallel'});" otherwise they will run sequentially


API TESTS:
	all: npm run api

SHOWING THE REPORT:
--------------------
after the tests-run run command: "npx playwright show-report" in terminal or command line
