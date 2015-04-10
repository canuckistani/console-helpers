const { Cc, Ci, Cu, Cr, Cm, components } = require('chrome');
const { devtools } = Cu.import("resource://gre/modules/devtools/Loader.jsm", {});
const { WebConsoleCommands } = devtools.require("devtools/toolkit/webconsole/utils");
const tabs = require('sdk/tabs');
const _ = require('underscore');
const urls = require('sdk/url');

console.log("loaded console helper");

// WebConsoleCommands.register("docs", function(aOwner, aSelector) {
//   let url = 'https://developer.mozilla.org/en-US/search?q='
//   tabs.open(url+aSelector);
//   return;
// });

WebConsoleCommands.register("styles", function(aOwner, aSelector) {
  let styles = _.map(aOwner.window.document.styleSheets, (style) => {
    let _uri = urls.URL(style.href);
    return {domain: _uri.hostname, style: style.href};
  });
  // return aOwner.window.document.styleSheets; // works
  return styles; // doesn't work
});