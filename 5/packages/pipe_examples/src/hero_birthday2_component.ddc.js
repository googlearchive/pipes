define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__hero_birthday2_component = Object.create(_root);
  src__hero_birthday2_component.HeroBirthday2Component = class HeroBirthday2Component extends core.Object {
    get birthday() {
      return this[birthday];
    }
    set birthday(value) {
      this[birthday] = value;
    }
    get toggle() {
      return this[toggle];
    }
    set toggle(value) {
      this[toggle] = value;
    }
    get format() {
      return dart.test(this.toggle) ? 'shortDate' : 'fullDate';
    }
    toggleFormat() {
      this.toggle = !dart.test(this.toggle);
    }
  };
  (src__hero_birthday2_component.HeroBirthday2Component.new = function() {
    this[birthday] = new core.DateTime.new(1988, 4, 15);
    this[toggle] = true;
  }).prototype = src__hero_birthday2_component.HeroBirthday2Component.prototype;
  dart.addTypeTests(src__hero_birthday2_component.HeroBirthday2Component);
  const birthday = Symbol("HeroBirthday2Component.birthday");
  const toggle = Symbol("HeroBirthday2Component.toggle");
  dart.setMethodSignature(src__hero_birthday2_component.HeroBirthday2Component, () => ({
    __proto__: dart.getMethods(src__hero_birthday2_component.HeroBirthday2Component.__proto__),
    toggleFormat: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__hero_birthday2_component.HeroBirthday2Component, () => ({
    __proto__: dart.getGetters(src__hero_birthday2_component.HeroBirthday2Component.__proto__),
    format: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(src__hero_birthday2_component.HeroBirthday2Component, () => ({
    __proto__: dart.getFields(src__hero_birthday2_component.HeroBirthday2Component.__proto__),
    birthday: dart.fieldType(core.DateTime),
    toggle: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/pipe_examples/src/hero_birthday2_component.ddc", {
    "package:pipe_examples/src/hero_birthday2_component.dart": src__hero_birthday2_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_birthday2_component.dart"],"names":[],"mappings":";;;;;;;;IAWW;;;;;;IAEJ;;;;;;;uBAES,WAAM,IAAG,cAAc;IAAU;;AAG7C,iBAAM,GAAG,WAAC,WAAM;IAClB;;;IARS,cAAQ,GAAG,IAAI,iBAAQ,CAAC,MAAM,GAAG;IAErC,YAAM,GAAG;EAOhB","file":"hero_birthday2_component.ddc.js"}');
  // Exports:
  return {
    src__hero_birthday2_component: src__hero_birthday2_component
  };
});

//# sourceMappingURL=hero_birthday2_component.ddc.js.map
