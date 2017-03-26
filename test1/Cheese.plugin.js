//META{"name":"Cheese_v0.0.1"}*//
var CheesePlugin = function () {};

CheesePlugin.prototype.start = function () {

};

CheesePlugin.prototype.load = function () {

};

CheesePlugin.prototype.unload = function () {}
;

CheesePlugin.prototype.stop = function () {

};

CheesePlugin.prototype.onMessage = function () {
//called when a message is received
};

CheesePlugin.prototype.onSwitch = function () {
//called when a server or channel is switched
};

CheesePlugin.prototype.observer = function (e) {
//raw MutationObserver event for each mutation
};

CheesePlugin.prototype.getSettingsPanel = function () {
return "Settings Panel";
};

CheesePlugin.prototype.getName = function () {
return "Cheesus Plugin";
};

CheesePlugin.prototype.getDescription = function () {
return "This is the Description";
};

CheesePlugin.prototype.getVersion = function () {
return "0.0.1";
};

CheesePlugin.prototype.getAuthor = function () {
return "Cheese";
};

/*
Add namespaces to your events.
When creating selectors like $(document).on('dblclick'), instead use a 
namespace such as $(document).on('dblclick.dce') in order to 
easily unload the event with $(document).off("dblclick.dce") without 
unloading all dblclick events.
*/