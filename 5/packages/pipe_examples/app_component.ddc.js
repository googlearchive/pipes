define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const app_component = Object.create(_root);
  app_component.AppComponent = class AppComponent extends core.Object {
    get birthday() {
      return this[birthday];
    }
    set birthday(value) {
      this[birthday] = value;
    }
  };
  (app_component.AppComponent.new = function() {
    this[birthday] = new core.DateTime.new(1988, 4, 15);
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  const birthday = Symbol("AppComponent.birthday");
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    birthday: dart.fieldType(core.DateTime)
  }));
  dart.trackLibraries("packages/pipe_examples/app_component.ddc", {
    "package:pipe_examples/app_component.dart": app_component
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;IA0BW;;;;;;;;kBAAQ,GAAG,IAAI,iBAAQ,CAAC,MAAM,GAAG;EAC5C","file":"app_component.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
});

//# sourceMappingURL=app_component.ddc.js.map
