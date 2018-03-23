define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/pipe_examples/src/exponential_strength_pipe', 'packages/pipe_examples/src/power_booster_component', 'packages/angular/src/di/reflector', 'packages/pipe_examples/src/exponential_strength_pipe.template', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, exponential_strength_pipe, power_booster_component, reflector, exponential_strength_pipe$, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__exponential_strength_pipe = exponential_strength_pipe.src__exponential_strength_pipe;
  const src__power_booster_component = power_booster_component.src__power_booster_component;
  const src__di__reflector = reflector.src__di__reflector;
  const src__exponential_strength_pipe$46template = exponential_strength_pipe$.src__exponential_strength_pipe$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__power_booster_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let numAndnumTonum = () => (numAndnumTonum = dart.constFn(dart.fnType(core.num, [core.num, core.num])))();
  let AppViewOfPowerBoosterComponent = () => (AppViewOfPowerBoosterComponent = dart.constFn(src__core__linker__app_view.AppView$(src__power_booster_component.PowerBoosterComponent)))();
  let AppViewAndintToAppViewOfPowerBoosterComponent = () => (AppViewAndintToAppViewOfPowerBoosterComponent = dart.constFn(dart.fnType(AppViewOfPowerBoosterComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfPowerBoosterComponent = () => (ComponentRefOfPowerBoosterComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__power_booster_component.PowerBoosterComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfPowerBoosterComponent = () => (ComponentFactoryOfPowerBoosterComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__power_booster_component.PowerBoosterComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__power_booster_component$46template, {
    /*src__power_booster_component$46template.styles$PowerBoosterComponent*/get styles$PowerBoosterComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _text_4 = Symbol('_text_4');
  const _expr_0 = Symbol('_expr_0');
  const _pipe_exponentialStrength_0 = Symbol('_pipe_exponentialStrength_0');
  const _pipe_exponentialStrength_0_0 = Symbol('_pipe_exponentialStrength_0_0');
  let const$;
  src__power_booster_component$46template.ViewPowerBoosterComponent0 = class ViewPowerBoosterComponent0 extends src__core__linker__app_view.AppView$(src__power_booster_component.PowerBoosterComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      let _text_1 = html.Text.new('Power Booster');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      let _text_3 = html.Text.new('Super power boost: ');
      this[_el_2][$append](_text_3);
      this[_text_4] = html.Text.new('');
      this[_el_2][$append](this[_text_4]);
      this[_pipe_exponentialStrength_0] = new src__exponential_strength_pipe.ExponentialStrengthPipe.new();
      this[_pipe_exponentialStrength_0_0] = src__core__linker__app_view_utils.pureProxy2(core.num, core.num, core.num, dart.bind(this[_pipe_exponentialStrength_0], 'transform'));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(this[_pipe_exponentialStrength_0_0](2, 10));
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_4][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__power_booster_component$46template.ViewPowerBoosterComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_text_4] = null;
    this[_expr_0] = null;
    this[_pipe_exponentialStrength_0] = null;
    this[_pipe_exponentialStrength_0_0] = null;
    src__power_booster_component$46template.ViewPowerBoosterComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('power-booster'));
    let t = src__power_booster_component$46template.ViewPowerBoosterComponent0._renderType;
    t == null ? src__power_booster_component$46template.ViewPowerBoosterComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__power_booster_component$46template.styles$PowerBoosterComponent) : t;
    this.setupComponentType(src__power_booster_component$46template.ViewPowerBoosterComponent0._renderType);
  }).prototype = src__power_booster_component$46template.ViewPowerBoosterComponent0.prototype;
  dart.addTypeTests(src__power_booster_component$46template.ViewPowerBoosterComponent0);
  dart.setMethodSignature(src__power_booster_component$46template.ViewPowerBoosterComponent0, () => ({
    __proto__: dart.getMethods(src__power_booster_component$46template.ViewPowerBoosterComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__power_booster_component.PowerBoosterComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__power_booster_component$46template.ViewPowerBoosterComponent0, () => ({
    __proto__: dart.getFields(src__power_booster_component$46template.ViewPowerBoosterComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_text_4]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_pipe_exponentialStrength_0]: dart.fieldType(src__exponential_strength_pipe.ExponentialStrengthPipe),
    [_pipe_exponentialStrength_0_0]: dart.fieldType(numAndnumTonum())
  }));
  dart.defineLazy(src__power_booster_component$46template.ViewPowerBoosterComponent0, {
    /*src__power_booster_component$46template.ViewPowerBoosterComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__power_booster_component$46template.viewFactory_PowerBoosterComponent0 = function(parentView, parentIndex) {
    return new src__power_booster_component$46template.ViewPowerBoosterComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__power_booster_component$46template.viewFactory_PowerBoosterComponent0, AppViewAndintToAppViewOfPowerBoosterComponent());
  dart.defineLazy(src__power_booster_component$46template, {
    /*src__power_booster_component$46template.styles$PowerBoosterComponentHost*/get styles$PowerBoosterComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _PowerBoosterComponent_0_5 = Symbol('_PowerBoosterComponent_0_5');
  src__power_booster_component$46template._ViewPowerBoosterComponentHost0 = class _ViewPowerBoosterComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__power_booster_component$46template.ViewPowerBoosterComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_PowerBoosterComponent_0_5] = new src__power_booster_component.PowerBoosterComponent.new();
      this[_compView_0].create(this[_PowerBoosterComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfPowerBoosterComponent()).new(0, this, this.rootEl, this[_PowerBoosterComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__power_booster_component$46template._ViewPowerBoosterComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_PowerBoosterComponent_0_5] = null;
    src__power_booster_component$46template._ViewPowerBoosterComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__power_booster_component$46template._ViewPowerBoosterComponentHost0.prototype;
  dart.addTypeTests(src__power_booster_component$46template._ViewPowerBoosterComponentHost0);
  dart.setMethodSignature(src__power_booster_component$46template._ViewPowerBoosterComponentHost0, () => ({
    __proto__: dart.getMethods(src__power_booster_component$46template._ViewPowerBoosterComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__power_booster_component$46template._ViewPowerBoosterComponentHost0, () => ({
    __proto__: dart.getFields(src__power_booster_component$46template._ViewPowerBoosterComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__power_booster_component$46template.ViewPowerBoosterComponent0),
    [_PowerBoosterComponent_0_5]: dart.fieldType(src__power_booster_component.PowerBoosterComponent)
  }));
  src__power_booster_component$46template.viewFactory_PowerBoosterComponentHost0 = function(parentView, parentIndex) {
    return new src__power_booster_component$46template._ViewPowerBoosterComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__power_booster_component$46template.viewFactory_PowerBoosterComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__power_booster_component$46template, {
    /*src__power_booster_component$46template.PowerBoosterComponentNgFactory*/get PowerBoosterComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfPowerBoosterComponent()).new('power-booster', src__power_booster_component$46template.viewFactory_PowerBoosterComponentHost0, src__power_booster_component$46template._PowerBoosterComponentMetadata));
    },
    /*src__power_booster_component$46template._PowerBoosterComponentMetadata*/get _PowerBoosterComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__power_booster_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__power_booster_component$46template.initReflector = function() {
    if (dart.test(src__power_booster_component$46template._visited)) {
      return;
    }
    src__power_booster_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__power_booster_component.PowerBoosterComponent), src__power_booster_component$46template.PowerBoosterComponentNgFactory);
    src__exponential_strength_pipe$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__power_booster_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/pipe_examples/src/power_booster_component.template.ddc", {
    "package:pipe_examples/src/power_booster_component.template.dart": src__power_booster_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["power_booster_component.template.dart"],"names":[],"mappings":";;;;QA0Cc,IAAO;;;;;;QAPD,iCAAO;;;;;;;;;;;;;;;;;;;;;;MAZP,oEAA4B;YAAG;;;;;;;;;;;;AAiB/C,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,MAAM,gBAAgB;AACnD,UAAa,UAFH,AAEa,AAAI,IAFV,SAEsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,KAAK,gBAAgB;AAClD,UAAa,UALH,AAKa,AAAI,IALV,SAKsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,mBAAO,GAPG,AAOA,AAAI,IAPG,SAOS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,uCAA2B,GAAG,IAAI,0DAA+B;AACjE,yCAA6B,GAjBb,AAiBgB,AAAQ,iCAjBjB,WAiB2B,yCAAC,iCAA2B;AAC9E,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAAM,YAxBU,AAwBE,AAAQ,iCAxBH,aAwBe,CAAC,mCAA6B,CAAC,GAAG;AACxE,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;qFA/B2B,UAA2B,EAAE,WAAe;IAPvD,WAAK;IACL,WAAK;IACR,aAAO;IAChB,aAAO;IACqB,iCAA2B;IACpC,mCAA6B;AAEuB,gGAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC3K,eAAM,GAAG,AAQC,IAAO,oBARR,AAAQ,AAQP,IAAO,SARQ,gBAAc,CAAC;AACxC,0FAAW;gBAAX,8EAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,KAAK,EAAE,oEAA4B;AAC9G,2BAAkB,CAAC,8EAAW;EAChC;;;;;;;;;4BAKY,IAAO;4BAAP,IAAO;8BAAP,IAAO;;;;;;MAVQ,8EAAW;;;;;wFAmCkC,UAA2B,EAAE,WAAe;AACpH,UAAO,KAAI,sEAA0B,CAAC,UAAU,EAAE,WAAW;EAC/D;;;MAEoB,wEAAgC;YAAG;;;;;;;AAQnD,uBAAW,GAAG,IAAI,sEAA0B,CAAC,MAAM;AACnD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,sCAA0B,GAAG,IAAI,sDAA6B;AAC9D,uBAAW,OAAO,CAAC,gCAA0B,EAAE,qBAAgB;AAC/D,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,2CAA2C,CAAC,GAAG,MAAM,WAAM,EAAE,gCAA0B;IACpG;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;0FAnBgC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,gCAA0B;AACwB,qGAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;4FAsBjI,UAA2B,EAAE,WAAe;AACzF,UAAO,KAAI,2EAA+B,CAAC,UAAU,EAAE,WAAW;EACpE;;;MAEsD,sEAA8B;YAAG,gBAAM,+CAA+C,CAAC,iBAAiB,8EAAsC,EAAE,sEAA8B;;MAC9N,sEAA8B;YAAG;;MACnC,gDAAQ;YAAG;;;;;AAEb,kBAAI,gDAAQ,GAAE;AACZ;;AAEF,uDAAW;AAEX,IAAO,oCAAiB,CAAC,iEAAqB,EAAE,sEAA8B;AAC9E,IAAM,uDAAa;AACnB,IAAM,gCAAa;EACrB","file":"power_booster_component.template.ddc.js"}');
  // Exports:
  return {
    src__power_booster_component$46template: src__power_booster_component$46template
  };
});

//# sourceMappingURL=power_booster_component.template.ddc.js.map
