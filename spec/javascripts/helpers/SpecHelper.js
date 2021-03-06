spec = window.spec ? window.spec : {};

beforeEach(function() {
  this.addMatchers(jqueryMatchers);
  $('head link').attr('data-spec', true);
  $('head script').attr('data-spec', true);
});

afterEach(function() {
  expect(spec.loadFixtureCount).toBeLessThan(2);
  spec.loadFixtureCount = 0;
  $('head link').removeAttr('data-spec');
  $('head script').removeAttr('data-spec');
});

var context = describe;
var xcontext = xdescribe;

spec.page = function(){
  return $('#jasmine_content');
};

spec.clearLiveEventBindings = function() {
  var events = jQuery.data(document, "events");
  for (prop in events) {
    delete events[prop];
  }
};

spec.printElement = function(element) {
  return element.nodeName + ' ' + element.id + ' ' + element.className;
};

var $findOne = function() {
  var $result = $.apply(this, arguments);
  expect($result).toBeSingleton();
  return $result;
};

var $findAll = function() {
  var $result = $.apply(this, arguments);
  expect($result).toExist();
  return $result;
};

jasmine.Matchers.prototype.toBeWithin = function(expected, bounds) {
  return this.report(
    (expected - bounds) <= this.actual && this.actual <= (expected + bounds),
    "Expected " + this.actual + " to be within " + expected + " +-" + bounds
  );
};

var delays = function(timeout) {
  jasmine.getEnv().currentSpec.delays(timeout);
};

jasmine.Spec.prototype.delays = function(timeout) {
  var delaysFunc = new jasmine.DelaysBlock(this.env, timeout, this);
  this.addToQueue(delaysFunc);
  return this;
};

jasmine.DelaysBlock = function(env, timeout, spec) {
  this.timeout = timeout;
  jasmine.Block.call(this, env, null, spec);
};

jasmine.util.inherit(jasmine.DelaysBlock, jasmine.Block);

jasmine.DelaysBlock.prototype.execute = function (onComplete) {
  this.env.setTimeout(function () {
    onComplete();
  }, this.timeout);
};