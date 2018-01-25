// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'power_boost_calculator_component.dart';
export 'power_boost_calculator_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'exponential_strength_pipe.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'exponential_strength_pipe.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_forms/angular_forms.template.dart' as _ref2;

import 'package:angular/src/core/linker/app_view.dart';
import 'power_boost_calculator_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import3;
import 'package:angular_forms/src/directives/number_value_accessor.dart' as import4;
import 'package:angular_forms/src/directives/ng_model.dart' as import5;
import 'exponential_strength_pipe.dart' as import6;
import 'dart:core';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/core/di/opaque_token.dart' as import13;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import14;
import 'package:angular_forms/src/directives/ng_control.dart' as import15;

const List<dynamic> styles$PowerBoostCalculatorComponent = const [];

class ViewPowerBoostCalculatorComponent0 extends AppView<import1.PowerBoostCalculatorComponent> {
  import2.Element _el_0;
  import2.DivElement _el_2;
  import2.InputElement _el_4;
  import3.DefaultValueAccessor _DefaultValueAccessor_4_4;
  import4.NumberValueAccessor _NumberValueAccessor_4_5;
  List<dynamic> _NgValueAccessor_4_6;
  import5.NgModel _NgModel_4_7;
  import2.DivElement _el_5;
  import2.InputElement _el_7;
  import3.DefaultValueAccessor _DefaultValueAccessor_7_4;
  import4.NumberValueAccessor _NumberValueAccessor_7_5;
  List<dynamic> _NgValueAccessor_7_6;
  import5.NgModel _NgModel_7_7;
  import2.Element _el_8;
  import2.Text _text_9;
  var _expr_2;
  import6.ExponentialStrengthPipe _pipe_exponentialStrength_0;
  num Function(num, num) _pipe_exponentialStrength_0_0;
  static RenderComponentType _renderType;
  ViewPowerBoostCalculatorComponent0(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('power-boost-calculator');
    _renderType ??= import11.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$PowerBoostCalculatorComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.PowerBoostCalculatorComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h2', parentRenderNode);
    import2.Text _text_1 = new import2.Text('Power Boost Calculator');
    _el_0.append(_text_1);
    _el_2 = createDivAndAppend(doc, parentRenderNode);
    import2.Text _text_3 = new import2.Text('Normal power:');
    _el_2.append(_text_3);
    _el_4 = createAndAppend(doc, 'input', _el_2);
    createAttr(_el_4, 'type', 'number');
    _DefaultValueAccessor_4_4 = new import3.DefaultValueAccessor(_el_4);
    _NumberValueAccessor_4_5 = new import4.NumberValueAccessor(_el_4);
    _NgValueAccessor_4_6 = [_DefaultValueAccessor_4_4, _NumberValueAccessor_4_5];
    _NgModel_4_7 = new import5.NgModel(null, _NgValueAccessor_4_6);
    _el_5 = createDivAndAppend(doc, parentRenderNode);
    import2.Text _text_6 = new import2.Text('Boost factor:');
    _el_5.append(_text_6);
    _el_7 = createAndAppend(doc, 'input', _el_5);
    createAttr(_el_7, 'type', 'number');
    _DefaultValueAccessor_7_4 = new import3.DefaultValueAccessor(_el_7);
    _NumberValueAccessor_7_5 = new import4.NumberValueAccessor(_el_7);
    _NgValueAccessor_7_6 = [_DefaultValueAccessor_7_4, _NumberValueAccessor_7_5];
    _NgModel_7_7 = new import5.NgModel(null, _NgValueAccessor_7_6);
    _el_8 = createAndAppend(doc, 'p', parentRenderNode);
    _text_9 = new import2.Text('');
    _el_8.append(_text_9);
    _el_4.addEventListener('input', eventHandler1(_handle_input_4_1));
    _el_4.addEventListener('blur', eventHandler1(_handle_blur_4_2));
    _el_4.addEventListener('change', eventHandler1(_handle_change_4_3));
    final subscription_0 = _NgModel_4_7.update.listen(eventHandler1(_handle_ngModelChange_4_0));
    _el_7.addEventListener('input', eventHandler1(_handle_input_7_1));
    _el_7.addEventListener('blur', eventHandler1(_handle_blur_7_2));
    _el_7.addEventListener('change', eventHandler1(_handle_change_7_3));
    final subscription_1 = _NgModel_7_7.update.listen(eventHandler1(_handle_ngModelChange_7_0));
    _pipe_exponentialStrength_0 = new import6.ExponentialStrengthPipe();
    _pipe_exponentialStrength_0_0 = import11.pureProxy2(_pipe_exponentialStrength_0.transform);
    init(const [], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import3.DefaultValueAccessor) && (4 == nodeIndex))) {
      return _DefaultValueAccessor_4_4;
    }
    if ((identical(token, import4.NumberValueAccessor) && (4 == nodeIndex))) {
      return _NumberValueAccessor_4_5;
    }
    if ((identical(token, const import13.OpaqueToken<import14.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (4 == nodeIndex))) {
      return _NgValueAccessor_4_6;
    }
    if (((identical(token, import5.NgModel) || identical(token, import15.NgControl)) && (4 == nodeIndex))) {
      return _NgModel_4_7;
    }
    if ((identical(token, import3.DefaultValueAccessor) && (7 == nodeIndex))) {
      return _DefaultValueAccessor_7_4;
    }
    if ((identical(token, import4.NumberValueAccessor) && (7 == nodeIndex))) {
      return _NumberValueAccessor_7_5;
    }
    if ((identical(token, const import13.OpaqueToken<import14.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (7 == nodeIndex))) {
      return _NgValueAccessor_7_6;
    }
    if (((identical(token, import5.NgModel) || identical(token, import15.NgControl)) && (7 == nodeIndex))) {
      return _NgModel_7_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.PowerBoostCalculatorComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_4_7.model = _ctx.power;
    _NgModel_4_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_4_7.ngOnInit();
    }
    changed = false;
    _NgModel_7_7.model = _ctx.factor;
    _NgModel_7_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_7_7.ngOnInit();
    }
    final currVal_2 = import11.interpolate1('Super Hero Power: ', _pipe_exponentialStrength_0_0(_ctx.power, _ctx.factor), '');
    if (!identical(_expr_2, currVal_2)) {
      _text_9.text = currVal_2;
      _expr_2 = currVal_2;
    }
  }

  void _handle_ngModelChange_4_0($event) {
    ctx.power = $event;
  }

  void _handle_input_4_1($event) {
    _DefaultValueAccessor_4_4.onChange($event.target.value);
    _NumberValueAccessor_4_5.onChange($event.target.value);
  }

  void _handle_blur_4_2($event) {
    _DefaultValueAccessor_4_4.touchHandler();
    _NumberValueAccessor_4_5.touchHandler();
  }

  void _handle_change_4_3($event) {
    _NumberValueAccessor_4_5.onChange($event.target.value);
  }

  void _handle_ngModelChange_7_0($event) {
    ctx.factor = $event;
  }

  void _handle_input_7_1($event) {
    _DefaultValueAccessor_7_4.onChange($event.target.value);
    _NumberValueAccessor_7_5.onChange($event.target.value);
  }

  void _handle_blur_7_2($event) {
    _DefaultValueAccessor_7_4.touchHandler();
    _NumberValueAccessor_7_5.touchHandler();
  }

  void _handle_change_7_3($event) {
    _NumberValueAccessor_7_5.onChange($event.target.value);
  }
}

