define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/pipe_examples/src/fetch_json_pipe', 'packages/angular/src/common/pipes/json_pipe', 'packages/pipe_examples/src/hero_list_component', 'packages/angular/src/di/reflector', 'packages/pipe_examples/src/fetch_json_pipe.template', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, ng_for, fetch_json_pipe, json_pipe, hero_list_component, reflector, fetch_json_pipe$, angular) {
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
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__fetch_json_pipe = fetch_json_pipe.src__fetch_json_pipe;
  const src__common__pipes__json_pipe = json_pipe.src__common__pipes__json_pipe;
  const src__hero_list_component = hero_list_component.src__hero_list_component;
  const src__di__reflector = reflector.src__di__reflector;
  const src__fetch_json_pipe$46template = fetch_json_pipe$.src__fetch_json_pipe$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__hero_list_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $text = dartx.text;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHeroListComponent = () => (AppViewOfHeroListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent)))();
  let AppViewAndintToAppViewOfHeroListComponent = () => (AppViewAndintToAppViewOfHeroListComponent = dart.constFn(dart.fnType(AppViewOfHeroListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHeroListComponent = () => (ComponentRefOfHeroListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroListComponent = () => (ComponentFactoryOfHeroListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_list_component.HeroListComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_list_component$46template, {
    /*src__hero_list_component$46template.styles$HeroListComponent*/get styles$HeroListComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgFor_2_9 = Symbol('_NgFor_2_9');
  const _el_3 = Symbol('_el_3');
  const _text_5 = Symbol('_text_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _pipe_fetch_0 = Symbol('_pipe_fetch_0');
  const _pipe_fetch_1 = Symbol('_pipe_fetch_1');
  const _pipe_json_2 = Symbol('_pipe_json_2');
  let const$;
  src__hero_list_component$46template.ViewHeroListComponent0 = class ViewHeroListComponent0 extends src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      let _text_1 = html.Text.new('Heroes from JSON File');
      this[_el_0][$append](_text_1);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], src__hero_list_component$46template.viewFactory_HeroListComponent1);
      this[_NgFor_2_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      let _text_4 = html.Text.new('Heroes as JSON: ');
      this[_el_3][$append](_text_4);
      this[_text_5] = html.Text.new('');
      this[_el_3][$append](this[_text_5]);
      this[_pipe_fetch_0] = new src__fetch_json_pipe.FetchJsonPipe.new();
      this[_pipe_fetch_1] = new src__fetch_json_pipe.FetchJsonPipe.new();
      this[_pipe_json_2] = new src__common__pipes__json_pipe.JsonPipe.new();
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let currVal_0 = this[_pipe_fetch_0].transform('heroes.json');
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_2_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_2_9].ngDoCheck();
      this[_appEl_2].detectChangesInNestedViews();
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(this[_pipe_json_2].transform(this[_pipe_fetch_1].transform('heroes.json')));
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_5][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__hero_list_component$46template.ViewHeroListComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_2] = null;
    this[_NgFor_2_9] = null;
    this[_el_3] = null;
    this[_text_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_pipe_fetch_0] = null;
    this[_pipe_fetch_1] = null;
    this[_pipe_json_2] = null;
    src__hero_list_component$46template.ViewHeroListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('hero-list'));
    let t = src__hero_list_component$46template.ViewHeroListComponent0._renderType;
    t == null ? src__hero_list_component$46template.ViewHeroListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__hero_list_component$46template.styles$HeroListComponent) : t;
    this.setupComponentType(src__hero_list_component$46template.ViewHeroListComponent0._renderType);
  }).prototype = src__hero_list_component$46template.ViewHeroListComponent0.prototype;
  dart.addTypeTests(src__hero_list_component$46template.ViewHeroListComponent0);
  dart.setMethodSignature(src__hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template.ViewHeroListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template.ViewHeroListComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_2_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_3]: dart.fieldType(html.Element),
    [_text_5]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_pipe_fetch_0]: dart.fieldType(src__fetch_json_pipe.FetchJsonPipe),
    [_pipe_fetch_1]: dart.fieldType(src__fetch_json_pipe.FetchJsonPipe),
    [_pipe_json_2]: dart.fieldType(src__common__pipes__json_pipe.JsonPipe)
  }));
  dart.defineLazy(src__hero_list_component$46template.ViewHeroListComponent0, {
    /*src__hero_list_component$46template.ViewHeroListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_list_component$46template.viewFactory_HeroListComponent0 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template.ViewHeroListComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_list_component$46template.viewFactory_HeroListComponent0, AppViewAndintToAppViewOfHeroListComponent());
  const _text_1 = Symbol('_text_1');
  src__hero_list_component$46template._ViewHeroListComponent1 = class _ViewHeroListComponent1 extends src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_hero = this.locals[$_get]('$implicit');
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(dart.dindex(local_hero, 'name'));
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__hero_list_component$46template._ViewHeroListComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__hero_list_component$46template._ViewHeroListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__hero_list_component$46template.ViewHeroListComponent0._renderType;
  }).prototype = src__hero_list_component$46template._ViewHeroListComponent1.prototype;
  dart.addTypeTests(src__hero_list_component$46template._ViewHeroListComponent1);
  dart.setMethodSignature(src__hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template._ViewHeroListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template._ViewHeroListComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__hero_list_component$46template.viewFactory_HeroListComponent1 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template._ViewHeroListComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__hero_list_component$46template.viewFactory_HeroListComponent1, AppViewAndintToAppViewOfHeroListComponent());
  dart.defineLazy(src__hero_list_component$46template, {
    /*src__hero_list_component$46template.styles$HeroListComponentHost*/get styles$HeroListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HeroListComponent_0_5 = Symbol('_HeroListComponent_0_5');
  src__hero_list_component$46template._ViewHeroListComponentHost0 = class _ViewHeroListComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_list_component$46template.ViewHeroListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroListComponent_0_5] = new src__hero_list_component.HeroListComponent.new();
      this[_compView_0].create(this[_HeroListComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroListComponent()).new(0, this, this.rootEl, this[_HeroListComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_list_component$46template._ViewHeroListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroListComponent_0_5] = null;
    src__hero_list_component$46template._ViewHeroListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_list_component$46template._ViewHeroListComponentHost0.prototype;
  dart.addTypeTests(src__hero_list_component$46template._ViewHeroListComponentHost0);
  dart.setMethodSignature(src__hero_list_component$46template._ViewHeroListComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template._ViewHeroListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_list_component$46template._ViewHeroListComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template._ViewHeroListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_list_component$46template.ViewHeroListComponent0),
    [_HeroListComponent_0_5]: dart.fieldType(src__hero_list_component.HeroListComponent)
  }));
  src__hero_list_component$46template.viewFactory_HeroListComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template._ViewHeroListComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_list_component$46template.viewFactory_HeroListComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_list_component$46template, {
    /*src__hero_list_component$46template.HeroListComponentNgFactory*/get HeroListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroListComponent()).new('hero-list', src__hero_list_component$46template.viewFactory_HeroListComponentHost0, src__hero_list_component$46template._HeroListComponentMetadata));
    },
    /*src__hero_list_component$46template._HeroListComponentMetadata*/get _HeroListComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_list_component$46template.initReflector = function() {
    if (dart.test(src__hero_list_component$46template._visited)) {
      return;
    }
    src__hero_list_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero_list_component.HeroListComponent), src__hero_list_component$46template.HeroListComponentNgFactory);
    src__fetch_json_pipe$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__hero_list_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/pipe_examples/src/hero_list_component.template.ddc", {
    "package:pipe_examples/src/hero_list_component.template.dart": src__hero_list_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_list_component.template.dart"],"names":[],"mappings":";;;;QAyGc,IAAO;;;;;;QA/DD,iCAAQ;;;;;;;;;;;;;;;;;;;;;;;;;;;MAhBR,4DAAwB;YAAG;;;;;;;;;;;;;;;;AAqB3C,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAc,AAwDR,IAAO,SAxDS;AAC1B,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,MAAM,gBAAgB;AACnD,UAAa,UAAU,AAAI,AAsDjB,IAAO,SAtDsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,sBAAgB,SAAO,CAAC,SAAS;AACjC,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACrD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,kEAA8B;AACvF,sBAAU,GAAG,IAAI,yCAAa,CAAC,cAAQ,EAAE,gBAAgB;AACzD,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,KAAK,gBAAgB;AAClD,UAAa,UAAU,AAAI,AA8CjB,IAAO,SA9CsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,mBAAO,GAAG,AAAI,AA4CJ,IAAO,SA5CS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,yBAAa,GAAG,IAAI,sCAAqB;AACzC,yBAAa,GAAG,IAAI,sCAAqB;AACzC,wBAAY,GAAG,IAAI,0CAAgB;AACnC,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAAM,YAAY,mBAAa,UAAU,CAAC;AAC1C,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,wBAAU,QAAQ,GAAG,SAAS;AAC9B,qBAAO,GAAG,SAAS;;AAErB,sBAAU,UAAU;AACpB,oBAAQ,2BAA2B;AACnC,UAAM,YArCU,AAqCE,AAAS,iCArCH,aAqCe,CAAC,kBAAY,UAAU,CAAC,mBAAa,UAAU,CAAC;AACvF,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;AAIE,4BAAQ;;IACV;;6EAjDuB,UAA2B,EAAE,WAAe;IAXnD,WAAK;IACP,cAAQ;IACR,gBAAU;IACR,WAAK;IACR,aAAO;IAChB,aAAO;IACP,aAAO;IACW,mBAAa;IACb,mBAAa;IAClB,kBAAY;AAE0C,wFAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,eAAM,GAAG,AAgEC,IAAO,oBAhER,AAAQ,AAgEP,IAAO,SAhEQ,gBAAc,CAAC;AACxC,kFAAW;gBAAX,sEAAW,GAAK,AAAA,AAAS,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,KAAK,EAAE,4DAAwB;AAC3G,2BAAkB,CAAC,sEAAW;EAChC;;;;;;;;;;4BA6DY,IAAO;;;4BAAP,IAAO;8BAAP,IAAO;;;;;;;;MAlEQ,sEAAW;;;;;gFAqD0B,UAA2B,EAAE,WAAe;AAC5G,UAAO,KAAI,8DAAsB,CAAC,UAAU,EAAE,WAAW;EAC3D;;;;;AAWI,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GADK,AACF,IADS,mBACT,GAAG,gBAAc,CAAC;AAC1B,mBAAO,GAFG,AAEA,AAAI,IAFG,SAES,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAM,aAAa,WAAM,QAAC;AAC1B,UAAM,YA1EU,AA0EE,AAAS,iCA1EH,aA0Ee,aAAC,UAAU,EAAC;AACnD,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;8EArBwB,UAA2B,EAAE,WAAe;IAHjD,WAAK;IACX,aAAO;IAChB,aAAO;AAC6D,yFAAM,qCAAgB,SAAS,EAAE,0CAAC,aAAc,QAAO,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACzL,sBAAa,GAAG,0DAAsB,YAAY;EACpD;;;;;;;;;4BAGY,IAAO;8BAAP,IAAO;;;gFAmB6C,UAA2B,EAAE,WAAe;AAC5G,UAAO,KAAI,+DAAuB,CAAC,UAAU,EAAE,WAAW;EAC5D;;;MAEoB,gEAA4B;YAAG;;;;;;;AAQ/C,uBAAW,GAAG,IAAI,8DAAsB,CAAC,MAAM;AAC/C,iBAAM,GAAG,iBAAW,OAAO;AAC3B,kCAAsB,GAAG,IAAI,8CAAyB;AACtD,uBAAW,OAAO,CAAC,4BAAsB,EAAE,qBAAgB;AAC3D,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,uCAAuC,CAAC,GAAG,MAAM,WAAM,EAAE,4BAAsB;IAC5F;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;kFAnB4B,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,4BAAsB;AAC4B,6FAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;oFAsBjI,UAA2B,EAAE,WAAe;AACrF,UAAO,KAAI,mEAA2B,CAAC,UAAU,EAAE,WAAW;EAChE;;;MAEkD,8DAA0B;YAAG,gBAAM,2CAA2C,CAAC,aAAa,sEAAkC,EAAE,8DAA0B;;MACtM,8DAA0B;YAAG;;MAC/B,4CAAQ;YAAG;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAO,oCAAiB,CAAC,yDAAiB,EAAE,8DAA0B;AACtE,IAAM,6CAAa;AACnB,IAAM,gCAAa;EACrB","file":"hero_list_component.template.ddc.js"}');
  // Exports:
  return {
    src__hero_list_component$46template: src__hero_list_component$46template
  };
});

//# sourceMappingURL=hero_list_component.template.ddc.js.map
