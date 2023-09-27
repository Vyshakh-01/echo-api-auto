const {After, Before, AfterAll} = require('@cucumber/cucumber');




Before({tags: "@TestTag2 or @TestTag1"}, function (){
    console.log('Starting Before')




})




After( function (){
    console.log('****Beginning teardown')
})
