define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_forms/src/directives/checkbox_value_accessor', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular_forms/src/directives/ng_model', 'packages/angular/src/common/directives/ng_for', 'packages/pipe_examples/src/flying_heroes_pipe', 'packages/pipe_examples/src/heroes', 'packages/angular/src/core/di/opaque_token', 'packages/angular_forms/src/directives/control_container', 'packages/pipe_examples/src/flying_heroes_component', 'packages/angular/src/di/reflector', 'packages/pipe_examples/src/flying_heroes_pipe.template', 'packages/pipe_examples/src/heroes.template', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, checkbox_value_accessor, control_value_accessor, ng_model, ng_for, flying_heroes_pipe, heroes, opaque_token, control_container, flying_heroes_component, reflector, flying_heroes_pipe$, heroes$, angular, angular_forms) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
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
  const src__directives__checkbox_value_accessor = checkbox_value_accessor.src__directives__checkbox_value_accessor;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__directives__ng_model = ng_model.src__directives__ng_model;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__flying_heroes_pipe = flying_heroes_pipe.src__flying_heroes_pipe;
  const src__heroes = heroes.src__heroes;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const src__flying_heroes_component = flying_heroes_component.src__flying_heroes_component;
  const src__di__reflector = reflector.src__di__reflector;
  const src__flying_heroes_pipe$46template = flying_heroes_pipe$.src__flying_heroes_pipe$46template;
  const src__heroes$46template = heroes$.src__heroes$46template;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const src__flying_heroes_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfControlValueAccessor = () => (JSArrayOfControlValueAccessor = dart.constFn(_interceptors.JSArray$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__heroes.Hero)))();
  let MultiTokenOfControlValueAccessor = () => (MultiTokenOfControlValueAccessor = dart.constFn(src__core__di__opaque_token.MultiToken$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ListOfControlValueAccessor = () => (ListOfControlValueAccessor = dart.constFn(core.List$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ListOfHeroToListOfHero = () => (ListOfHeroToListOfHero = dart.constFn(dart.fnType(ListOfHero(), [ListOfHero()])))();
  let AppViewOfFlyingHeroesComponent = () => (AppViewOfFlyingHeroesComponent = dart.constFn(src__core__linker__app_view.AppView$(src__flying_heroes_component.FlyingHeroesComponent)))();
  let AppViewAndintToAppViewOfFlyingHeroesComponent = () => (AppViewAndintToAppViewOfFlyingHeroesComponent = dart.constFn(dart.fnType(AppViewOfFlyingHeroesComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfFlyingHeroesComponent = () => (ComponentRefOfFlyingHeroesComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__flying_heroes_component.FlyingHeroesComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfFlyingHeroesComponent = () => (ComponentFactoryOfFlyingHeroesComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__flying_heroes_component.FlyingHeroesComponent)))();
  let AppViewOfFlyingHeroesImpureComponent = () => (AppViewOfFlyingHeroesImpureComponent = dart.constFn(src__core__linker__app_view.AppView$(src__flying_heroes_component.FlyingHeroesImpureComponent)))();
  let AppViewAndintToAppViewOfFlyingHeroesImpureComponent = () => (AppViewAndintToAppViewOfFlyingHeroesImpureComponent = dart.constFn(dart.fnType(AppViewOfFlyingHeroesImpureComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfFlyingHeroesImpureComponent = () => (ComponentRefOfFlyingHeroesImpureComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__flying_heroes_component.FlyingHeroesImpureComponent)))();
  let ComponentFactoryOfFlyingHeroesImpureComponent = () => (ComponentFactoryOfFlyingHeroesImpureComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__flying_heroes_component.FlyingHeroesImpureComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__flying_heroes_component$46template, {
    /*src__flying_heroes_component$46template.styles$FlyingHeroesComponent*/get styles$FlyingHeroesComponent() {
      return dart.constList(['#flyers._ngcontent-%COMP%,#all._ngcontent-%COMP% { font-style:italic; }'], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_1 = Symbol('_text_1');
  const _el_2 = Symbol('_el_2');
  const _el_4 = Symbol('_el_4');
  const _el_5 = Symbol('_el_5');
  const _CheckboxControlValueAccessor_5_5 = Symbol('_CheckboxControlValueAccessor_5_5');
  const _NgValueAccessor_5_6 = Symbol('_NgValueAccessor_5_6');
  const _NgModel_5_7 = Symbol('_NgModel_5_7');
  const _el_7 = Symbol('_el_7');
  const _el_8 = Symbol('_el_8');
  const _CheckboxControlValueAccessor_8_5 = Symbol('_CheckboxControlValueAccessor_8_5');
  const _NgValueAccessor_8_6 = Symbol('_NgValueAccessor_8_6');
  const _NgModel_8_7 = Symbol('_NgModel_8_7');
  const _el_10 = Symbol('_el_10');
  const _el_12 = Symbol('_el_12');
  const _el_14 = Symbol('_el_14');
  const _appEl_15 = Symbol('_appEl_15');
  const _NgFor_15_9 = Symbol('_NgFor_15_9');
  const _el_16 = Symbol('_el_16');
  const _el_18 = Symbol('_el_18');
  const _appEl_19 = Symbol('_appEl_19');
  const _NgFor_19_9 = Symbol('_NgFor_19_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _pipe_flyingHeroes_0 = Symbol('_pipe_flyingHeroes_0');
  const _pipe_flyingHeroes_0_0 = Symbol('_pipe_flyingHeroes_0_0');
  const _handle_keyup_enter_4_0 = Symbol('_handle_keyup_enter_4_0');
  const _handle_change_5_1 = Symbol('_handle_change_5_1');
  const _handle_ngModelChange_5_0 = Symbol('_handle_ngModelChange_5_0');
  const _handle_change_8_1 = Symbol('_handle_change_8_1');
  const _handle_ngModelChange_8_0 = Symbol('_handle_ngModelChange_8_0');
  let const$;
  let const$0;
  let const$1;
  src__flying_heroes_component$46template.ViewFlyingHeroesComponent0 = class ViewFlyingHeroesComponent0 extends src__core__linker__app_view.AppView$(src__flying_heroes_component.FlyingHeroesComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_2]);
      let _text_3 = html.Text.new('New hero:');
      this[_el_2][$append](_text_3);
      this[_el_4] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_2]));
      this.createAttr(this[_el_4], 'placeholder', 'hero name');
      this.createAttr(this[_el_4], 'type', 'text');
      this.addShimC(this[_el_4]);
      this[_el_5] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_2]));
      this.createAttr(this[_el_5], 'id', 'can-fly');
      this.createAttr(this[_el_5], 'type', 'checkbox');
      this.addShimC(this[_el_5]);
      this[_CheckboxControlValueAccessor_5_5] = new src__directives__checkbox_value_accessor.CheckboxControlValueAccessor.new(this[_el_5]);
      this[_NgValueAccessor_5_6] = JSArrayOfControlValueAccessor().of([this[_CheckboxControlValueAccessor_5_5]]);
      this[_NgModel_5_7] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_5_6]);
      let _text_6 = html.Text.new('can fly');
      this[_el_2][$append](_text_6);
      this[_el_7] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_7]);
      this[_el_8] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_7]));
      this.createAttr(this[_el_8], 'id', 'mutate');
      this.createAttr(this[_el_8], 'type', 'checkbox');
      this.addShimC(this[_el_8]);
      this[_CheckboxControlValueAccessor_8_5] = new src__directives__checkbox_value_accessor.CheckboxControlValueAccessor.new(this[_el_8]);
      this[_NgValueAccessor_8_6] = JSArrayOfControlValueAccessor().of([this[_CheckboxControlValueAccessor_8_5]]);
      this[_NgModel_8_7] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_8_6]);
      let _text_9 = html.Text.new('Mutate array');
      this[_el_7][$append](_text_9);
      this[_el_10] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_7]));
      this.addShimC(this[_el_10]);
      let _text_11 = html.Text.new('Reset');
      this[_el_10][$append](_text_11);
      this[_el_12] = src__core__linker__app_view.createAndAppend(doc, 'h4', parentRenderNode);
      this.addShimE(this[_el_12]);
      let _text_13 = html.Text.new('Heroes who fly (piped)');
      this[_el_12][$append](_text_13);
      this[_el_14] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_14], 'id', 'flyers');
      this.addShimC(this[_el_14]);
      let _anchor_15 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_14][$append](_anchor_15);
      this[_appEl_15] = new src__core__linker__view_container.ViewContainer.new(15, 14, this, _anchor_15);
      let _TemplateRef_15_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_15], src__flying_heroes_component$46template.viewFactory_FlyingHeroesComponent1);
      this[_NgFor_15_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_15], _TemplateRef_15_8);
      this[_el_16] = src__core__linker__app_view.createAndAppend(doc, 'h4', parentRenderNode);
      this.addShimE(this[_el_16]);
      let _text_17 = html.Text.new('All Heroes (no pipe)');
      this[_el_16][$append](_text_17);
      this[_el_18] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_18], 'id', 'all');
      this.addShimC(this[_el_18]);
      let _anchor_19 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_18][$append](_anchor_19);
      this[_appEl_19] = new src__core__linker__view_container.ViewContainer.new(19, 18, this, _anchor_19);
      let _TemplateRef_19_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_19], src__flying_heroes_component$46template.viewFactory_FlyingHeroesComponent2);
      this[_NgFor_19_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_19], _TemplateRef_19_8);
      src__core__linker__app_view_utils.appViewUtils.eventManager.addEventListener(this[_el_4], 'keyup.enter', this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_keyup_enter_4_0)));
      this[_el_5][$addEventListener]('change', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_change_5_1)));
      this[_el_5][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_CheckboxControlValueAccessor_5_5], 'touchHandler')));
      let subscription_0 = this[_NgModel_5_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_5_0)));
      this[_el_8][$addEventListener]('change', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_change_8_1)));
      this[_el_8][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_CheckboxControlValueAccessor_8_5], 'touchHandler')));
      let subscription_1 = this[_NgModel_8_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_8_0)));
      this[_el_10][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'reset')));
      this[_pipe_flyingHeroes_0] = new src__flying_heroes_pipe.FlyingHeroesPipe.new();
      this[_pipe_flyingHeroes_0_0] = src__core__linker__app_view_utils.pureProxy1(ListOfHero(), ListOfHero(), dart.bind(this[_pipe_flyingHeroes_0], 'transform'));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__directives__checkbox_value_accessor.CheckboxControlValueAccessor) && 5 === nodeIndex) {
        return this[_CheckboxControlValueAccessor_5_5];
      }
      if (token === (const$0 || (const$0 = dart.const(new (MultiTokenOfControlValueAccessor()).new('NgValueAccessor')))) && 5 === nodeIndex) {
        return this[_NgValueAccessor_5_6];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 5 === nodeIndex) {
        return this[_NgModel_5_7];
      }
      if (token === dart.wrapType(src__directives__checkbox_value_accessor.CheckboxControlValueAccessor) && 8 === nodeIndex) {
        return this[_CheckboxControlValueAccessor_8_5];
      }
      if (token === (const$1 || (const$1 = dart.const(new (MultiTokenOfControlValueAccessor()).new('NgValueAccessor')))) && 8 === nodeIndex) {
        return this[_NgValueAccessor_8_6];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 8 === nodeIndex) {
        return this[_NgModel_8_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_5_7].model = _ctx.canFly;
      this[_NgModel_5_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_5_7].ngOnInit();
      }
      changed = false;
      this[_NgModel_8_7].model = _ctx.mutate;
      this[_NgModel_8_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_8_7].ngOnInit();
      }
      let currVal_3 = this[_pipe_flyingHeroes_0_0](_ctx.heroes);
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_NgFor_15_9].ngForOf = currVal_3;
        this[_expr_3] = currVal_3;
      }
      this[_NgFor_15_9].ngDoCheck();
      let currVal_4 = _ctx.heroes;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_NgFor_19_9].ngForOf = currVal_4;
        this[_expr_4] = currVal_4;
      }
      this[_NgFor_19_9].ngDoCheck();
      this[_appEl_15].detectChangesInNestedViews();
      this[_appEl_19].detectChangesInNestedViews();
      let l = _ctx.title;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
    destroyInternal() {
      let t = this[_appEl_15];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_19];
      t$ == null ? null : t$.destroyNestedViews();
    }
    [_handle_keyup_enter_4_0]($event) {
      let local_box = this[_el_4];
      this.ctx.addHero(local_box.value);
      local_box.value = '';
    }
    [_handle_ngModelChange_5_0]($event) {
      this.ctx.canFly = core.bool._check($event);
    }
    [_handle_change_5_1]($event) {
      dart.dsend(this[_CheckboxControlValueAccessor_5_5], 'onChange', dart.dload(dart.dload($event, 'target'), 'checked'));
    }
    [_handle_ngModelChange_8_0]($event) {
      this.ctx.mutate = core.bool._check($event);
    }
    [_handle_change_8_1]($event) {
      dart.dsend(this[_CheckboxControlValueAccessor_8_5], 'onChange', dart.dload(dart.dload($event, 'target'), 'checked'));
    }
  };
  (src__flying_heroes_component$46template.ViewFlyingHeroesComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_el_5] = null;
    this[_CheckboxControlValueAccessor_5_5] = null;
    this[_NgValueAccessor_5_6] = null;
    this[_NgModel_5_7] = null;
    this[_el_7] = null;
    this[_el_8] = null;
    this[_CheckboxControlValueAccessor_8_5] = null;
    this[_NgValueAccessor_8_6] = null;
    this[_NgModel_8_7] = null;
    this[_el_10] = null;
    this[_el_12] = null;
    this[_el_14] = null;
    this[_appEl_15] = null;
    this[_NgFor_15_9] = null;
    this[_el_16] = null;
    this[_el_18] = null;
    this[_appEl_19] = null;
    this[_NgFor_19_9] = null;
    this[_expr_0] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_pipe_flyingHeroes_0] = null;
    this[_pipe_flyingHeroes_0_0] = null;
    src__flying_heroes_component$46template.ViewFlyingHeroesComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('flying-heroes'));
    let t = src__flying_heroes_component$46template.ViewFlyingHeroesComponent0._renderType;
    t == null ? src__flying_heroes_component$46template.ViewFlyingHeroesComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__flying_heroes_component$46template.styles$FlyingHeroesComponent) : t;
    this.setupComponentType(src__flying_heroes_component$46template.ViewFlyingHeroesComponent0._renderType);
  }).prototype = src__flying_heroes_component$46template.ViewFlyingHeroesComponent0.prototype;
  dart.addTypeTests(src__flying_heroes_component$46template.ViewFlyingHeroesComponent0);
  dart.setMethodSignature(src__flying_heroes_component$46template.ViewFlyingHeroesComponent0, () => ({
    __proto__: dart.getMethods(src__flying_heroes_component$46template.ViewFlyingHeroesComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__flying_heroes_component.FlyingHeroesComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_keyup_enter_4_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_5_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_change_5_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_8_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_change_8_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__flying_heroes_component$46template.ViewFlyingHeroesComponent0, () => ({
    __proto__: dart.getFields(src__flying_heroes_component$46template.ViewFlyingHeroesComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_el_2]: dart.fieldType(html.Element),
    [_el_4]: dart.fieldType(html.InputElement),
    [_el_5]: dart.fieldType(html.InputElement),
    [_CheckboxControlValueAccessor_5_5]: dart.fieldType(src__directives__checkbox_value_accessor.CheckboxControlValueAccessor),
    [_NgValueAccessor_5_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_5_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_el_7]: dart.fieldType(html.Element),
    [_el_8]: dart.fieldType(html.InputElement),
    [_CheckboxControlValueAccessor_8_5]: dart.fieldType(src__directives__checkbox_value_accessor.CheckboxControlValueAccessor),
    [_NgValueAccessor_8_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_8_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_el_10]: dart.fieldType(html.ButtonElement),
    [_el_12]: dart.fieldType(html.Element),
    [_el_14]: dart.fieldType(html.DivElement),
    [_appEl_15]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_15_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_16]: dart.fieldType(html.Element),
    [_el_18]: dart.fieldType(html.DivElement),
    [_appEl_19]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_19_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_pipe_flyingHeroes_0]: dart.fieldType(src__flying_heroes_pipe.FlyingHeroesPipe),
    [_pipe_flyingHeroes_0_0]: dart.fieldType(ListOfHeroToListOfHero())
  }));
  dart.defineLazy(src__flying_heroes_component$46template.ViewFlyingHeroesComponent0, {
    /*src__flying_heroes_component$46template.ViewFlyingHeroesComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__flying_heroes_component$46template.viewFactory_FlyingHeroesComponent0 = function(parentView, parentIndex) {
    return new src__flying_heroes_component$46template.ViewFlyingHeroesComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__flying_heroes_component$46template.viewFactory_FlyingHeroesComponent0, AppViewAndintToAppViewOfFlyingHeroesComponent());
  src__flying_heroes_component$46template._ViewFlyingHeroesComponent1 = class _ViewFlyingHeroesComponent1 extends src__core__linker__app_view.AppView$(src__flying_heroes_component.FlyingHeroesComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_hero = this.locals[$_get]('$implicit');
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(dart.dload(local_hero, 'name'));
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__flying_heroes_component$46template._ViewFlyingHeroesComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__flying_heroes_component$46template._ViewFlyingHeroesComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__flying_heroes_component$46template.ViewFlyingHeroesComponent0._renderType;
  }).prototype = src__flying_heroes_component$46template._ViewFlyingHeroesComponent1.prototype;
  dart.addTypeTests(src__flying_heroes_component$46template._ViewFlyingHeroesComponent1);
  dart.setMethodSignature(src__flying_heroes_component$46template._ViewFlyingHeroesComponent1, () => ({
    __proto__: dart.getMethods(src__flying_heroes_component$46template._ViewFlyingHeroesComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__flying_heroes_component.FlyingHeroesComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__flying_heroes_component$46template._ViewFlyingHeroesComponent1, () => ({
    __proto__: dart.getFields(src__flying_heroes_component$46template._ViewFlyingHeroesComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__flying_heroes_component$46template.viewFactory_FlyingHeroesComponent1 = function(parentView, parentIndex) {
    return new src__flying_heroes_component$46template._ViewFlyingHeroesComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__flying_heroes_component$46template.viewFactory_FlyingHeroesComponent1, AppViewAndintToAppViewOfFlyingHeroesComponent());
  src__flying_heroes_component$46template._ViewFlyingHeroesComponent2 = class _ViewFlyingHeroesComponent2 extends src__core__linker__app_view.AppView$(src__flying_heroes_component.FlyingHeroesComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_hero = src__heroes.Hero._check(this.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_hero.name);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__flying_heroes_component$46template._ViewFlyingHeroesComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__flying_heroes_component$46template._ViewFlyingHeroesComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__flying_heroes_component$46template.ViewFlyingHeroesComponent0._renderType;
  }).prototype = src__flying_heroes_component$46template._ViewFlyingHeroesComponent2.prototype;
  dart.addTypeTests(src__flying_heroes_component$46template._ViewFlyingHeroesComponent2);
  dart.setMethodSignature(src__flying_heroes_component$46template._ViewFlyingHeroesComponent2, () => ({
    __proto__: dart.getMethods(src__flying_heroes_component$46template._ViewFlyingHeroesComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__flying_heroes_component.FlyingHeroesComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__flying_heroes_component$46template._ViewFlyingHeroesComponent2, () => ({
    __proto__: dart.getFields(src__flying_heroes_component$46template._ViewFlyingHeroesComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__flying_heroes_component$46template.viewFactory_FlyingHeroesComponent2 = function(parentView, parentIndex) {
    return new src__flying_heroes_component$46template._ViewFlyingHeroesComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__flying_heroes_component$46template.viewFactory_FlyingHeroesComponent2, AppViewAndintToAppViewOfFlyingHeroesComponent());
  dart.defineLazy(src__flying_heroes_component$46template, {
    /*src__flying_heroes_component$46template.styles$FlyingHeroesComponentHost*/get styles$FlyingHeroesComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _FlyingHeroesComponent_0_5 = Symbol('_FlyingHeroesComponent_0_5');
  src__flying_heroes_component$46template._ViewFlyingHeroesComponentHost0 = class _ViewFlyingHeroesComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__flying_heroes_component$46template.ViewFlyingHeroesComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_FlyingHeroesComponent_0_5] = new src__flying_heroes_component.FlyingHeroesComponent.new();
      this[_compView_0].create(this[_FlyingHeroesComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfFlyingHeroesComponent()).new(0, this, this.rootEl, this[_FlyingHeroesComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__flying_heroes_component$46template._ViewFlyingHeroesComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FlyingHeroesComponent_0_5] = null;
    src__flying_heroes_component$46template._ViewFlyingHeroesComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__flying_heroes_component$46template._ViewFlyingHeroesComponentHost0.prototype;
  dart.addTypeTests(src__flying_heroes_component$46template._ViewFlyingHeroesComponentHost0);
  dart.setMethodSignature(src__flying_heroes_component$46template._ViewFlyingHeroesComponentHost0, () => ({
    __proto__: dart.getMethods(src__flying_heroes_component$46template._ViewFlyingHeroesComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__flying_heroes_component$46template._ViewFlyingHeroesComponentHost0, () => ({
    __proto__: dart.getFields(src__flying_heroes_component$46template._ViewFlyingHeroesComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__flying_heroes_component$46template.ViewFlyingHeroesComponent0),
    [_FlyingHeroesComponent_0_5]: dart.fieldType(src__flying_heroes_component.FlyingHeroesComponent)
  }));
  src__flying_heroes_component$46template.viewFactory_FlyingHeroesComponentHost0 = function(parentView, parentIndex) {
    return new src__flying_heroes_component$46template._ViewFlyingHeroesComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__flying_heroes_component$46template.viewFactory_FlyingHeroesComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__flying_heroes_component$46template, {
    /*src__flying_heroes_component$46template.FlyingHeroesComponentNgFactory*/get FlyingHeroesComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfFlyingHeroesComponent()).new('flying-heroes', src__flying_heroes_component$46template.viewFactory_FlyingHeroesComponentHost0, src__flying_heroes_component$46template._FlyingHeroesComponentMetadata));
    },
    /*src__flying_heroes_component$46template.styles$FlyingHeroesImpureComponent*/get styles$FlyingHeroesImpureComponent() {
      return dart.constList(['.flyers._ngcontent-%COMP%,.all._ngcontent-%COMP% { font-style:italic; }'], dart.dynamic);
    }
  });
  let const$2;
  let const$3;
  let const$4;
  src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0 = class ViewFlyingHeroesImpureComponent0 extends src__core__linker__app_view.AppView$(src__flying_heroes_component.FlyingHeroesImpureComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_2]);
      let _text_3 = html.Text.new('New hero:');
      this[_el_2][$append](_text_3);
      this[_el_4] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_2]));
      this.createAttr(this[_el_4], 'placeholder', 'hero name');
      this.createAttr(this[_el_4], 'type', 'text');
      this.addShimC(this[_el_4]);
      this[_el_5] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_2]));
      this.createAttr(this[_el_5], 'id', 'can-fly');
      this.createAttr(this[_el_5], 'type', 'checkbox');
      this.addShimC(this[_el_5]);
      this[_CheckboxControlValueAccessor_5_5] = new src__directives__checkbox_value_accessor.CheckboxControlValueAccessor.new(this[_el_5]);
      this[_NgValueAccessor_5_6] = JSArrayOfControlValueAccessor().of([this[_CheckboxControlValueAccessor_5_5]]);
      this[_NgModel_5_7] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_5_6]);
      let _text_6 = html.Text.new('can fly');
      this[_el_2][$append](_text_6);
      this[_el_7] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_7]);
      this[_el_8] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_7]));
      this.createAttr(this[_el_8], 'id', 'mutate');
      this.createAttr(this[_el_8], 'type', 'checkbox');
      this.addShimC(this[_el_8]);
      this[_CheckboxControlValueAccessor_8_5] = new src__directives__checkbox_value_accessor.CheckboxControlValueAccessor.new(this[_el_8]);
      this[_NgValueAccessor_8_6] = JSArrayOfControlValueAccessor().of([this[_CheckboxControlValueAccessor_8_5]]);
      this[_NgModel_8_7] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_8_6]);
      let _text_9 = html.Text.new('Mutate array');
      this[_el_7][$append](_text_9);
      this[_el_10] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_7]));
      this.addShimC(this[_el_10]);
      let _text_11 = html.Text.new('Reset');
      this[_el_10][$append](_text_11);
      this[_el_12] = src__core__linker__app_view.createAndAppend(doc, 'h4', parentRenderNode);
      this.addShimE(this[_el_12]);
      let _text_13 = html.Text.new('Heroes who fly (piped)');
      this[_el_12][$append](_text_13);
      this[_el_14] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_14], 'id', 'flyers');
      this.addShimC(this[_el_14]);
      let _anchor_15 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_14][$append](_anchor_15);
      this[_appEl_15] = new src__core__linker__view_container.ViewContainer.new(15, 14, this, _anchor_15);
      let _TemplateRef_15_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_15], src__flying_heroes_component$46template.viewFactory_FlyingHeroesImpureComponent1);
      this[_NgFor_15_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_15], _TemplateRef_15_8);
      this[_el_16] = src__core__linker__app_view.createAndAppend(doc, 'h4', parentRenderNode);
      this.addShimE(this[_el_16]);
      let _text_17 = html.Text.new('All Heroes (no pipe)');
      this[_el_16][$append](_text_17);
      this[_el_18] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_18], 'id', 'all');
      this.addShimC(this[_el_18]);
      let _anchor_19 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_18][$append](_anchor_19);
      this[_appEl_19] = new src__core__linker__view_container.ViewContainer.new(19, 18, this, _anchor_19);
      let _TemplateRef_19_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_19], src__flying_heroes_component$46template.viewFactory_FlyingHeroesImpureComponent2);
      this[_NgFor_19_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_19], _TemplateRef_19_8);
      src__core__linker__app_view_utils.appViewUtils.eventManager.addEventListener(this[_el_4], 'keyup.enter', this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_keyup_enter_4_0)));
      this[_el_5][$addEventListener]('change', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_change_5_1)));
      this[_el_5][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_CheckboxControlValueAccessor_5_5], 'touchHandler')));
      let subscription_0 = this[_NgModel_5_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_5_0)));
      this[_el_8][$addEventListener]('change', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_change_8_1)));
      this[_el_8][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_CheckboxControlValueAccessor_8_5], 'touchHandler')));
      let subscription_1 = this[_NgModel_8_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_8_0)));
      this[_el_10][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'reset')));
      this[_pipe_flyingHeroes_0] = new src__flying_heroes_pipe.FlyingHeroesImpurePipe.new();
      this.init(const$2 || (const$2 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__directives__checkbox_value_accessor.CheckboxControlValueAccessor) && 5 === nodeIndex) {
        return this[_CheckboxControlValueAccessor_5_5];
      }
      if (token === (const$3 || (const$3 = dart.const(new (MultiTokenOfControlValueAccessor()).new('NgValueAccessor')))) && 5 === nodeIndex) {
        return this[_NgValueAccessor_5_6];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 5 === nodeIndex) {
        return this[_NgModel_5_7];
      }
      if (token === dart.wrapType(src__directives__checkbox_value_accessor.CheckboxControlValueAccessor) && 8 === nodeIndex) {
        return this[_CheckboxControlValueAccessor_8_5];
      }
      if (token === (const$4 || (const$4 = dart.const(new (MultiTokenOfControlValueAccessor()).new('NgValueAccessor')))) && 8 === nodeIndex) {
        return this[_NgValueAccessor_8_6];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 8 === nodeIndex) {
        return this[_NgModel_8_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_5_7].model = _ctx.canFly;
      this[_NgModel_5_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_5_7].ngOnInit();
      }
      changed = false;
      this[_NgModel_8_7].model = _ctx.mutate;
      this[_NgModel_8_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_8_7].ngOnInit();
      }
      let currVal_3 = this[_pipe_flyingHeroes_0].transform(_ctx.heroes);
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_NgFor_15_9].ngForOf = currVal_3;
        this[_expr_3] = currVal_3;
      }
      this[_NgFor_15_9].ngDoCheck();
      let currVal_4 = _ctx.heroes;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_NgFor_19_9].ngForOf = currVal_4;
        this[_expr_4] = currVal_4;
      }
      this[_NgFor_19_9].ngDoCheck();
      this[_appEl_15].detectChangesInNestedViews();
      this[_appEl_19].detectChangesInNestedViews();
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.title);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    destroyInternal() {
      let t = this[_appEl_15];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_19];
      t$ == null ? null : t$.destroyNestedViews();
    }
    [_handle_keyup_enter_4_0]($event) {
      let local_box = this[_el_4];
      this.ctx.addHero(local_box.value);
      local_box.value = '';
    }
    [_handle_ngModelChange_5_0]($event) {
      this.ctx.canFly = core.bool._check($event);
    }
    [_handle_change_5_1]($event) {
      dart.dsend(this[_CheckboxControlValueAccessor_5_5], 'onChange', dart.dload(dart.dload($event, 'target'), 'checked'));
    }
    [_handle_ngModelChange_8_0]($event) {
      this.ctx.mutate = core.bool._check($event);
    }
    [_handle_change_8_1]($event) {
      dart.dsend(this[_CheckboxControlValueAccessor_8_5], 'onChange', dart.dload(dart.dload($event, 'target'), 'checked'));
    }
  };
  (src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_el_5] = null;
    this[_CheckboxControlValueAccessor_5_5] = null;
    this[_NgValueAccessor_5_6] = null;
    this[_NgModel_5_7] = null;
    this[_el_7] = null;
    this[_el_8] = null;
    this[_CheckboxControlValueAccessor_8_5] = null;
    this[_NgValueAccessor_8_6] = null;
    this[_NgModel_8_7] = null;
    this[_el_10] = null;
    this[_el_12] = null;
    this[_el_14] = null;
    this[_appEl_15] = null;
    this[_NgFor_15_9] = null;
    this[_el_16] = null;
    this[_el_18] = null;
    this[_appEl_19] = null;
    this[_NgFor_19_9] = null;
    this[_expr_0] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_pipe_flyingHeroes_0] = null;
    src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('flying-heroes-impure'));
    let t = src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0._renderType;
    t == null ? src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__flying_heroes_component$46template.styles$FlyingHeroesImpureComponent) : t;
    this.setupComponentType(src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0._renderType);
  }).prototype = src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0.prototype;
  dart.addTypeTests(src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0);
  dart.setMethodSignature(src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0, () => ({
    __proto__: dart.getMethods(src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__flying_heroes_component.FlyingHeroesImpureComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_keyup_enter_4_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_5_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_change_5_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_8_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_change_8_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0, () => ({
    __proto__: dart.getFields(src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_el_2]: dart.fieldType(html.Element),
    [_el_4]: dart.fieldType(html.InputElement),
    [_el_5]: dart.fieldType(html.InputElement),
    [_CheckboxControlValueAccessor_5_5]: dart.fieldType(src__directives__checkbox_value_accessor.CheckboxControlValueAccessor),
    [_NgValueAccessor_5_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_5_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_el_7]: dart.fieldType(html.Element),
    [_el_8]: dart.fieldType(html.InputElement),
    [_CheckboxControlValueAccessor_8_5]: dart.fieldType(src__directives__checkbox_value_accessor.CheckboxControlValueAccessor),
    [_NgValueAccessor_8_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_8_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_el_10]: dart.fieldType(html.ButtonElement),
    [_el_12]: dart.fieldType(html.Element),
    [_el_14]: dart.fieldType(html.DivElement),
    [_appEl_15]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_15_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_16]: dart.fieldType(html.Element),
    [_el_18]: dart.fieldType(html.DivElement),
    [_appEl_19]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_19_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_pipe_flyingHeroes_0]: dart.fieldType(src__flying_heroes_pipe.FlyingHeroesImpurePipe)
  }));
  dart.defineLazy(src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0, {
    /*src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__flying_heroes_component$46template.viewFactory_FlyingHeroesImpureComponent0 = function(parentView, parentIndex) {
    return new src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__flying_heroes_component$46template.viewFactory_FlyingHeroesImpureComponent0, AppViewAndintToAppViewOfFlyingHeroesImpureComponent());
  src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent1 = class _ViewFlyingHeroesImpureComponent1 extends src__core__linker__app_view.AppView$(src__flying_heroes_component.FlyingHeroesImpureComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_hero = this.locals[$_get]('$implicit');
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(dart.dload(local_hero, 'name'));
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0._renderType;
  }).prototype = src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent1.prototype;
  dart.addTypeTests(src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent1);
  dart.setMethodSignature(src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent1, () => ({
    __proto__: dart.getMethods(src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__flying_heroes_component.FlyingHeroesImpureComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent1, () => ({
    __proto__: dart.getFields(src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__flying_heroes_component$46template.viewFactory_FlyingHeroesImpureComponent1 = function(parentView, parentIndex) {
    return new src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__flying_heroes_component$46template.viewFactory_FlyingHeroesImpureComponent1, AppViewAndintToAppViewOfFlyingHeroesImpureComponent());
  src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent2 = class _ViewFlyingHeroesImpureComponent2 extends src__core__linker__app_view.AppView$(src__flying_heroes_component.FlyingHeroesImpureComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_hero = src__heroes.Hero._check(this.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_hero.name);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0._renderType;
  }).prototype = src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent2.prototype;
  dart.addTypeTests(src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent2);
  dart.setMethodSignature(src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent2, () => ({
    __proto__: dart.getMethods(src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__flying_heroes_component.FlyingHeroesImpureComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent2, () => ({
    __proto__: dart.getFields(src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__flying_heroes_component$46template.viewFactory_FlyingHeroesImpureComponent2 = function(parentView, parentIndex) {
    return new src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__flying_heroes_component$46template.viewFactory_FlyingHeroesImpureComponent2, AppViewAndintToAppViewOfFlyingHeroesImpureComponent());
  dart.defineLazy(src__flying_heroes_component$46template, {
    /*src__flying_heroes_component$46template.styles$FlyingHeroesImpureComponentHost*/get styles$FlyingHeroesImpureComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _FlyingHeroesImpureComponent_0_5 = Symbol('_FlyingHeroesImpureComponent_0_5');
  src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponentHost0 = class _ViewFlyingHeroesImpureComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_FlyingHeroesImpureComponent_0_5] = new src__flying_heroes_component.FlyingHeroesImpureComponent.new();
      this[_compView_0].create(this[_FlyingHeroesImpureComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfFlyingHeroesImpureComponent()).new(0, this, this.rootEl, this[_FlyingHeroesImpureComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FlyingHeroesImpureComponent_0_5] = null;
    src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponentHost0.prototype;
  dart.addTypeTests(src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponentHost0);
  dart.setMethodSignature(src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponentHost0, () => ({
    __proto__: dart.getMethods(src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponentHost0, () => ({
    __proto__: dart.getFields(src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__flying_heroes_component$46template.ViewFlyingHeroesImpureComponent0),
    [_FlyingHeroesImpureComponent_0_5]: dart.fieldType(src__flying_heroes_component.FlyingHeroesImpureComponent)
  }));
  src__flying_heroes_component$46template.viewFactory_FlyingHeroesImpureComponentHost0 = function(parentView, parentIndex) {
    return new src__flying_heroes_component$46template._ViewFlyingHeroesImpureComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__flying_heroes_component$46template.viewFactory_FlyingHeroesImpureComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__flying_heroes_component$46template, {
    /*src__flying_heroes_component$46template.FlyingHeroesImpureComponentNgFactory*/get FlyingHeroesImpureComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfFlyingHeroesImpureComponent()).new('flying-heroes-impure', src__flying_heroes_component$46template.viewFactory_FlyingHeroesImpureComponentHost0, src__flying_heroes_component$46template._FlyingHeroesImpureComponentMetadata));
    },
    /*src__flying_heroes_component$46template._FlyingHeroesComponentMetadata*/get _FlyingHeroesComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__flying_heroes_component$46template._FlyingHeroesImpureComponentMetadata*/get _FlyingHeroesImpureComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__flying_heroes_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__flying_heroes_component$46template.initReflector = function() {
    if (dart.test(src__flying_heroes_component$46template._visited)) {
      return;
    }
    src__flying_heroes_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__flying_heroes_component.FlyingHeroesComponent), src__flying_heroes_component$46template.FlyingHeroesComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__flying_heroes_component.FlyingHeroesImpureComponent), src__flying_heroes_component$46template.FlyingHeroesImpureComponentNgFactory);
    src__flying_heroes_pipe$46template.initReflector();
    src__heroes$46template.initReflector();
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.fn(src__flying_heroes_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/pipe_examples/src/flying_heroes_component.template.ddc", {
    "package:pipe_examples/src/flying_heroes_component.template.dart": src__flying_heroes_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["flying_heroes_component.template.dart"],"names":[],"mappings":"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","file":"flying_heroes_component.template.ddc.js"}');
  // Exports:
  return {
    src__flying_heroes_component$46template: src__flying_heroes_component$46template
  };
});

//# sourceMappingURL=flying_heroes_component.template.ddc.js.map
