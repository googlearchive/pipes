define(['dart_sdk', 'packages/pipe_examples/src/heroes', 'packages/angular/src/core/change_detection/pipe_transform'], function(dart_sdk, heroes, pipe_transform) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__heroes = heroes.src__heroes;
  const src__core__change_detection__pipe_transform = pipe_transform.src__core__change_detection__pipe_transform;
  const _root = Object.create(null);
  const src__flying_heroes_pipe = Object.create(_root);
  const $toList = dartx.toList;
  const $where = dartx.where;
  let HeroTobool = () => (HeroTobool = dart.constFn(dart.fnType(core.bool, [src__heroes.Hero])))();
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__heroes.Hero)))();
  src__flying_heroes_pipe.FlyingHeroesPipe = class FlyingHeroesPipe extends src__core__change_detection__pipe_transform.PipeTransform {
    transform(value) {
      return value[$where](dart.fn(hero => hero.canFly, HeroTobool()))[$toList]();
    }
  };
  (src__flying_heroes_pipe.FlyingHeroesPipe.new = function() {
  }).prototype = src__flying_heroes_pipe.FlyingHeroesPipe.prototype;
  dart.addTypeTests(src__flying_heroes_pipe.FlyingHeroesPipe);
  dart.setMethodSignature(src__flying_heroes_pipe.FlyingHeroesPipe, () => ({
    __proto__: dart.getMethods(src__flying_heroes_pipe.FlyingHeroesPipe.__proto__),
    transform: dart.fnType(core.List$(src__heroes.Hero), [ListOfHero()])
  }));
  src__flying_heroes_pipe.FlyingHeroesImpurePipe = class FlyingHeroesImpurePipe extends src__flying_heroes_pipe.FlyingHeroesPipe {};
  (src__flying_heroes_pipe.FlyingHeroesImpurePipe.new = function() {
  }).prototype = src__flying_heroes_pipe.FlyingHeroesImpurePipe.prototype;
  dart.addTypeTests(src__flying_heroes_pipe.FlyingHeroesImpurePipe);
  dart.trackLibraries("packages/pipe_examples/src/flying_heroes_pipe.ddc", {
    "package:pipe_examples/src/flying_heroes_pipe.dart": src__flying_heroes_pipe
  }, '{"version":3,"sourceRoot":"","sources":["flying_heroes_pipe.dart"],"names":[],"mappings":";;;;;;;;;;;;;;cAKuB,KAAgB;YACjC,MAAK,QAAM,CAAC,QAAC,IAAI,IAAK,IAAI,OAAO,yBAAQ;IAAE;;;EACjD;;;;;;;;EAIuD","file":"flying_heroes_pipe.ddc.js"}');
  // Exports:
  return {
    src__flying_heroes_pipe: src__flying_heroes_pipe
  };
});

//# sourceMappingURL=flying_heroes_pipe.ddc.js.map
