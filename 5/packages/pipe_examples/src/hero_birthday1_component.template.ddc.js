define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/pipes/date_pipe', 'packages/pipe_examples/src/hero_birthday1_component', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, date_pipe, hero_birthday1_component, reflector, angular) {
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
  const src__common__pipes__date_pipe = date_pipe.src__common__pipes__date_pipe;
  const src__hero_birthday1_component = hero_birthday1_component.src__hero_birthday1_component;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__hero_birthday1_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let AppViewOfHeroBirthdayComponent = () => (AppViewOfHeroBirthdayComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_birthday1_component.HeroBirthdayComponent)))();
  let AppViewAndintToAppViewOfHeroBirthdayComponent = () => (AppViewAndintToAppViewOfHeroBirthdayComponent = dart.constFn(dart.fnType(AppViewOfHeroBirthdayComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHeroBirthdayComponent = () => (ComponentRefOfHeroBirthdayComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_birthday1_component.HeroBirthdayComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroBirthdayComponent = () => (ComponentFactoryOfHeroBirthdayComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_birthday1_component.HeroBirthdayComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_birthday1_component$46template, {
    /*src__hero_birthday1_component$46template.styles$HeroBirthdayComponent*/get styles$HeroBirthdayComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_2 = Symbol('_text_2');
  const _expr_0 = Symbol('_expr_0');
  const _pipe_date_0 = Symbol('_pipe_date_0');
  const _pipe_date_0_0 = Symbol('_pipe_date_0_0');
  let const$;
  src__hero_birthday1_component$46template.ViewHeroBirthdayComponent0 = class ViewHeroBirthdayComponent0 extends src__core__linker__app_view.AppView$(src__hero_birthday1_component.HeroBirthdayComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      let _text_1 = html.Text.new('The hero\'s birthday is ');
      this[_el_0][$append](_text_1);
      this[_text_2] = html.Text.new('');
      this[_el_0][$append](this[_text_2]);
      this[_pipe_date_0] = new src__common__pipes__date_pipe.DatePipe.new();
      this[_pipe_date_0_0] = src__core__linker__app_view_utils.pureProxy1(core.String, dart.dynamic, dart.bind(this[_pipe_date_0], 'transform'));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(dart.dcall(this[_pipe_date_0_0], _ctx.birthday));
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__hero_birthday1_component$46template.ViewHeroBirthdayComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    this[_pipe_date_0] = null;
    this[_pipe_date_0_0] = null;
    src__hero_birthday1_component$46template.ViewHeroBirthdayComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('hero-birthday'));
    let t = src__hero_birthday1_component$46template.ViewHeroBirthdayComponent0._renderType;
    t == null ? src__hero_birthday1_component$46template.ViewHeroBirthdayComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__hero_birthday1_component$46template.styles$HeroBirthdayComponent) : t;
    this.setupComponentType(src__hero_birthday1_component$46template.ViewHeroBirthdayComponent0._renderType);
  }).prototype = src__hero_birthday1_component$46template.ViewHeroBirthdayComponent0.prototype;
  dart.addTypeTests(src__hero_birthday1_component$46template.ViewHeroBirthdayComponent0);
  dart.setMethodSignature(src__hero_birthday1_component$46template.ViewHeroBirthdayComponent0, () => ({
    __proto__: dart.getMethods(src__hero_birthday1_component$46template.ViewHeroBirthdayComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_birthday1_component.HeroBirthdayComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_birthday1_component$46template.ViewHeroBirthdayComponent0, () => ({
    __proto__: dart.getFields(src__hero_birthday1_component$46template.ViewHeroBirthdayComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_pipe_date_0]: dart.fieldType(src__common__pipes__date_pipe.DatePipe),
    [_pipe_date_0_0]: dart.fieldType(dynamicToString())
  }));
  dart.defineLazy(src__hero_birthday1_component$46template.ViewHeroBirthdayComponent0, {
    /*src__hero_birthday1_component$46template.ViewHeroBirthdayComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_birthday1_component$46template.viewFactory_HeroBirthdayComponent0 = function(parentView, parentIndex) {
    return new src__hero_birthday1_component$46template.ViewHeroBirthdayComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_birthday1_component$46template.viewFactory_HeroBirthdayComponent0, AppViewAndintToAppViewOfHeroBirthdayComponent());
  dart.defineLazy(src__hero_birthday1_component$46template, {
    /*src__hero_birthday1_component$46template.styles$HeroBirthdayComponentHost*/get styles$HeroBirthdayComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HeroBirthdayComponent_0_5 = Symbol('_HeroBirthdayComponent_0_5');
  src__hero_birthday1_component$46template._ViewHeroBirthdayComponentHost0 = class _ViewHeroBirthdayComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_birthday1_component$46template.ViewHeroBirthdayComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroBirthdayComponent_0_5] = new src__hero_birthday1_component.HeroBirthdayComponent.new();
      this[_compView_0].create(this[_HeroBirthdayComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroBirthdayComponent()).new(0, this, this.rootEl, this[_HeroBirthdayComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_birthday1_component$46template._ViewHeroBirthdayComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroBirthdayComponent_0_5] = null;
    src__hero_birthday1_component$46template._ViewHeroBirthdayComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_birthday1_component$46template._ViewHeroBirthdayComponentHost0.prototype;
  dart.addTypeTests(src__hero_birthday1_component$46template._ViewHeroBirthdayComponentHost0);
  dart.setMethodSignature(src__hero_birthday1_component$46template._ViewHeroBirthdayComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_birthday1_component$46template._ViewHeroBirthdayComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_birthday1_component$46template._ViewHeroBirthdayComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_birthday1_component$46template._ViewHeroBirthdayComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_birthday1_component$46template.ViewHeroBirthdayComponent0),
    [_HeroBirthdayComponent_0_5]: dart.fieldType(src__hero_birthday1_component.HeroBirthdayComponent)
  }));
  src__hero_birthday1_component$46template.viewFactory_HeroBirthdayComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_birthday1_component$46template._ViewHeroBirthdayComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_birthday1_component$46template.viewFactory_HeroBirthdayComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_birthday1_component$46template, {
    /*src__hero_birthday1_component$46template.HeroBirthdayComponentNgFactory*/get HeroBirthdayComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroBirthdayComponent()).new('hero-birthday', src__hero_birthday1_component$46template.viewFactory_HeroBirthdayComponentHost0, src__hero_birthday1_component$46template._HeroBirthdayComponentMetadata));
    },
    /*src__hero_birthday1_component$46template._HeroBirthdayComponentMetadata*/get _HeroBirthdayComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_birthday1_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_birthday1_component$46template.initReflector = function() {
    if (dart.test(src__hero_birthday1_component$46template._visited)) {
      return;
    }
    src__hero_birthday1_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero_birthday1_component.HeroBirthdayComponent), src__hero_birthday1_component$46template.HeroBirthdayComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.fn(src__hero_birthday1_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/pipe_examples/src/hero_birthday1_component.template.ddc", {
    "package:pipe_examples/src/hero_birthday1_component.template.dart": src__hero_birthday1_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_birthday1_component.template.dart"],"names":[],"mappings":";;;;QAuCc,IAAO;;;;;;QAPD,iCAAO;;;;;;;;;;;;;;;;;;;;;MAXP,qEAA4B;YAAG;;;;;;;;;;;AAgB/C,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,KAAK,gBAAgB;AAClD,UAAa,UAFH,AAEa,AAAI,IAFV,SAEsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,mBAAO,GAJG,AAIA,AAAI,IAJG,SAIS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,wBAAY,GAAG,IAAI,0CAAgB;AACnC,0BAAc,GAdE,AAcC,AAAQ,iCAdF,WAcY,sCAAC,kBAAY;AAChD,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAAoC,OAAO,QAAG;AAC9C,UAAM,YAtBU,AAsBE,AAAQ,iCAtBH,aAsBe,YAAC,oBAAc,EAAC,IAAI,SAAS;AACnE,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;sFA7B2B,UAA2B,EAAE,WAAe;IANvD,WAAK;IACR,aAAO;IAChB,aAAO;IACM,kBAAY;IACJ,oBAAc;AAEoC,iGAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC3K,eAAM,GAAG,AAQC,IAAO,oBARR,AAAQ,AAQP,IAAO,SARQ,gBAAc,CAAC;AACxC,2FAAW;gBAAX,+EAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,KAAK,EAAE,qEAA4B;AAC9G,2BAAkB,CAAC,+EAAW;EAChC;;;;;;;;;4BAKY,IAAO;8BAAP,IAAO;;;;;;MAVQ,+EAAW;;;;;yFAiCkC,UAA2B,EAAE,WAAe;AACpH,UAAO,KAAI,uEAA0B,CAAC,UAAU,EAAE,WAAW;EAC/D;;;MAEoB,yEAAgC;YAAG;;;;;;;AAQnD,uBAAW,GAAG,IAAI,uEAA0B,CAAC,MAAM;AACnD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,sCAA0B,GAAG,IAAI,uDAA6B;AAC9D,uBAAW,OAAO,CAAC,gCAA0B,EAAE,qBAAgB;AAC/D,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,2CAA2C,CAAC,GAAG,MAAM,WAAM,EAAE,gCAA0B;IACpG;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;2FAnBgC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,gCAA0B;AACwB,sGAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;6FAsBjI,UAA2B,EAAE,WAAe;AACzF,UAAO,KAAI,4EAA+B,CAAC,UAAU,EAAE,WAAW;EACpE;;;MAEsD,uEAA8B;YAAG,gBAAM,+CAA+C,CAAC,iBAAiB,+EAAsC,EAAE,uEAA8B;;MAC9N,uEAA8B;YAAG;;MACnC,iDAAQ;YAAG;;;;;AAEb,kBAAI,iDAAQ,GAAE;AACZ;;AAEF,wDAAW;AAEX,IAAO,oCAAiB,CAAC,kEAAqB,EAAE,uEAA8B;AAC9E,IAAM,gCAAa;EACrB","file":"hero_birthday1_component.template.ddc.js"}');
  // Exports:
  return {
    src__hero_birthday1_component$46template: src__hero_birthday1_component$46template
  };
});

//# sourceMappingURL=hero_birthday1_component.template.ddc.js.map
