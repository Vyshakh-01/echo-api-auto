const assert = require('assert')
const { When, Then, Given } = require('@cucumber/cucumber')
const  {getAPIs}= require ("../Actions/AcceptanceActions.js")


Given('AT1_S1 I validate {string}', function(valueString){
    console.log(new Date().toLocaleString()+' [AT1_S1][Steps]: Validating String Value String = '+ valueString);
});


Then('AT1_S2 I validate get {string} API', function(valueString){
    console.log(new Date().toLocaleString()+' [AT1_S2][Steps]: Validating String Value Of String = '+ valueString);
});

Given('AT1_S3 I am making a Get API call for {string} configs', function(valueString){
    console.log(new Date().toLocaleString()+' [AT1_S3][Steps]: Fetching GET API for'+ valueString);
    
});


//AT2 Start

Given('AT2_S1 I am making a Get API call for {string} configs', async function(valueString){
    console.log(new Date().toLocaleString()+' [AT2_S1][Steps]: Fetching GET API for '+ valueString);
    await getAPIs('https://polyrooms.bluejeans.com/channels/live/swconfig.json');
});
