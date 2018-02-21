// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_list_component.dart';
export 'hero_list_component.dart';
import 'package:angular/angular.dart';
import 'fetch_json_pipe.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'fetch_json_pipe.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_list_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'fetch_json_pipe.dart' as import5;
import 'package:angular/src/common/pipes/json_pipe.dart' as import6;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';

const List<dynamic> styles$HeroListComponent = const [];

class ViewHeroListComponent0 extends AppView<import1.HeroListComponent> {
  import2.Element _el_0;
  ViewContainer _appEl_2;
  import4.NgFor _NgFor_2_7;
  import2.Element _el_3;
  import2.Text _text_5;
  var _expr_0;
  var _expr_1;
  import5.FetchJsonPipe _pipe_fetch_0;
  import5.FetchJsonPipe _pipe_fetch_1;
  import6.JsonPipe _pipe_json_2;
  static RenderComponentType _renderType;
  ViewHeroListComponent0(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('hero-list');
    _renderType ??= import10.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$HeroListComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.HeroListComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h2', parentRenderNode);
    import2.Text _text_1 = new import2.Text('Heroes from JSON File');
    _el_0.append(_text_1);
    var _anchor_2 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_6 = new TemplateRef(_appEl_2, viewFactory_HeroListComponent1);
    _NgFor_2_7 = new import4.NgFor(_appEl_2, _TemplateRef_2_6);
    _el_3 = createAndAppend(doc, 'p', parentRenderNode);
    import2.Text _text_4 = new import2.Text('Heroes as JSON: ');
    _el_3.append(_text_4);
    _text_5 = new import2.Text('');
    _el_3.append(_text_5);
    _pipe_fetch_0 = new import5.FetchJsonPipe();
    _pipe_fetch_1 = new import5.FetchJsonPipe();
    _pipe_json_2 = new import6.JsonPipe();
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final currVal_0 = _pipe_fetch_0.transform('heroes.json');
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_2_7.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_2_7.ngDoCheck();
    _appEl_2.detectChangesInNestedViews();
    final currVal_1 = import10.interpolate0(_pipe_json_2.transform(_pipe_fetch_1.transform('heroes.json')));
    if (!identical(_expr_1, currVal_1)) {
      _text_5.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    _appEl_2?.destroyNestedViews();
  }
}

AppView<import1.HeroListComponent> viewFactory_HeroListComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewHeroListComponent0(parentView, parentIndex);
}

class _ViewHeroListComponent1 extends AppView<import1.HeroListComponent> {
  import2.DivElement _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewHeroListComponent1(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHeroListComponent0._renderType;
  }
  @override
  ComponentRef<import1.HeroListComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('div');
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final local_hero = locals['\$implicit'];
    final currVal_0 = import10.interpolate0(local_hero['name']);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.HeroListComponent> viewFactory_HeroListComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHeroListComponent1(parentView, parentIndex);
}

const List<dynamic> styles$HeroListComponentHost = const [];

class _ViewHeroListComponentHost0 extends AppView<dynamic> {
  ViewHeroListComponent0 _compView_0;
  import1.HeroListComponent _HeroListComponent_0_4;
  _ViewHeroListComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroListComponent_0_4 = new import1.HeroListComponent();
    _compView_0.create(_HeroListComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.HeroListComponent>(0, this, rootEl, _HeroListComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.HeroListComponent) && (0 == nodeIndex))) {
      return _HeroListComponent_0_4;
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

AppView viewFactory_HeroListComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHeroListComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.HeroListComponent> HeroListComponentNgFactory = const ComponentFactory<import1.HeroListComponent>('hero-list', viewFactory_HeroListComponentHost0, _HeroListComponentMetadata);
const _HeroListComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroListComponent, HeroListComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
