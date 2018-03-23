define(['dart_sdk', 'packages/pipe_examples/src/heroes'], function(dart_sdk, heroes) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__heroes = heroes.src__heroes;
  const _root = Object.create(null);
  const src__flying_heroes_component = Object.create(_root);
  const $trim = dartx.trim;
  const $isEmpty = dartx.isEmpty;
  const $add = dartx.add;
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__heroes.Hero)))();
  src__flying_heroes_component.FlyingHeroesComponent = class FlyingHeroesComponent extends core.Object {
    get heroes() {
      return this[heroes$];
    }
    set heroes(value) {
      this[heroes$] = value;
    }
    get canFly() {
      return this[canFly];
    }
    set canFly(value) {
      this[canFly] = value;
    }
    get mutate() {
      return this[mutate];
    }
    set mutate(value) {
      this[mutate] = value;
    }
    get title() {
      return this[title];
    }
    set title(value) {
      this[title] = value;
    }
    addHero(name) {
      name = name[$trim]();
      if (name[$isEmpty]) return;
      let hero = new src__heroes.Hero.new(name, this.canFly);
      if (dart.test(this.mutate)) {
        this.heroes[$add](hero);
      } else {
        let _ = ListOfHero().from(this.heroes);
        _[$add](hero);
        this.heroes = _;
      }
    }
    reset() {
      this.heroes = ListOfHero().from(src__heroes.mockHeroes);
    }
  };
  (src__flying_heroes_component.FlyingHeroesComponent.new = function() {
    this[heroes$] = null;
    this[canFly] = true;
    this[mutate] = true;
    this[title] = 'Flying Heroes (pure pipe)';
    this.reset();
  }).prototype = src__flying_heroes_component.FlyingHeroesComponent.prototype;
  dart.addTypeTests(src__flying_heroes_component.FlyingHeroesComponent);
  const heroes$ = Symbol("FlyingHeroesComponent.heroes");
  const canFly = Symbol("FlyingHeroesComponent.canFly");
  const mutate = Symbol("FlyingHeroesComponent.mutate");
  const title = Symbol("FlyingHeroesComponent.title");
  dart.setMethodSignature(src__flying_heroes_component.FlyingHeroesComponent, () => ({
    __proto__: dart.getMethods(src__flying_heroes_component.FlyingHeroesComponent.__proto__),
    addHero: dart.fnType(dart.void, [core.String]),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__flying_heroes_component.FlyingHeroesComponent, () => ({
    __proto__: dart.getFields(src__flying_heroes_component.FlyingHeroesComponent.__proto__),
    heroes: dart.fieldType(ListOfHero()),
    canFly: dart.fieldType(core.bool),
    mutate: dart.fieldType(core.bool),
    title: dart.fieldType(core.String)
  }));
  src__flying_heroes_component.FlyingHeroesImpureComponent = class FlyingHeroesImpureComponent extends src__flying_heroes_component.FlyingHeroesComponent {};
  (src__flying_heroes_component.FlyingHeroesImpureComponent.new = function() {
    src__flying_heroes_component.FlyingHeroesImpureComponent.__proto__.new.call(this);
    this.title = 'Flying Heroes (impure pipe)';
  }).prototype = src__flying_heroes_component.FlyingHeroesImpureComponent.prototype;
  dart.addTypeTests(src__flying_heroes_component.FlyingHeroesImpureComponent);
  dart.trackLibraries("packages/pipe_examples/src/flying_heroes_component.ddc", {
    "package:pipe_examples/src/flying_heroes_component.dart": src__flying_heroes_component
  }, '{"version":3,"sourceRoot":"","sources":["flying_heroes_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;IAaa;;;;;;IACN;;;;;;IACA;;;;;;IACE;;;;;;YAMM,IAAW;AACtB,UAAI,GAAG,IAAI,OAAK;AAChB,UAAI,IAAI,UAAQ,EAAE;AAElB,UAAI,OAAO,IAAI,oBAAI,CAAC,IAAI,EAAE,WAAM;AAChC,oBAAI,WAAM,GAAE;AAGV,mBAAM,MAAI,CAAC,IAAI;aACV;AAEL,gBAAS,AAAI,iBAAe,CAAC,WAAM;gBAAO,IAAI;mBAAxC;;IAEV;;AAGE,iBAAM,GAAG,AAAI,iBAAe,CAAC,sBAAU;IACzC;;;IA1BW,aAAM;IACZ,YAAM,GAAG;IACT,YAAM,GAAG;IACP,WAAK,GAAG;AAGb,cAAK;EACP;;;;;;;;;;;;;;;;;;;;;AAgCE,cAAK,GAAG;EACV","file":"flying_heroes_component.ddc.js"}');
  // Exports:
  return {
    src__flying_heroes_component: src__flying_heroes_component
  };
});

//# sourceMappingURL=flying_heroes_component.ddc.js.map
