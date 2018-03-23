define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__heroes = Object.create(_root);
  src__heroes.Hero = class Hero extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get canFly() {
      return this[canFly$];
    }
    set canFly(value) {
      super.canFly = value;
    }
    toString() {
      return dart.str`${this.name} (${dart.test(this.canFly) ? 'can fly' : 'doesn\'t fly'})`;
    }
  };
  (src__heroes.Hero.new = function(name, canFly) {
    this[name$] = name;
    this[canFly$] = canFly;
  }).prototype = src__heroes.Hero.prototype;
  dart.addTypeTests(src__heroes.Hero);
  const name$ = Symbol("Hero.name");
  const canFly$ = Symbol("Hero.canFly");
  dart.setFieldSignature(src__heroes.Hero, () => ({
    __proto__: dart.getFields(src__heroes.Hero.__proto__),
    name: dart.finalFieldType(core.String),
    canFly: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__heroes.Hero, ['toString']);
  dart.defineLazy(src__heroes, {
    /*src__heroes.mockHeroes*/get mockHeroes() {
      return dart.constList([dart.const(new src__heroes.Hero.new("Windstorm", true)), dart.const(new src__heroes.Hero.new("Bombasto", false)), dart.const(new src__heroes.Hero.new("Magneto", false)), dart.const(new src__heroes.Hero.new("Tornado", true))], src__heroes.Hero);
    }
  });
  dart.trackLibraries("packages/pipe_examples/src/heroes.ddc", {
    "package:pipe_examples/src/heroes.dart": src__heroes
  }, '{"version":3,"sourceRoot":"","sources":["heroes.dart"],"names":[],"mappings":";;;;;;;;IACe;;;;;;IACF;;;;;;;YAIU,YAAE,SAAI,eAAI,WAAM,IAAG,YAAY;IAAiB;;mCAF1D,IAAS,EAAE,MAAW;IAAjB,WAAI,GAAJ,IAAI;IAAO,aAAM,GAAN,MAAM;EAAC;;;;;;;;;;;MAKnB,sBAAU;YAAG,iBAC5B,eAAM,oBAAI,CAAC,aAAa,QACxB,eAAM,oBAAI,CAAC,YAAY,SACvB,eAAM,oBAAI,CAAC,WAAW,SACtB,eAAM,oBAAI,CAAC,WAAW","file":"heroes.ddc.js"}');
  // Exports:
  return {
    src__heroes: src__heroes
  };
});

//# sourceMappingURL=heroes.ddc.js.map
