define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/pipes/date_pipe', 'packages/pipe_examples/src/hero_birthday2_component', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, date_pipe, hero_birthday2_component, reflector, angular) {
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
  const src__hero_birthday2_component = hero_birthday2_component.src__hero_birthday2_component;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__hero_birthday2_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicAndStringToString = () => (dynamicAndStringToString = dart.constFn(dart.fnType(core.String, [dart.dynamic, core.String])))();
  let AppViewOfHeroBirthday2Component = () => (AppViewOfHeroBirthday2Component = dart.constFn(src__core__linker__app_view.AppView$(src__hero_birthday2_component.HeroBirthday2Component)))();
  let AppViewAndintToAppViewOfHeroBirthday2Component = () => (AppViewAndintToAppViewOfHeroBirthday2Component = dart.constFn(dart.fnType(AppViewOfHeroBirthday2Component(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHeroBirthday2Component = () => (ComponentRefOfHeroBirthday2Component = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_birthday2_component.HeroBirthday2Component)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroBirthday2Component = () => (ComponentFactoryOfHeroBirthday2Component = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_birthday2_component.HeroBirthday2Component)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_birthday2_component$46template, {
    /*src__hero_birthday2_component$46template.styles$HeroBirthday2Component*/get styles$HeroBirthday2Component() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_2 = Symbol('_text_2');
  const _el_3 = Symbol('_el_3');
  const _expr_0 = Symbol('_expr_0');
  const _pipe_date_0 = Symbol('_pipe_date_0');
  const _pipe_date_0_0 = Symbol('_pipe_date_0_0');
  let const$;
  src__hero_birthday2_component$46template.ViewHeroBirthday2Component0 = class ViewHeroBirthday2Component0 extends src__core__linker__app_view.AppView$(src__hero_birthday2_component.HeroBirthday2Component) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      let _text_1 = html.Text.new('The hero\'s birthday is ');
      this[_el_0][$append](_text_1);
      this[_text_2] = html.Text.new('');
      this[_el_0][$append](this[_text_2]);
      this[_el_3] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', parentRenderNode));
      let _text_4 = html.Text.new('Toggle Format');
      this[_el_3][$append](_text_4);
      this[_el_3][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'toggleFormat')));
      this[_pipe_date_0] = new src__common__pipes__date_pipe.DatePipe.new();
      this[_pipe_date_0_0] = src__core__linker__app_view_utils.pureProxy2(core.String, dart.dynamic, core.String, dart.bind(this[_pipe_date_0], 'transform'));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(dart.dcall(this[_pipe_date_0_0], _ctx.birthday, _ctx.format));
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__hero_birthday2_component$46template.ViewHeroBirthday2Component0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_2] = null;
    this[_el_3] = null;
    this[_expr_0] = null;
    this[_pipe_date_0] = null;
    this[_pipe_date_0_0] = null;
    src__hero_birthday2_component$46template.ViewHeroBirthday2Component0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('hero-birthday2'));
    let t = src__hero_birthday2_component$46template.ViewHeroBirthday2Component0._renderType;
    t == null ? src__hero_birthday2_component$46template.ViewHeroBirthday2Component0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__hero_birthday2_component$46template.styles$HeroBirthday2Component) : t;
    this.setupComponentType(src__hero_birthday2_component$46template.ViewHeroBirthday2Component0._renderType);
  }).prototype = src__hero_birthday2_component$46template.ViewHeroBirthday2Component0.prototype;
  dart.addTypeTests(src__hero_birthday2_component$46template.ViewHeroBirthday2Component0);
  dart.setMethodSignature(src__hero_birthday2_component$46template.ViewHeroBirthday2Component0, () => ({
    __proto__: dart.getMethods(src__hero_birthday2_component$46template.ViewHeroBirthday2Component0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_birthday2_component.HeroBirthday2Component), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_birthday2_component$46template.ViewHeroBirthday2Component0, () => ({
    __proto__: dart.getFields(src__hero_birthday2_component$46template.ViewHeroBirthday2Component0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_el_3]: dart.fieldType(html.ButtonElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_pipe_date_0]: dart.fieldType(src__common__pipes__date_pipe.DatePipe),
    [_pipe_date_0_0]: dart.fieldType(dynamicAndStringToString())
  }));
  dart.defineLazy(src__hero_birthday2_component$46template.ViewHeroBirthday2Component0, {
    /*src__hero_birthday2_component$46template.ViewHeroBirthday2Component0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_birthday2_component$46template.viewFactory_HeroBirthday2Component0 = function(parentView, parentIndex) {
    return new src__hero_birthday2_component$46template.ViewHeroBirthday2Component0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_birthday2_component$46template.viewFactory_HeroBirthday2Component0, AppViewAndintToAppViewOfHeroBirthday2Component());
  dart.defineLazy(src__hero_birthday2_component$46template, {
    /*src__hero_birthday2_component$46template.styles$HeroBirthday2ComponentHost*/get styles$HeroBirthday2ComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HeroBirthday2Component_0_5 = Symbol('_HeroBirthday2Component_0_5');
  src__hero_birthday2_component$46template._ViewHeroBirthday2ComponentHost0 = class _ViewHeroBirthday2ComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_birthday2_component$46template.ViewHeroBirthday2Component0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroBirthday2Component_0_5] = new src__hero_birthday2_component.HeroBirthday2Component.new();
      this[_compView_0].create(this[_HeroBirthday2Component_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroBirthday2Component()).new(0, this, this.rootEl, this[_HeroBirthday2Component_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_birthday2_component$46template._ViewHeroBirthday2ComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroBirthday2Component_0_5] = null;
    src__hero_birthday2_component$46template._ViewHeroBirthday2ComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_birthday2_component$46template._ViewHeroBirthday2ComponentHost0.prototype;
  dart.addTypeTests(src__hero_birthday2_component$46template._ViewHeroBirthday2ComponentHost0);
  dart.setMethodSignature(src__hero_birthday2_component$46template._ViewHeroBirthday2ComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_birthday2_component$46template._ViewHeroBirthday2ComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_birthday2_component$46template._ViewHeroBirthday2ComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_birthday2_component$46template._ViewHeroBirthday2ComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_birthday2_component$46template.ViewHeroBirthday2Component0),
    [_HeroBirthday2Component_0_5]: dart.fieldType(src__hero_birthday2_component.HeroBirthday2Component)
  }));
  src__hero_birthday2_component$46template.viewFactory_HeroBirthday2ComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_birthday2_component$46template._ViewHeroBirthday2ComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_birthday2_component$46template.viewFactory_HeroBirthday2ComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_birthday2_component$46template, {
    /*src__hero_birthday2_component$46template.HeroBirthday2ComponentNgFactory*/get HeroBirthday2ComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroBirthday2Component()).new('hero-birthday2', src__hero_birthday2_component$46template.viewFactory_HeroBirthday2ComponentHost0, src__hero_birthday2_component$46template._HeroBirthday2ComponentMetadata));
    },
    /*src__hero_birthday2_component$46template._HeroBirthday2ComponentMetadata*/get _HeroBirthday2ComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_birthday2_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_birthday2_component$46template.initReflector = function() {
    if (dart.test(src__hero_birthday2_component$46template._visited)) {
      return;
    }
    src__hero_birthday2_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero_birthday2_component.HeroBirthday2Component), src__hero_birthday2_component$46template.HeroBirthday2ComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.fn(src__hero_birthday2_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/pipe_examples/src/hero_birthday2_component.template.ddc", {
    "package:pipe_examples/src/hero_birthday2_component.template.dart": src__hero_birthday2_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_birthday2_component.template.dart"],"names":[],"mappings":"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","file":"hero_birthday2_component.template.ddc.js"}');
  // Exports:
  return {
    src__hero_birthday2_component$46template: src__hero_birthday2_component$46template
  };
});

//# sourceMappingURL=hero_birthday2_component.template.ddc.js.map
