cordova.define("cordova-plugin-app-update.AppUpdate", function(require, exports, module) {
var exec = require('cordova/exec');

exports.checkAppUpdate = function(success, error, updateUrl) {
    updateUrl = updateUrl ? [updateUrl] : [];
    exec(success, error, "AppUpdate", "checkAppUpdate", updateUrl);
};
});
