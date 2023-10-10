module.exports = {
    default: {
      //parallel: 0,
      format: ['html:cucumber-report.html'],
       paths: ['src/test/resources/**/*.feature'],
       //backtrace:true,
       //failFast:true,
      //  import: ['src/test/js']
       import: ['src/test/js']
       
    }
  }
  //https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md