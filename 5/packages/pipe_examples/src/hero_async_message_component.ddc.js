define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__hero_async_message_component = Object.create(_root);
  const $length = dartx.length;
  const $_get = dartx._get;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let intToString = () => (intToString = dart.constFn(dart.fnType(core.String, [core.int])))();
  let StreamOfString = () => (StreamOfString = dart.constFn(async.Stream$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  const _msgs = Symbol('_msgs');
  src__hero_async_message_component.HeroAsyncMessageComponent = class HeroAsyncMessageComponent extends core.Object {
    get message() {
      return this[message];
    }
    set message(value) {
      this[message] = value;
    }
    resend() {
      this.message = StreamOfString().periodic(src__hero_async_message_component.HeroAsyncMessageComponent._msgEventDelay, dart.fn(i => this[_msgs][$_get](i), intToString())).take(this[_msgs][$length]);
    }
  };
  (src__hero_async_message_component.HeroAsyncMessageComponent.new = function() {
    this[message] = null;
    this[_msgs] = JSArrayOfString().of(['You are my hero!', 'You are the best hero!', 'Will you be my hero?']);
    this.resend();
  }).prototype = src__hero_async_message_component.HeroAsyncMessageComponent.prototype;
  dart.addTypeTests(src__hero_async_message_component.HeroAsyncMessageComponent);
  const message = Symbol("HeroAsyncMessageComponent.message");
  dart.setMethodSignature(src__hero_async_message_component.HeroAsyncMessageComponent, () => ({
    __proto__: dart.getMethods(src__hero_async_message_component.HeroAsyncMessageComponent.__proto__),
    resend: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_async_message_component.HeroAsyncMessageComponent, () => ({
    __proto__: dart.getFields(src__hero_async_message_component.HeroAsyncMessageComponent.__proto__),
    message: dart.fieldType(StreamOfString()),
    [_msgs]: dart.fieldType(ListOfString())
  }));
  dart.defineLazy(src__hero_async_message_component.HeroAsyncMessageComponent, {
    /*src__hero_async_message_component.HeroAsyncMessageComponent._msgEventDelay*/get _msgEventDelay() {
      return dart.const(new core.Duration.new({milliseconds: 500}));
    }
  });
  dart.trackLibraries("packages/pipe_examples/src/hero_async_message_component.ddc", {
    "package:pipe_examples/src/hero_async_message_component.dart": src__hero_async_message_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_async_message_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IAgBiB;;;;;;;AAOb,kBAAO,GACH,AAAI,yBAAe,CAAC,0EAAc,EAAE,QAAC,CAAC,IAAK,WAAK,QAAC,CAAC,uBAAO,CAAC,WAAK,SAAO;IAC5E;;;IATe,aAAO;IAWT,WAAK,GAAG,sBACnB,oBACA,0BACA;AAXA,eAAM;EACR;;;;;;;;;;;;;MANa,0EAAc;YAAG,gBAAM,iBAAQ,gBAAe","file":"hero_async_message_component.ddc.js"}');
  // Exports:
  return {
    src__hero_async_message_component: src__hero_async_message_component
  };
});

//# sourceMappingURL=hero_async_message_component.ddc.js.map
