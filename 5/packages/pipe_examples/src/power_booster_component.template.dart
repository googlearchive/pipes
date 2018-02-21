// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'power_booster_component.dart';
export 'power_booster_component.dart';
import 'package:angular/angular.dart';
import 'exponential_strength_pipe.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'exponential_strength_pipe.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular/src/core/linker/app_view.dart';
import 'power_booster_component.dart' as import1;
import 'dart:html' as import2;
import 'exponential_strength_pipe.dart' as import3;
import 'dart:core';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/angular.dart';

const List<dynamic> styles$PowerBoosterComponent = const [];

class ViewPowerBoosterComponent0 extends AppView<import1.PowerBoosterComponent> {
  import2.Element _el_0;
  import2.Element _el_2;
  import2.Text _text_4;
  var _expr_0;
  import3.ExponentialStrengthPipe _pipe_exponentialStrength_0;
  num Function(num, num) _pipe_exponentialStrength_0_0;
  static RenderComponentType _renderType;
  ViewPowerBoosterComponent0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('power-booster');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$PowerBoosterComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.PowerBoosterComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h2', parentRenderNode);
    import2.Text _text_1 = new import2.Text('Power Booster');
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'p', parentRenderNode);
    import2.Text _text_3 = new import2.Text('Super power boost: ');
    _el_2.append(_text_3);
    _text_4 = new import2.Text('');
    _el_2.append(_text_4);
    _pipe_exponentialStrength_0 = new import3.ExponentialStrengthPipe();
    _pipe_exponentialStrength_0_0 = import8.pureProxy2(_pipe_exponentialStrength_0.transform);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final currVal_0 = import8.interpolate0(_pipe_exponentialStrength_0_0(2, 10));
    if (!identical(_expr_0, currVal_0)) {
      _text_4.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.PowerBoosterComponent> viewFactory_PowerBoosterComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewPowerBoosterComponent0(parentView, parentIndex);
}

const List<dynamic> styles$PowerBoosterComponentHost = const [];

class _ViewPowerBoosterComponentHost0 extends AppView<dynamic> {
  ViewPowerBoosterComponent0 _compView_0;
  import1.PowerBoosterComponent _PowerBoosterComponent_0_4;
  _ViewPowerBoosterComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewPowerBoosterComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _PowerBoosterComponent_0_4 = new import1.PowerBoosterComponent();
    _compView_0.create(_PowerBoosterComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.PowerBoosterComponent>(0, this, rootEl, _PowerBoosterComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.PowerBoosterComponent) && (0 == nodeIndex))) {
      return _PowerBoosterComponent_0_4;
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

AppView viewFactory_PowerBoosterComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewPowerBoosterComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.PowerBoosterComponent> PowerBoosterComponentNgFactory = const ComponentFactory<import1.PowerBoosterComponent>('power-booster', viewFactory_PowerBoosterComponentHost0, _PowerBoosterComponentMetadata);
const _PowerBoosterComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(PowerBoosterComponent, PowerBoosterComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
