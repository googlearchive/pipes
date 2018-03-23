define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform'], function(dart_sdk, pipe_transform) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__pipe_transform = pipe_transform.src__core__change_detection__pipe_transform;
  const _root = Object.create(null);
  const src__exponential_strength_pipe = Object.create(_root);
  src__exponential_strength_pipe.ExponentialStrengthPipe = class ExponentialStrengthPipe extends src__core__change_detection__pipe_transform.PipeTransform {
    transform(value, exponent) {
      return math.pow(value != null ? value : 0, exponent != null ? exponent : 1);
    }
  };
  (src__exponential_strength_pipe.ExponentialStrengthPipe.new = function() {
  }).prototype = src__exponential_strength_pipe.ExponentialStrengthPipe.prototype;
  dart.addTypeTests(src__exponential_strength_pipe.ExponentialStrengthPipe);
  dart.setMethodSignature(src__exponential_strength_pipe.ExponentialStrengthPipe, () => ({
    __proto__: dart.getMethods(src__exponential_strength_pipe.ExponentialStrengthPipe.__proto__),
    transform: dart.fnType(core.num, [core.num, core.num])
  }));
  dart.trackLibraries("packages/pipe_examples/src/exponential_strength_pipe.ddc", {
    "package:pipe_examples/src/exponential_strength_pipe.dart": src__exponential_strength_pipe
  }, '{"version":3,"sourceRoot":"","sources":["exponential_strength_pipe.dart"],"names":[],"mappings":";;;;;;;;;;cAcgB,KAAS,EAAE,QAAY;YAAK,AAAK,SAAG,CAAC,KAAK,WAAL,KAAK,GAAI,GAAG,QAAQ,WAAR,QAAQ,GAAI;IAAE;;;EAC/E","file":"exponential_strength_pipe.ddc.js"}');
  // Exports:
  return {
    src__exponential_strength_pipe: src__exponential_strength_pipe
  };
});

//# sourceMappingURL=exponential_strength_pipe.ddc.js.map
