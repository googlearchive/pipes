// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'flying_heroes_component.dart';
export 'flying_heroes_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'flying_heroes_pipe.dart';
import 'heroes.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'flying_heroes_pipe.template.dart' as _ref0;
import 'heroes.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_forms/angular_forms.template.dart' as _ref3;

import 'package:angular/src/core/linker/app_view.dart';
import 'flying_heroes_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular_forms/src/directives/checkbox_value_accessor.dart' as import3;
import 'package:angular_forms/src/directives/ng_model.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import6;
import 'flying_heroes_pipe.dart' as import7;
import 'dart:core';
import 'heroes.dart' as import9;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import11;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/di/opaque_token.dart' as import16;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import17;
import 'package:angular_forms/src/directives/ng_control.dart' as import18;

const List<dynamic> styles$FlyingHeroesComponent = const ['#flyers._ngcontent-%COMP%,#all._ngcontent-%COMP% { font-style:italic; }'];

class ViewFlyingHeroesComponent0 extends AppView<import1.FlyingHeroesComponent> {
  import2.Element _el_0;
  import2.Text _text_1;
  import2.Element _el_2;
  import2.InputElement _el_4;
  import2.InputElement _el_5;
  import3.CheckboxControlValueAccessor _CheckboxControlValueAccessor_5_4;
  List<dynamic> _NgValueAccessor_5_5;
  import4.NgModel _NgModel_5_6;
  import2.Element _el_7;
  import2.InputElement _el_8;
  import3.CheckboxControlValueAccessor _CheckboxControlValueAccessor_8_4;
  List<dynamic> _NgValueAccessor_8_5;
  import4.NgModel _NgModel_8_6;
  import2.ButtonElement _el_10;
  import2.Element _el_12;
  import2.DivElement _el_14;
  ViewContainer _appEl_15;
  import6.NgFor _NgFor_15_7;
  import2.Element _el_16;
  import2.DivElement _el_18;
  ViewContainer _appEl_19;
  import6.NgFor _NgFor_19_7;
  var _expr_0;
  var _expr_3;
  var _expr_4;
  import7.FlyingHeroesPipe _pipe_flyingHeroes_0;
  List<import9.Hero> Function(List<import9.Hero>) _pipe_flyingHeroes_0_0;
  static RenderComponentType _renderType;
  ViewFlyingHeroesComponent0(AppView<dynamic> parentView, num parentIndex) : super(import11.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('flying-heroes');
    _renderType ??= import13.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$FlyingHeroesComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.FlyingHeroesComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h2', parentRenderNode);
    addShimE(_el_0);
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_2);
    import2.Text _text_3 = new import2.Text('New hero:');
    _el_2.append(_text_3);
    _el_4 = createAndAppend(doc, 'input', _el_2);
    createAttr(_el_4, 'placeholder', 'hero name');
    createAttr(_el_4, 'type', 'text');
    addShimC(_el_4);
    _el_5 = createAndAppend(doc, 'input', _el_2);
    createAttr(_el_5, 'id', 'can-fly');
    createAttr(_el_5, 'type', 'checkbox');
    addShimC(_el_5);
    _CheckboxControlValueAccessor_5_4 = new import3.CheckboxControlValueAccessor(_el_5);
    _NgValueAccessor_5_5 = [_CheckboxControlValueAccessor_5_4];
    _NgModel_5_6 = new import4.NgModel(null, _NgValueAccessor_5_5);
    import2.Text _text_6 = new import2.Text('can fly');
    _el_2.append(_text_6);
    _el_7 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_7);
    _el_8 = createAndAppend(doc, 'input', _el_7);
    createAttr(_el_8, 'id', 'mutate');
    createAttr(_el_8, 'type', 'checkbox');
    addShimC(_el_8);
    _CheckboxControlValueAccessor_8_4 = new import3.CheckboxControlValueAccessor(_el_8);
    _NgValueAccessor_8_5 = [_CheckboxControlValueAccessor_8_4];
    _NgModel_8_6 = new import4.NgModel(null, _NgValueAccessor_8_5);
    import2.Text _text_9 = new import2.Text('Mutate array');
    _el_7.append(_text_9);
    _el_10 = createAndAppend(doc, 'button', _el_7);
    addShimC(_el_10);
    import2.Text _text_11 = new import2.Text('Reset');
    _el_10.append(_text_11);
    _el_12 = createAndAppend(doc, 'h4', parentRenderNode);
    addShimE(_el_12);
    import2.Text _text_13 = new import2.Text('Heroes who fly (piped)');
    _el_12.append(_text_13);
    _el_14 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_14, 'id', 'flyers');
    addShimC(_el_14);
    var _anchor_15 = ngAnchor.clone(false);
    _el_14.append(_anchor_15);
    _appEl_15 = new ViewContainer(15, 14, this, _anchor_15);
    TemplateRef _TemplateRef_15_6 = new TemplateRef(_appEl_15, viewFactory_FlyingHeroesComponent1);
    _NgFor_15_7 = new import6.NgFor(_appEl_15, _TemplateRef_15_6);
    _el_16 = createAndAppend(doc, 'h4', parentRenderNode);
    addShimE(_el_16);
    import2.Text _text_17 = new import2.Text('All Heroes (no pipe)');
    _el_16.append(_text_17);
    _el_18 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_18, 'id', 'all');
    addShimC(_el_18);
    var _anchor_19 = ngAnchor.clone(false);
    _el_18.append(_anchor_19);
    _appEl_19 = new ViewContainer(19, 18, this, _anchor_19);
    TemplateRef _TemplateRef_19_6 = new TemplateRef(_appEl_19, viewFactory_FlyingHeroesComponent2);
    _NgFor_19_7 = new import6.NgFor(_appEl_19, _TemplateRef_19_6);
    import13.appViewUtils.eventManager.addEventListener(_el_4, 'keyup.enter', eventHandler1(_handle_keyup_enter_4_0));
    _el_5.addEventListener('change', eventHandler1(_handle_change_5_1));
    _el_5.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_5_4.touchHandler));
    final subscription_0 = _NgModel_5_6.update.listen(eventHandler1(_handle_ngModelChange_5_0));
    _el_8.addEventListener('change', eventHandler1(_handle_change_8_1));
    _el_8.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_8_4.touchHandler));
    final subscription_1 = _NgModel_8_6.update.listen(eventHandler1(_handle_ngModelChange_8_0));
    _el_10.addEventListener('click', eventHandler0(ctx.reset));
    _pipe_flyingHeroes_0 = new import7.FlyingHeroesPipe();
    _pipe_flyingHeroes_0_0 = import13.pureProxy1(_pipe_flyingHeroes_0.transform);
    init(const [], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import3.CheckboxControlValueAccessor) && (5 == nodeIndex))) {
      return _CheckboxControlValueAccessor_5_4;
    }
    if ((identical(token, const import16.OpaqueToken<import17.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (5 == nodeIndex))) {
      return _NgValueAccessor_5_5;
    }
    if (((identical(token, import4.NgModel) || identical(token, import18.NgControl)) && (5 == nodeIndex))) {
      return _NgModel_5_6;
    }
    if ((identical(token, import3.CheckboxControlValueAccessor) && (8 == nodeIndex))) {
      return _CheckboxControlValueAccessor_8_4;
    }
    if ((identical(token, const import16.OpaqueToken<import17.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (8 == nodeIndex))) {
      return _NgValueAccessor_8_5;
    }
    if (((identical(token, import4.NgModel) || identical(token, import18.NgControl)) && (8 == nodeIndex))) {
      return _NgModel_8_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.FlyingHeroesComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_5_6.model = _ctx.canFly;
    _NgModel_5_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_5_6.ngOnInit();
    }
    changed = false;
    _NgModel_8_6.model = _ctx.mutate;
    _NgModel_8_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_8_6.ngOnInit();
    }
    final currVal_3 = _pipe_flyingHeroes_0_0(_ctx.heroes);
    if (!identical(_expr_3, currVal_3)) {
      _NgFor_15_7.ngForOf = currVal_3;
      _expr_3 = currVal_3;
    }
    _NgFor_15_7.ngDoCheck();
    final currVal_4 = _ctx.heroes;
    if (!identical(_expr_4, currVal_4)) {
      _NgFor_19_7.ngForOf = currVal_4;
      _expr_4 = currVal_4;
    }
    _NgFor_19_7.ngDoCheck();
    _appEl_15.detectChangesInNestedViews();
    _appEl_19.detectChangesInNestedViews();
    final currVal_0 = (_ctx.title ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    _appEl_15?.destroyNestedViews();
    _appEl_19?.destroyNestedViews();
  }

  void _handle_keyup_enter_4_0($event) {
    final local_box = _el_4;
    ctx.addHero(local_box.value);
    local_box.value = '';
  }

  void _handle_ngModelChange_5_0($event) {
    ctx.canFly = $event;
  }

  void _handle_change_5_1($event) {
    _CheckboxControlValueAccessor_5_4.onChange($event.target.checked);
  }

  void _handle_ngModelChange_8_0($event) {
    ctx.mutate = $event;
  }

  void _handle_change_8_1($event) {
    _CheckboxControlValueAccessor_8_4.onChange($event.target.checked);
  }
}

