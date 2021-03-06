var templates = require('./templates');

// entry point for the "foo" module

// populate the section export with the "getMessage" function
exports.getMessage = function(message) {

  // this is injected automatically from config/dev.json
  var lastName = global.config.lastName;

  // the templates module will be automatically created with precompiled
  // handlebars functions if the handlebars plugin is included >> plugins.handlebars(require('handlebars'))
  // the "message" attribute is created because a template exists called "message.hbs" under the templates directory
  // global.name was populated in the base index.js file
  return templates.message({
    firstName: global.firstName,
    lastName: lastName
  });
};
