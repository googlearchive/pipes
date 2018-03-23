define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform'], function(dart_sdk, pipe_transform) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__pipe_transform = pipe_transform.src__core__change_detection__pipe_transform;
  const _root = Object.create(null);
  const src__fetch_json_pipe = Object.create(_root);
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  const _cachedData = Symbol('_cachedData');
  const _cachedUrl = Symbol('_cachedUrl');
  src__fetch_json_pipe.FetchJsonPipe = class FetchJsonPipe extends src__core__change_detection__pipe_transform.PipeTransform {
    transform(url) {
      if (url != this[_cachedUrl]) {
        this[_cachedUrl] = url;
        this[_cachedData] = null;
        html.HttpRequest.getString(url).then(core.Null, dart.fn(s => {
          this[_cachedData] = convert.json.decode(s);
        }, StringToNull()));
      }
      return this[_cachedData];
    }
  };
  (src__fetch_json_pipe.FetchJsonPipe.new = function() {
    this[_cachedData] = null;
    this[_cachedUrl] = null;
  }).prototype = src__fetch_json_pipe.FetchJsonPipe.prototype;
  dart.addTypeTests(src__fetch_json_pipe.FetchJsonPipe);
  dart.setMethodSignature(src__fetch_json_pipe.FetchJsonPipe, () => ({
    __proto__: dart.getMethods(src__fetch_json_pipe.FetchJsonPipe.__proto__),
    transform: dart.fnType(dart.dynamic, [core.String])
  }));
  dart.setFieldSignature(src__fetch_json_pipe.FetchJsonPipe, () => ({
    __proto__: dart.getFields(src__fetch_json_pipe.FetchJsonPipe.__proto__),
    [_cachedData]: dart.fieldType(dart.dynamic),
    [_cachedUrl]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/pipe_examples/src/fetch_json_pipe.ddc", {
    "package:pipe_examples/src/fetch_json_pipe.dart": src__fetch_json_pipe
  }, '{"version":3,"sourceRoot":"","sources":["fetch_json_pipe.dart"],"names":[],"mappings":";;;;;;;;;;;;;;cAUoB,GAAU;AAC1B,UAAI,GAAG,IAAI,gBAAU,EAAE;AACrB,wBAAU,GAAG,GAAG;AAChB,yBAAW,GAAG;AACd,wBAAW,UAAU,CAAC,GAAG,MAAM,YAAC,QAAC,CAAC;AAChC,2BAAW,GAAG,YAAI,OAAO,CAAC,CAAC;;;AAG/B,YAAO,kBAAW;IACpB;;;IAZQ,iBAAW;IACZ,gBAAU;EAYnB","file":"fetch_json_pipe.ddc.js"}');
  // Exports:
  return {
    src__fetch_json_pipe: src__fetch_json_pipe
  };
});

//# sourceMappingURL=fetch_json_pipe.ddc.js.map
