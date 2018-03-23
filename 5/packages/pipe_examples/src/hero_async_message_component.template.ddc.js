define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/pipes/async_pipe', 'packages/pipe_examples/src/hero_async_message_component', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, async_pipe, hero_async_message_component, reflector, angular) {
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
  const src__common__pipes__async_pipe = async_pipe.src__common__pipes__async_pipe;
  const src__hero_async_message_component = hero_async_message_component.src__hero_async_message_component;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__hero_async_message_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHeroAsyncMessageComponent = () => (AppViewOfHeroAsyncMessageComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_async_message_component.HeroAsyncMessageComponent)))();
  let AppViewAndintToAppViewOfHeroAsyncMessageComponent = () => (AppViewAndintToAppViewOfHeroAsyncMessageComponent = dart.constFn(dart.fnType(AppViewOfHeroAsyncMessageComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHeroAsyncMessageComponent = () => (ComponentRefOfHeroAsyncMessageComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_async_message_component.HeroAsyncMessageComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroAsyncMessageComponent = () => (ComponentFactoryOfHeroAsyncMessageComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_async_message_component.HeroAsyncMessageComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_async_message_component$46template, {
    /*src__hero_async_message_component$46template.styles$HeroAsyncMessageComponent*/get styles$HeroAsyncMessageComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _text_4 = Symbol('_text_4');
  const _el_5 = Symbol('_el_5');
  const _expr_0 = Symbol('_expr_0');
  const _pipe_async_0 = Symbol('_pipe_async_0');
  let const$;
  src__hero_async_message_component$46template.ViewHeroAsyncMessageComponent0 = class ViewHeroAsyncMessageComponent0 extends src__core__linker__app_view.AppView$(src__hero_async_message_component.HeroAsyncMessageComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      let _text_1 = html.Text.new('Async Hero Message and AsyncPipe');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      let _text_3 = html.Text.new('Message: ');
      this[_el_2][$append](_text_3);
      this[_text_4] = html.Text.new('');
      this[_el_2][$append](this[_text_4]);
      this[_el_5] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', parentRenderNode));
      let _text_6 = html.Text.new('Resend');
      this[_el_5][$append](_text_6);
      this[_el_5][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'resend')));
      this[_pipe_async_0] = new src__common__pipes__async_pipe.AsyncPipe.new(this.ref);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(this[_pipe_async_0].transform(_ctx.message));
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_4][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    destroyInternal() {
      this[_pipe_async_0].ngOnDestroy();
    }
  };
  (src__hero_async_message_component$46template.ViewHeroAsyncMessageComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_text_4] = null;
    this[_el_5] = null;
    this[_expr_0] = null;
    this[_pipe_async_0] = null;
    src__hero_async_message_component$46template.ViewHeroAsyncMessageComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('hero-message'));
    let t = src__hero_async_message_component$46template.ViewHeroAsyncMessageComponent0._renderType;
    t == null ? src__hero_async_message_component$46template.ViewHeroAsyncMessageComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__hero_async_message_component$46template.styles$HeroAsyncMessageComponent) : t;
    this.setupComponentType(src__hero_async_message_component$46template.ViewHeroAsyncMessageComponent0._renderType);
  }).prototype = src__hero_async_message_component$46template.ViewHeroAsyncMessageComponent0.prototype;
  dart.addTypeTests(src__hero_async_message_component$46template.ViewHeroAsyncMessageComponent0);
  dart.setMethodSignature(src__hero_async_message_component$46template.ViewHeroAsyncMessageComponent0, () => ({
    __proto__: dart.getMethods(src__hero_async_message_component$46template.ViewHeroAsyncMessageComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_async_message_component.HeroAsyncMessageComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_async_message_component$46template.ViewHeroAsyncMessageComponent0, () => ({
    __proto__: dart.getFields(src__hero_async_message_component$46template.ViewHeroAsyncMessageComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_text_4]: dart.fieldType(html.Text),
    [_el_5]: dart.fieldType(html.ButtonElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_pipe_async_0]: dart.fieldType(src__common__pipes__async_pipe.AsyncPipe)
  }));
  dart.defineLazy(src__hero_async_message_component$46template.ViewHeroAsyncMessageComponent0, {
    /*src__hero_async_message_component$46template.ViewHeroAsyncMessageComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_async_message_component$46template.viewFactory_HeroAsyncMessageComponent0 = function(parentView, parentIndex) {
    return new src__hero_async_message_component$46template.ViewHeroAsyncMessageComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_async_message_component$46template.viewFactory_HeroAsyncMessageComponent0, AppViewAndintToAppViewOfHeroAsyncMessageComponent());
  dart.defineLazy(src__hero_async_message_component$46template, {
    /*src__hero_async_message_component$46template.styles$HeroAsyncMessageComponentHost*/get styles$HeroAsyncMessageComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HeroAsyncMessageComponent_0_5 = Symbol('_HeroAsyncMessageComponent_0_5');
  src__hero_async_message_component$46template._ViewHeroAsyncMessageComponentHost0 = class _ViewHeroAsyncMessageComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_async_message_component$46template.ViewHeroAsyncMessageComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroAsyncMessageComponent_0_5] = new src__hero_async_message_component.HeroAsyncMessageComponent.new();
      this[_compView_0].create(this[_HeroAsyncMessageComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroAsyncMessageComponent()).new(0, this, this.rootEl, this[_HeroAsyncMessageComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_async_message_component$46template._ViewHeroAsyncMessageComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroAsyncMessageComponent_0_5] = null;
    src__hero_async_message_component$46template._ViewHeroAsyncMessageComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_async_message_component$46template._ViewHeroAsyncMessageComponentHost0.prototype;
  dart.addTypeTests(src__hero_async_message_component$46template._ViewHeroAsyncMessageComponentHost0);
  dart.setMethodSignature(src__hero_async_message_component$46template._ViewHeroAsyncMessageComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_async_message_component$46template._ViewHeroAsyncMessageComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_async_message_component$46template._ViewHeroAsyncMessageComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_async_message_component$46template._ViewHeroAsyncMessageComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_async_message_component$46template.ViewHeroAsyncMessageComponent0),
    [_HeroAsyncMessageComponent_0_5]: dart.fieldType(src__hero_async_message_component.HeroAsyncMessageComponent)
  }));
  src__hero_async_message_component$46template.viewFactory_HeroAsyncMessageComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_async_message_component$46template._ViewHeroAsyncMessageComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_async_message_component$46template.viewFactory_HeroAsyncMessageComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_async_message_component$46template, {
    /*src__hero_async_message_component$46template.HeroAsyncMessageComponentNgFactory*/get HeroAsyncMessageComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroAsyncMessageComponent()).new('hero-message', src__hero_async_message_component$46template.viewFactory_HeroAsyncMessageComponentHost0, src__hero_async_message_component$46template._HeroAsyncMessageComponentMetadata));
    },
    /*src__hero_async_message_component$46template._HeroAsyncMessageComponentMetadata*/get _HeroAsyncMessageComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_async_message_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_async_message_component$46template.initReflector = function() {
    if (dart.test(src__hero_async_message_component$46template._visited)) {
      return;
    }
    src__hero_async_message_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero_async_message_component.HeroAsyncMessageComponent), src__hero_async_message_component$46template.HeroAsyncMessageComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.fn(src__hero_async_message_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/pipe_examples/src/hero_async_message_component.template.ddc", {
    "package:pipe_examples/src/hero_async_message_component.template.dart": src__hero_async_message_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_async_message_component.template.dart"],"names":[],"mappings":"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","file":"hero_async_message_component.template.ddc.js"}');
  // Exports:
  return {
    src__hero_async_message_component$46template: src__hero_async_message_component$46template
  };
});

//# sourceMappingURL=hero_async_message_component.template.ddc.js.map
