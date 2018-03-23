define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__hero_birthday1_component = Object.create(_root);
  src__hero_birthday1_component.HeroBirthdayComponent = class HeroBirthdayComponent extends core.Object {
    get birthday() {
      return this[birthday];
    }
    set birthday(value) {
      this[birthday] = value;
    }
  };
  (src__hero_birthday1_component.HeroBirthdayComponent.new = function() {
    this[birthday] = new core.DateTime.new(1988, 4, 15);
  }).prototype = src__hero_birthday1_component.HeroBirthdayComponent.prototype;
  dart.addTypeTests(src__hero_birthday1_component.HeroBirthdayComponent);
  const birthday = Symbol("HeroBirthdayComponent.birthday");
  dart.setFieldSignature(src__hero_birthday1_component.HeroBirthdayComponent, () => ({
    __proto__: dart.getFields(src__hero_birthday1_component.HeroBirthdayComponent.__proto__),
    birthday: dart.fieldType(core.DateTime)
  }));
  dart.trackLibraries("packages/pipe_examples/src/hero_birthday1_component.ddc", {
    "package:pipe_examples/src/hero_birthday1_component.dart": src__hero_birthday1_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_birthday1_component.dart"],"names":[],"mappings":";;;;;;;;IAQW;;;;;;;;kBAAQ,GAAG,IAAI,iBAAQ,CAAC,MAAM,GAAG;EAC5C","file":"hero_birthday1_component.ddc.js"}');
  // Exports:
  return {
    src__hero_birthday1_component: src__hero_birthday1_component
  };
});

//# sourceMappingURL=hero_birthday1_component.ddc.js.map
