define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_forms/src/directives/default_value_accessor', 'packages/angular_forms/src/directives/number_value_accessor', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular_forms/src/directives/ng_model', 'packages/pipe_examples/src/exponential_strength_pipe', 'packages/angular/src/core/di/opaque_token', 'packages/angular_forms/src/directives/control_container', 'packages/pipe_examples/src/power_boost_calculator_component', 'packages/angular/src/di/reflector', 'packages/pipe_examples/src/exponential_strength_pipe.template', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, default_value_accessor, number_value_accessor, control_value_accessor, ng_model, exponential_strength_pipe, opaque_token, control_container, power_boost_calculator_component, reflector, exponential_strength_pipe$, angular, angular_forms) {
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
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__directives__default_value_accessor = default_value_accessor.src__directives__default_value_accessor;
  const src__directives__number_value_accessor = number_value_accessor.src__directives__number_value_accessor;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__directives__ng_model = ng_model.src__directives__ng_model;
  const src__exponential_strength_pipe = exponential_strength_pipe.src__exponential_strength_pipe;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const src__power_boost_calculator_component = power_boost_calculator_component.src__power_boost_calculator_component;
  const src__di__reflector = reflector.src__di__reflector;
  const src__exponential_strength_pipe$46template = exponential_strength_pipe$.src__exponential_strength_pipe$46template;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const src__power_boost_calculator_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfControlValueAccessor = () => (JSArrayOfControlValueAccessor = dart.constFn(_interceptors.JSArray$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let MultiTokenOfControlValueAccessor = () => (MultiTokenOfControlValueAccessor = dart.constFn(src__core__di__opaque_token.MultiToken$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ListOfControlValueAccessor = () => (ListOfControlValueAccessor = dart.constFn(core.List$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let numAndnumTonum = () => (numAndnumTonum = dart.constFn(dart.fnType(core.num, [core.num, core.num])))();
  let AppViewOfPowerBoostCalculatorComponent = () => (AppViewOfPowerBoostCalculatorComponent = dart.constFn(src__core__linker__app_view.AppView$(src__power_boost_calculator_component.PowerBoostCalculatorComponent)))();
  let AppViewAndintToAppViewOfPowerBoostCalculatorComponent = () => (AppViewAndintToAppViewOfPowerBoostCalculatorComponent = dart.constFn(dart.fnType(AppViewOfPowerBoostCalculatorComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfPowerBoostCalculatorComponent = () => (ComponentRefOfPowerBoostCalculatorComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__power_boost_calculator_component.PowerBoostCalculatorComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfPowerBoostCalculatorComponent = () => (ComponentFactoryOfPowerBoostCalculatorComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__power_boost_calculator_component.PowerBoostCalculatorComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__power_boost_calculator_component$46template, {
    /*src__power_boost_calculator_component$46template.styles$PowerBoostCalculatorComponent*/get styles$PowerBoostCalculatorComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _el_4 = Symbol('_el_4');
  const _DefaultValueAccessor_4_5 = Symbol('_DefaultValueAccessor_4_5');
  const _NumberValueAccessor_4_6 = Symbol('_NumberValueAccessor_4_6');
  const _NgValueAccessor_4_7 = Symbol('_NgValueAccessor_4_7');
  const _NgModel_4_8 = Symbol('_NgModel_4_8');
  const _el_5 = Symbol('_el_5');
  const _el_7 = Symbol('_el_7');
  const _DefaultValueAccessor_7_5 = Symbol('_DefaultValueAccessor_7_5');
  const _NumberValueAccessor_7_6 = Symbol('_NumberValueAccessor_7_6');
  const _NgValueAccessor_7_7 = Symbol('_NgValueAccessor_7_7');
  const _NgModel_7_8 = Symbol('_NgModel_7_8');
  const _el_8 = Symbol('_el_8');
  const _text_10 = Symbol('_text_10');
  const _expr_2 = Symbol('_expr_2');
  const _pipe_exponentialStrength_0 = Symbol('_pipe_exponentialStrength_0');
  const _pipe_exponentialStrength_0_0 = Symbol('_pipe_exponentialStrength_0_0');
  const _handle_input_4_1 = Symbol('_handle_input_4_1');
  const _handle_blur_4_2 = Symbol('_handle_blur_4_2');
  const _handle_change_4_3 = Symbol('_handle_change_4_3');
  const _handle_ngModelChange_4_0 = Symbol('_handle_ngModelChange_4_0');
  const _handle_input_7_1 = Symbol('_handle_input_7_1');
  const _handle_blur_7_2 = Symbol('_handle_blur_7_2');
  const _handle_change_7_3 = Symbol('_handle_change_7_3');
  const _handle_ngModelChange_7_0 = Symbol('_handle_ngModelChange_7_0');
  let const$;
  let const$0;
  let const$1;
  src__power_boost_calculator_component$46template.ViewPowerBoostCalculatorComponent0 = class ViewPowerBoostCalculatorComponent0 extends src__core__linker__app_view.AppView$(src__power_boost_calculator_component.PowerBoostCalculatorComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      let _text_1 = html.Text.new('Power Boost Calculator');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      let _text_3 = html.Text.new('Normal power:');
      this[_el_2][$append](_text_3);
      this[_el_4] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_2]));
      this.createAttr(this[_el_4], 'type', 'number');
      this[_DefaultValueAccessor_4_5] = new src__directives__default_value_accessor.DefaultValueAccessor.new(this[_el_4]);
      this[_NumberValueAccessor_4_6] = new src__directives__number_value_accessor.NumberValueAccessor.new(this[_el_4]);
      this[_NgValueAccessor_4_7] = JSArrayOfControlValueAccessor().of([this[_DefaultValueAccessor_4_5], this[_NumberValueAccessor_4_6]]);
      this[_NgModel_4_8] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_4_7]);
      this[_el_5] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      let _text_6 = html.Text.new('Boost factor:');
      this[_el_5][$append](_text_6);
      this[_el_7] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_5]));
      this.createAttr(this[_el_7], 'type', 'number');
      this[_DefaultValueAccessor_7_5] = new src__directives__default_value_accessor.DefaultValueAccessor.new(this[_el_7]);
      this[_NumberValueAccessor_7_6] = new src__directives__number_value_accessor.NumberValueAccessor.new(this[_el_7]);
      this[_NgValueAccessor_7_7] = JSArrayOfControlValueAccessor().of([this[_DefaultValueAccessor_7_5], this[_NumberValueAccessor_7_6]]);
      this[_NgModel_7_8] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_7_7]);
      this[_el_8] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      let _text_9 = html.Text.new('Super Hero Power: ');
      this[_el_8][$append](_text_9);
      this[_text_10] = html.Text.new('');
      this[_el_8][$append](this[_text_10]);
      this[_el_4][$addEventListener]('input', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_4_1)));
      this[_el_4][$addEventListener]('blur', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_blur_4_2)));
      this[_el_4][$addEventListener]('change', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_change_4_3)));
      let subscription_0 = this[_NgModel_4_8].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_4_0)));
      this[_el_7][$addEventListener]('input', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_7_1)));
      this[_el_7][$addEventListener]('blur', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_blur_7_2)));
      this[_el_7][$addEventListener]('change', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_change_7_3)));
      let subscription_1 = this[_NgModel_7_8].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_7_0)));
      this[_pipe_exponentialStrength_0] = new src__exponential_strength_pipe.ExponentialStrengthPipe.new();
      this[_pipe_exponentialStrength_0_0] = src__core__linker__app_view_utils.pureProxy2(core.num, core.num, core.num, dart.bind(this[_pipe_exponentialStrength_0], 'transform'));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__directives__default_value_accessor.DefaultValueAccessor) && 4 === nodeIndex) {
        return this[_DefaultValueAccessor_4_5];
      }
      if (token === dart.wrapType(src__directives__number_value_accessor.NumberValueAccessor) && 4 === nodeIndex) {
        return this[_NumberValueAccessor_4_6];
      }
      if (token === (const$0 || (const$0 = dart.const(new (MultiTokenOfControlValueAccessor()).new('NgValueAccessor')))) && 4 === nodeIndex) {
        return this[_NgValueAccessor_4_7];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 4 === nodeIndex) {
        return this[_NgModel_4_8];
      }
      if (token === dart.wrapType(src__directives__default_value_accessor.DefaultValueAccessor) && 7 === nodeIndex) {
        return this[_DefaultValueAccessor_7_5];
      }
      if (token === dart.wrapType(src__directives__number_value_accessor.NumberValueAccessor) && 7 === nodeIndex) {
        return this[_NumberValueAccessor_7_6];
      }
      if (token === (const$1 || (const$1 = dart.const(new (MultiTokenOfControlValueAccessor()).new('NgValueAccessor')))) && 7 === nodeIndex) {
        return this[_NgValueAccessor_7_7];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 7 === nodeIndex) {
        return this[_NgModel_7_8];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_4_8].model = _ctx.power;
      this[_NgModel_4_8].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_4_8].ngOnInit();
      }
      changed = false;
      this[_NgModel_7_8].model = _ctx.factor;
      this[_NgModel_7_8].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_7_8].ngOnInit();
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(this[_pipe_exponentialStrength_0_0](_ctx.power, _ctx.factor));
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_10][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    [_handle_ngModelChange_4_0]($event) {
      this.ctx.power = core.num._check($event);
    }
    [_handle_input_4_1]($event) {
      dart.dsend(this[_DefaultValueAccessor_4_5], 'onChange', dart.dload(dart.dload($event, 'target'), 'value'));
      dart.dsend(this[_NumberValueAccessor_4_6], 'onChange', dart.dload(dart.dload($event, 'target'), 'value'));
    }
    [_handle_blur_4_2]($event) {
      this[_DefaultValueAccessor_4_5].touchHandler();
      this[_NumberValueAccessor_4_6].touchHandler();
    }
    [_handle_change_4_3]($event) {
      dart.dsend(this[_NumberValueAccessor_4_6], 'onChange', dart.dload(dart.dload($event, 'target'), 'value'));
    }
    [_handle_ngModelChange_7_0]($event) {
      this.ctx.factor = core.num._check($event);
    }
    [_handle_input_7_1]($event) {
      dart.dsend(this[_DefaultValueAccessor_7_5], 'onChange', dart.dload(dart.dload($event, 'target'), 'value'));
      dart.dsend(this[_NumberValueAccessor_7_6], 'onChange', dart.dload(dart.dload($event, 'target'), 'value'));
    }
    [_handle_blur_7_2]($event) {
      this[_DefaultValueAccessor_7_5].touchHandler();
      this[_NumberValueAccessor_7_6].touchHandler();
    }
    [_handle_change_7_3]($event) {
      dart.dsend(this[_NumberValueAccessor_7_6], 'onChange', dart.dload(dart.dload($event, 'target'), 'value'));
    }
  };
  (src__power_boost_calculator_component$46template.ViewPowerBoostCalculatorComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_DefaultValueAccessor_4_5] = null;
    this[_NumberValueAccessor_4_6] = null;
    this[_NgValueAccessor_4_7] = null;
    this[_NgModel_4_8] = null;
    this[_el_5] = null;
    this[_el_7] = null;
    this[_DefaultValueAccessor_7_5] = null;
    this[_NumberValueAccessor_7_6] = null;
    this[_NgValueAccessor_7_7] = null;
    this[_NgModel_7_8] = null;
    this[_el_8] = null;
    this[_text_10] = null;
    this[_expr_2] = null;
    this[_pipe_exponentialStrength_0] = null;
    this[_pipe_exponentialStrength_0_0] = null;
    src__power_boost_calculator_component$46template.ViewPowerBoostCalculatorComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('power-boost-calculator'));
    let t = src__power_boost_calculator_component$46template.ViewPowerBoostCalculatorComponent0._renderType;
    t == null ? src__power_boost_calculator_component$46template.ViewPowerBoostCalculatorComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__power_boost_calculator_component$46template.styles$PowerBoostCalculatorComponent) : t;
    this.setupComponentType(src__power_boost_calculator_component$46template.ViewPowerBoostCalculatorComponent0._renderType);
  }).prototype = src__power_boost_calculator_component$46template.ViewPowerBoostCalculatorComponent0.prototype;
  dart.addTypeTests(src__power_boost_calculator_component$46template.ViewPowerBoostCalculatorComponent0);
  dart.setMethodSignature(src__power_boost_calculator_component$46template.ViewPowerBoostCalculatorComponent0, () => ({
    __proto__: dart.getMethods(src__power_boost_calculator_component$46template.ViewPowerBoostCalculatorComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__power_boost_calculator_component.PowerBoostCalculatorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_4_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_4_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_blur_4_2]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_change_4_3]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_7_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_7_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_blur_7_2]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_change_7_3]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__power_boost_calculator_component$46template.ViewPowerBoostCalculatorComponent0, () => ({
    __proto__: dart.getFields(src__power_boost_calculator_component$46template.ViewPowerBoostCalculatorComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.InputElement),
    [_DefaultValueAccessor_4_5]: dart.fieldType(src__directives__default_value_accessor.DefaultValueAccessor),
    [_NumberValueAccessor_4_6]: dart.fieldType(src__directives__number_value_accessor.NumberValueAccessor),
    [_NgValueAccessor_4_7]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_4_8]: dart.fieldType(src__directives__ng_model.NgModel),
    [_el_5]: dart.fieldType(html.DivElement),
    [_el_7]: dart.fieldType(html.InputElement),
    [_DefaultValueAccessor_7_5]: dart.fieldType(src__directives__default_value_accessor.DefaultValueAccessor),
    [_NumberValueAccessor_7_6]: dart.fieldType(src__directives__number_value_accessor.NumberValueAccessor),
    [_NgValueAccessor_7_7]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_7_8]: dart.fieldType(src__directives__ng_model.NgModel),
    [_el_8]: dart.fieldType(html.Element),
    [_text_10]: dart.fieldType(html.Text),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_pipe_exponentialStrength_0]: dart.fieldType(src__exponential_strength_pipe.ExponentialStrengthPipe),
    [_pipe_exponentialStrength_0_0]: dart.fieldType(numAndnumTonum())
  }));
  dart.defineLazy(src__power_boost_calculator_component$46template.ViewPowerBoostCalculatorComponent0, {
    /*src__power_boost_calculator_component$46template.ViewPowerBoostCalculatorComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__power_boost_calculator_component$46template.viewFactory_PowerBoostCalculatorComponent0 = function(parentView, parentIndex) {
    return new src__power_boost_calculator_component$46template.ViewPowerBoostCalculatorComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__power_boost_calculator_component$46template.viewFactory_PowerBoostCalculatorComponent0, AppViewAndintToAppViewOfPowerBoostCalculatorComponent());
  dart.defineLazy(src__power_boost_calculator_component$46template, {
    /*src__power_boost_calculator_component$46template.styles$PowerBoostCalculatorComponentHost*/get styles$PowerBoostCalculatorComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _PowerBoostCalculatorComponent_0_5 = Symbol('_PowerBoostCalculatorComponent_0_5');
  src__power_boost_calculator_component$46template._ViewPowerBoostCalculatorComponentHost0 = class _ViewPowerBoostCalculatorComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__power_boost_calculator_component$46template.ViewPowerBoostCalculatorComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_PowerBoostCalculatorComponent_0_5] = new src__power_boost_calculator_component.PowerBoostCalculatorComponent.new();
      this[_compView_0].create(this[_PowerBoostCalculatorComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfPowerBoostCalculatorComponent()).new(0, this, this.rootEl, this[_PowerBoostCalculatorComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__power_boost_calculator_component$46template._ViewPowerBoostCalculatorComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_PowerBoostCalculatorComponent_0_5] = null;
    src__power_boost_calculator_component$46template._ViewPowerBoostCalculatorComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__power_boost_calculator_component$46template._ViewPowerBoostCalculatorComponentHost0.prototype;
  dart.addTypeTests(src__power_boost_calculator_component$46template._ViewPowerBoostCalculatorComponentHost0);
  dart.setMethodSignature(src__power_boost_calculator_component$46template._ViewPowerBoostCalculatorComponentHost0, () => ({
    __proto__: dart.getMethods(src__power_boost_calculator_component$46template._ViewPowerBoostCalculatorComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__power_boost_calculator_component$46template._ViewPowerBoostCalculatorComponentHost0, () => ({
    __proto__: dart.getFields(src__power_boost_calculator_component$46template._ViewPowerBoostCalculatorComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__power_boost_calculator_component$46template.ViewPowerBoostCalculatorComponent0),
    [_PowerBoostCalculatorComponent_0_5]: dart.fieldType(src__power_boost_calculator_component.PowerBoostCalculatorComponent)
  }));
  src__power_boost_calculator_component$46template.viewFactory_PowerBoostCalculatorComponentHost0 = function(parentView, parentIndex) {
    return new src__power_boost_calculator_component$46template._ViewPowerBoostCalculatorComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__power_boost_calculator_component$46template.viewFactory_PowerBoostCalculatorComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__power_boost_calculator_component$46template, {
    /*src__power_boost_calculator_component$46template.PowerBoostCalculatorComponentNgFactory*/get PowerBoostCalculatorComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfPowerBoostCalculatorComponent()).new('power-boost-calculator', src__power_boost_calculator_component$46template.viewFactory_PowerBoostCalculatorComponentHost0, src__power_boost_calculator_component$46template._PowerBoostCalculatorComponentMetadata));
    },
    /*src__power_boost_calculator_component$46template._PowerBoostCalculatorComponentMetadata*/get _PowerBoostCalculatorComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__power_boost_calculator_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__power_boost_calculator_component$46template.initReflector = function() {
    if (dart.test(src__power_boost_calculator_component$46template._visited)) {
      return;
    }
    src__power_boost_calculator_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__power_boost_calculator_component.PowerBoostCalculatorComponent), src__power_boost_calculator_component$46template.PowerBoostCalculatorComponentNgFactory);
    src__exponential_strength_pipe$46template.initReflector();
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.fn(src__power_boost_calculator_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/pipe_examples/src/power_boost_calculator_component.template.ddc", {
    "package:pipe_examples/src/power_boost_calculator_component.template.dart": src__power_boost_calculator_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["power_boost_calculator_component.template.dart"],"names":[],"mappings":"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","file":"power_boost_calculator_component.template.ddc.js"}');
  // Exports:
  return {
    src__power_boost_calculator_component$46template: src__power_boost_calculator_component$46template
  };
});

//# sourceMappingURL=power_boost_calculator_component.template.ddc.js.map
