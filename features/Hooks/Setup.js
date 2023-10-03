const {After, Before, AfterAll} = require('@cucumber/cucumber');




Before({tags: "@TestTag2 or @TestTag1"}, function (scenario){
    console.log('Starting Before')
    const tagsObject = scenario.pickle;
console.log('33333TestTag ='+ JSON.stringify(scenario.pickle.tags[0].name))

    console.log('Before XX Tag: ' +  tagsObject);
    console.log('XXXXXXXXTest Tag: ' +  JSON.stringify(tagsObject));
    const tag = tagsObject.name;
    console.log('YYYYYYYYTest Tag: ' +  tag);



})




After( function (scenario){
    console.log('****Beginning teardown')
    // const scenarioobj = JSON.stringify(scenario);
    // console.log('*****+++'+scenarioobj)

    
    console.log('*****+++2222: '+ JSON.stringify(scenario.result.status))
})