AppView<import1.FlyingHeroesComponent> viewFactory_FlyingHeroesComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewFlyingHeroesComponent0(parentView, parentIndex);
}

class _ViewFlyingHeroesComponent1 extends AppView<import1.FlyingHeroesComponent> {
  import2.DivElement _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewFlyingHeroesComponent1(AppView<dynamic> parentView, num parentIndex) : super(import11.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewFlyingHeroesComponent0._renderType;
  }
  @override
  ComponentRef<import1.FlyingHeroesComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final local_hero = locals['\$implicit'];
    final currVal_0 = import13.interpolate0(local_hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.FlyingHeroesComponent> viewFactory_FlyingHeroesComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewFlyingHeroesComponent1(parentView, parentIndex);
}

class _ViewFlyingHeroesComponent2 extends AppView<import1.FlyingHeroesComponent> {
  import2.DivElement _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewFlyingHeroesComponent2(AppView<dynamic> parentView, num parentIndex) : super(import11.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewFlyingHeroesComponent0._renderType;
  }
  @override
  ComponentRef<import1.FlyingHeroesComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import9.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import13.interpolate0(local_hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.FlyingHeroesComponent> viewFactory_FlyingHeroesComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewFlyingHeroesComponent2(parentView, parentIndex);
}

const List<dynamic> styles$FlyingHeroesComponentHost = const [];

class _ViewFlyingHeroesComponentHost0 extends AppView<dynamic> {
  ViewFlyingHeroesComponent0 _compView_0;
  import1.FlyingHeroesComponent _FlyingHeroesComponent_0_4;
  _ViewFlyingHeroesComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import11.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewFlyingHeroesComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _FlyingHeroesComponent_0_4 = new import1.FlyingHeroesComponent();
    _compView_0.create(_FlyingHeroesComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.FlyingHeroesComponent>(0, this, rootEl, _FlyingHeroesComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.FlyingHeroesComponent) && (0 == nodeIndex))) {
      return _FlyingHeroesComponent_0_4;
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

AppView viewFactory_FlyingHeroesComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewFlyingHeroesComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.FlyingHeroesComponent> FlyingHeroesComponentNgFactory = const ComponentFactory<import1.FlyingHeroesComponent>('flying-heroes', viewFactory_FlyingHeroesComponentHost0, _FlyingHeroesComponentMetadata);
const List<dynamic> styles$FlyingHeroesImpureComponent = const ['.flyers._ngcontent-%COMP%,.all._ngcontent-%COMP% { font-style:italic; }'];

class ViewFlyingHeroesImpureComponent0 extends AppView<import1.FlyingHeroesImpureComponent> {
  import2.Element _el_0;
  import2.Text _text_1;
  import2.Element _el_2;
  import2.InputElement _el_4;
  import2.InputElement _el_5;
  import3.CheckboxControlValueAccessor _CheckboxControlValueAccessor_5_4;
  List<dynamic> _NgValueAccessor_5_5;
  import4.NgModel _NgModel_5_6;
  import2.Element _el_7;
  import2.InputElement _el_8;
  import3.CheckboxControlValueAccessor _CheckboxControlValueAccessor_8_4;
  List<dynamic> _NgValueAccessor_8_5;
  import4.NgModel _NgModel_8_6;
  import2.ButtonElement _el_10;
  import2.Element _el_12;
  import2.DivElement _el_14;
  ViewContainer _appEl_15;
  import6.NgFor _NgFor_15_7;
  import2.Element _el_16;
  import2.DivElement _el_18;
  ViewContainer _appEl_19;
  import6.NgFor _NgFor_19_7;
  var _expr_0;
  var _expr_3;
  var _expr_4;
  import7.FlyingHeroesImpurePipe _pipe_flyingHeroes_0;
  static RenderComponentType _renderType;
  ViewFlyingHeroesImpureComponent0(AppView<dynamic> parentView, num parentIndex) : super(import11.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('flying-heroes-impure');
    _renderType ??= import13.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$FlyingHeroesImpureComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.FlyingHeroesImpureComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h2', parentRenderNode);
    addShimE(_el_0);
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_2);
    import2.Text _text_3 = new import2.Text('New hero:');
    _el_2.append(_text_3);
    _el_4 = createAndAppend(doc, 'input', _el_2);
    createAttr(_el_4, 'placeholder', 'hero name');
    createAttr(_el_4, 'type', 'text');
    addShimC(_el_4);
    _el_5 = createAndAppend(doc, 'input', _el_2);
    createAttr(_el_5, 'id', 'can-fly');
    createAttr(_el_5, 'type', 'checkbox');
    addShimC(_el_5);
    _CheckboxControlValueAccessor_5_4 = new import3.CheckboxControlValueAccessor(_el_5);
    _NgValueAccessor_5_5 = [_CheckboxControlValueAccessor_5_4];
    _NgModel_5_6 = new import4.NgModel(null, _NgValueAccessor_5_5);
    import2.Text _text_6 = new import2.Text('can fly');
    _el_2.append(_text_6);
    _el_7 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_7);
    _el_8 = createAndAppend(doc, 'input', _el_7);
    createAttr(_el_8, 'id', 'mutate');
    createAttr(_el_8, 'type', 'checkbox');
    addShimC(_el_8);
    _CheckboxControlValueAccessor_8_4 = new import3.CheckboxControlValueAccessor(_el_8);
    _NgValueAccessor_8_5 = [_CheckboxControlValueAccessor_8_4];
    _NgModel_8_6 = new import4.NgModel(null, _NgValueAccessor_8_5);
    import2.Text _text_9 = new import2.Text('Mutate array');
    _el_7.append(_text_9);
    _el_10 = createAndAppend(doc, 'button', _el_7);
    addShimC(_el_10);
    import2.Text _text_11 = new import2.Text('Reset');
    _el_10.append(_text_11);
    _el_12 = createAndAppend(doc, 'h4', parentRenderNode);
    addShimE(_el_12);
    import2.Text _text_13 = new import2.Text('Heroes who fly (piped)');
    _el_12.append(_text_13);
    _el_14 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_14, 'id', 'flyers');
    addShimC(_el_14);
    var _anchor_15 = ngAnchor.clone(false);
    _el_14.append(_anchor_15);
    _appEl_15 = new ViewContainer(15, 14, this, _anchor_15);
    TemplateRef _TemplateRef_15_6 = new TemplateRef(_appEl_15, viewFactory_FlyingHeroesImpureComponent1);
    _NgFor_15_7 = new import6.NgFor(_appEl_15, _TemplateRef_15_6);
    _el_16 = createAndAppend(doc, 'h4', parentRenderNode);
    addShimE(_el_16);
    import2.Text _text_17 = new import2.Text('All Heroes (no pipe)');
    _el_16.append(_text_17);
    _el_18 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_18, 'id', 'all');
    addShimC(_el_18);
    var _anchor_19 = ngAnchor.clone(false);
    _el_18.append(_anchor_19);
    _appEl_19 = new ViewContainer(19, 18, this, _anchor_19);
    TemplateRef _TemplateRef_19_6 = new TemplateRef(_appEl_19, viewFactory_FlyingHeroesImpureComponent2);
    _NgFor_19_7 = new import6.NgFor(_appEl_19, _TemplateRef_19_6);
    import13.appViewUtils.eventManager.addEventListener(_el_4, 'keyup.enter', eventHandler1(_handle_keyup_enter_4_0));
    _el_5.addEventListener('change', eventHandler1(_handle_change_5_1));
    _el_5.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_5_4.touchHandler));
    final subscription_0 = _NgModel_5_6.update.listen(eventHandler1(_handle_ngModelChange_5_0));
    _el_8.addEventListener('change', eventHandler1(_handle_change_8_1));
    _el_8.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_8_4.touchHandler));
    final subscription_1 = _NgModel_8_6.update.listen(eventHandler1(_handle_ngModelChange_8_0));
    _el_10.addEventListener('click', eventHandler0(ctx.reset));
    _pipe_flyingHeroes_0 = new import7.FlyingHeroesImpurePipe();
    init(const [], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import3.CheckboxControlValueAccessor) && (5 == nodeIndex))) {
      return _CheckboxControlValueAccessor_5_4;
    }
    if ((identical(token, const import16.OpaqueToken<import17.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (5 == nodeIndex))) {
      return _NgValueAccessor_5_5;
    }
    if (((identical(token, import4.NgModel) || identical(token, import18.NgControl)) && (5 == nodeIndex))) {
      return _NgModel_5_6;
    }
    if ((identical(token, import3.CheckboxControlValueAccessor) && (8 == nodeIndex))) {
      return _CheckboxControlValueAccessor_8_4;
    }
    if ((identical(token, const import16.OpaqueToken<import17.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (8 == nodeIndex))) {
      return _NgValueAccessor_8_5;
    }
    if (((identical(token, import4.NgModel) || identical(token, import18.NgControl)) && (8 == nodeIndex))) {
      return _NgModel_8_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.FlyingHeroesImpureComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_5_6.model = _ctx.canFly;
    _NgModel_5_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_5_6.ngOnInit();
    }
    changed = false;
    _NgModel_8_6.model = _ctx.mutate;
    _NgModel_8_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_8_6.ngOnInit();
    }
    final currVal_3 = _pipe_flyingHeroes_0.transform(_ctx.heroes);
    if (!identical(_expr_3, currVal_3)) {
      _NgFor_15_7.ngForOf = currVal_3;
      _expr_3 = currVal_3;
    }
    _NgFor_15_7.ngDoCheck();
    final currVal_4 = _ctx.heroes;
    if (!identical(_expr_4, currVal_4)) {
      _NgFor_19_7.ngForOf = currVal_4;
      _expr_4 = currVal_4;
    }
    _NgFor_19_7.ngDoCheck();
    _appEl_15.detectChangesInNestedViews();
    _appEl_19.detectChangesInNestedViews();
    final currVal_0 = import13.interpolate0(_ctx.title);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    _appEl_15?.destroyNestedViews();
    _appEl_19?.destroyNestedViews();
  }

  void _handle_keyup_enter_4_0($event) {
    final local_box = _el_4;
    ctx.addHero(local_box.value);
    local_box.value = '';
  }

  void _handle_ngModelChange_5_0($event) {
    ctx.canFly = $event;
  }

  void _handle_change_5_1($event) {
    _CheckboxControlValueAccessor_5_4.onChange($event.target.checked);
  }

  void _handle_ngModelChange_8_0($event) {
    ctx.mutate = $event;
  }

  void _handle_change_8_1($event) {
    _CheckboxControlValueAccessor_8_4.onChange($event.target.checked);
  }
}

