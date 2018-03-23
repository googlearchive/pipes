define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__power_boost_calculator_component = Object.create(_root);
  src__power_boost_calculator_component.PowerBoostCalculatorComponent = class PowerBoostCalculatorComponent extends core.Object {
    get power() {
      return this[power];
    }
    set power(value) {
      this[power] = value;
    }
    get factor() {
      return this[factor];
    }
    set factor(value) {
      this[factor] = value;
    }
  };
  (src__power_boost_calculator_component.PowerBoostCalculatorComponent.new = function() {
    this[power] = 5;
    this[factor] = 1;
  }).prototype = src__power_boost_calculator_component.PowerBoostCalculatorComponent.prototype;
  dart.addTypeTests(src__power_boost_calculator_component.PowerBoostCalculatorComponent);
  const power = Symbol("PowerBoostCalculatorComponent.power");
  const factor = Symbol("PowerBoostCalculatorComponent.factor");
  dart.setFieldSignature(src__power_boost_calculator_component.PowerBoostCalculatorComponent, () => ({
    __proto__: dart.getFields(src__power_boost_calculator_component.PowerBoostCalculatorComponent.__proto__),
    power: dart.fieldType(core.num),
    factor: dart.fieldType(core.num)
  }));
  dart.trackLibraries("packages/pipe_examples/src/power_boost_calculator_component.ddc", {
    "package:pipe_examples/src/power_boost_calculator_component.dart": src__power_boost_calculator_component
  }, '{"version":3,"sourceRoot":"","sources":["power_boost_calculator_component.dart"],"names":[],"mappings":";;;;;;;;IAkBM;;;;;;IACA;;;;;;;;IADA,WAAK,GAAG;IACR,YAAM,GAAG;EACf","file":"power_boost_calculator_component.ddc.js"}');
  // Exports:
  return {
    src__power_boost_calculator_component: src__power_boost_calculator_component
  };
});

//# sourceMappingURL=power_boost_calculator_component.ddc.js.map
