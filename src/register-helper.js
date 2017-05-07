'use strict';

// function registerHelper(patternlab, Handlebars) {
//   Handlebars.registerHelper('listitems', function(options) {
//     let html = '';
//     let listitems = patternlab.listitems[options.hash.size];
//     listitems.forEach(function(listitem) {
//       if (patternlab.config.debug) {
//         console.log(listitem);
//       }
//       html = html + options.fn(listitem)
//     })
//     return html;
//   });
// }
var helpers = require('handlebars-helpers');
var layouts = require('handlebars-layouts');

function registerHelper(patternlab, Handlebars) {
  helpers({
    handlebars: Handlebars
  });
  layouts.register(Handlebars);
  Handlebars.registerHelper('json', function (content) {
      return JSON.stringify(content);
  });
}


module.exports = registerHelper;
