var Handlebars = require("handlebars");
var MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);

Handlebars.registerHelper("format", function (date, format) {
  return moment(date).format(format);
});