AppView<import1.FlyingHeroesImpureComponent> viewFactory_FlyingHeroesImpureComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewFlyingHeroesImpureComponent0(parentView, parentIndex);
}

class _ViewFlyingHeroesImpureComponent1 extends AppView<import1.FlyingHeroesImpureComponent> {
  import2.DivElement _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewFlyingHeroesImpureComponent1(AppView<dynamic> parentView, num parentIndex) : super(import11.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewFlyingHeroesImpureComponent0._renderType;
  }
  @override
  ComponentRef<import1.FlyingHeroesImpureComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final local_hero = locals['\$implicit'];
    final currVal_0 = import13.interpolate0(local_hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.FlyingHeroesImpureComponent> viewFactory_FlyingHeroesImpureComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewFlyingHeroesImpureComponent1(parentView, parentIndex);
}

class _ViewFlyingHeroesImpureComponent2 extends AppView<import1.FlyingHeroesImpureComponent> {
  import2.DivElement _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewFlyingHeroesImpureComponent2(AppView<dynamic> parentView, num parentIndex) : super(import11.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewFlyingHeroesImpureComponent0._renderType;
  }
  @override
  ComponentRef<import1.FlyingHeroesImpureComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import9.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import13.interpolate0(local_hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.FlyingHeroesImpureComponent> viewFactory_FlyingHeroesImpureComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewFlyingHeroesImpureComponent2(parentView, parentIndex);
}

const List<dynamic> styles$FlyingHeroesImpureComponentHost = const [];

class _ViewFlyingHeroesImpureComponentHost0 extends AppView<dynamic> {
  ViewFlyingHeroesImpureComponent0 _compView_0;
  import1.FlyingHeroesImpureComponent _FlyingHeroesImpureComponent_0_4;
  _ViewFlyingHeroesImpureComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import11.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewFlyingHeroesImpureComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _FlyingHeroesImpureComponent_0_4 = new import1.FlyingHeroesImpureComponent();
    _compView_0.create(_FlyingHeroesImpureComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.FlyingHeroesImpureComponent>(0, this, rootEl, _FlyingHeroesImpureComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.FlyingHeroesImpureComponent) && (0 == nodeIndex))) {
      return _FlyingHeroesImpureComponent_0_4;
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

AppView viewFactory_FlyingHeroesImpureComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewFlyingHeroesImpureComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.FlyingHeroesImpureComponent> FlyingHeroesImpureComponentNgFactory = const ComponentFactory<import1.FlyingHeroesImpureComponent>('flying-heroes-impure', viewFactory_FlyingHeroesImpureComponentHost0, _FlyingHeroesImpureComponentMetadata);
const _FlyingHeroesComponentMetadata = const [];
const _FlyingHeroesImpureComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ngRef.registerComponent(
    FlyingHeroesComponent,
    FlyingHeroesComponentNgFactory,
  );
  _ngRef.registerComponent(
    FlyingHeroesImpureComponent,
    FlyingHeroesImpureComponentNgFactory,
  );
}
