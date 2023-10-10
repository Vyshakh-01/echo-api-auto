const assert = require('assert')

async function getAPIs(stringURL){
    console.log(new Date().toLocaleString()+' [getAPIs][Action]: Begning to make API call \n Fetching URL: '+ stringURL);
    const resource = await fetch(stringURL);

    // console.log(new Date().toLocaleString() + " [getAPIs][Action]: Responce From GET API Call: " + await resource.json());
    console.log(await resource.json());

}
module.exports = {
    getAPIs
}