AppView<import1.PowerBoostCalculatorComponent> viewFactory_PowerBoostCalculatorComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewPowerBoostCalculatorComponent0(parentView, parentIndex);
}

const List<dynamic> styles$PowerBoostCalculatorComponentHost = const [];

class _ViewPowerBoostCalculatorComponentHost0 extends AppView<dynamic> {
  ViewPowerBoostCalculatorComponent0 _compView_0;
  import1.PowerBoostCalculatorComponent _PowerBoostCalculatorComponent_0_4;
  _ViewPowerBoostCalculatorComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewPowerBoostCalculatorComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _PowerBoostCalculatorComponent_0_4 = new import1.PowerBoostCalculatorComponent();
    _compView_0.create(_PowerBoostCalculatorComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.PowerBoostCalculatorComponent>(0, this, rootEl, _PowerBoostCalculatorComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.PowerBoostCalculatorComponent) && (0 == nodeIndex))) {
      return _PowerBoostCalculatorComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_PowerBoostCalculatorComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewPowerBoostCalculatorComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.PowerBoostCalculatorComponent> PowerBoostCalculatorComponentNgFactory = const ComponentFactory<import1.PowerBoostCalculatorComponent>('power-boost-calculator', viewFactory_PowerBoostCalculatorComponentHost0, _PowerBoostCalculatorComponentMetadata);
const _PowerBoostCalculatorComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ngRef.registerComponent(
    PowerBoostCalculatorComponent,
    PowerBoostCalculatorComponentNgFactory,
  );
}