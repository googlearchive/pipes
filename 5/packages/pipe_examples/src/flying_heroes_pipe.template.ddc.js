define(['dart_sdk', 'packages/pipe_examples/src/heroes.template', 'packages/angular/angular.template'], function(dart_sdk, heroes, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__heroes$46template = heroes.src__heroes$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__flying_heroes_pipe$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__flying_heroes_pipe$46template, {
    /*src__flying_heroes_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__flying_heroes_pipe$46template.initReflector = function() {
    if (dart.test(src__flying_heroes_pipe$46template._visited)) {
      return;
    }
    src__flying_heroes_pipe$46template._visited = true;
    src__heroes$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__flying_heroes_pipe$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/pipe_examples/src/flying_heroes_pipe.template.ddc", {
    "package:pipe_examples/src/flying_heroes_pipe.template.dart": src__flying_heroes_pipe$46template
  }, '{"version":3,"sourceRoot":"","sources":["flying_heroes_pipe.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAYI,2CAAQ;YAAG;;;;;AAEb,kBAAI,2CAAQ,GAAE;AACZ;;AAEF,kDAAW;AAEX,IAAM,oCAAa;AACnB,IAAM,gCAAa;EACrB","file":"flying_heroes_pipe.template.ddc.js"}');
  // Exports:
  return {
    src__flying_heroes_pipe$46template: src__flying_heroes_pipe$46template
  };
});

//# sourceMappingURL=flying_heroes_pipe.template.ddc.js.map
