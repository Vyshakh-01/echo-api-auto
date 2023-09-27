const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')
const { Greeter } = require('../../src')

When('the greeter says hello', function () {
  this.whatIHeard = new Greeter().sayHello()
});

Then('I should have heard {string}', function (expectedResponse) {
    console.log('Hello world'+expectedResponse)
    assert.equal(this.whatIHeard, expectedResponse)

});

When('Get API Test', async function () {
  console.log('Starting API call..............')
  //getConfiguration()
  const response = await fetch("https://polyrooms.bluejeans.com/channels/live/swconfig.json");
  const movies = await response.json();
  console.log(movies);
  getConfiguration()
})

async function getConfiguration() {
  console.log('Starting second APi call')
  const response = await fetch("https://polyrooms.bluejeans.com/channels/live/swconfig.json");
  const movies = await response.json();
  console.log(movies);
  console.log('::::) Execution (::::');


  var millisecondsToWait = 5000;
  setTimeout(function() {
      // Whatever you want to do after the wait
  }, millisecondsToWait);

}
