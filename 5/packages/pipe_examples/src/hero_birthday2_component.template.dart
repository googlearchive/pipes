// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_birthday2_component.dart';
export 'hero_birthday2_component.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_birthday2_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/common/pipes/date_pipe.dart' as import3;
import 'dart:core';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/angular.dart';

const List<dynamic> styles$HeroBirthday2Component = const [];

class ViewHeroBirthday2Component0 extends AppView<import1.HeroBirthday2Component> {
  import2.Element _el_0;
  import2.Text _text_2;
  import2.ButtonElement _el_3;
  var _expr_0;
  import3.DatePipe _pipe_date_0;
  String Function(dynamic, String) _pipe_date_0_0;
  static RenderComponentType _renderType;
  ViewHeroBirthday2Component0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('hero-birthday2');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$HeroBirthday2Component);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.HeroBirthday2Component> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'p', parentRenderNode);
    import2.Text _text_1 = new import2.Text('The hero\'s birthday is ');
    _el_0.append(_text_1);
    _text_2 = new import2.Text('');
    _el_0.append(_text_2);
    _el_3 = createAndAppend(doc, 'button', parentRenderNode);
    import2.Text _text_4 = new import2.Text('Toggle Format');
    _el_3.append(_text_4);
    _el_3.addEventListener('click', eventHandler0(ctx.toggleFormat));
    _pipe_date_0 = new import3.DatePipe();
    _pipe_date_0_0 = import8.pureProxy2(_pipe_date_0.transform);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.HeroBirthday2Component _ctx = ctx;
    final currVal_0 = import8.interpolate0(_pipe_date_0_0(_ctx.birthday, _ctx.format));
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.HeroBirthday2Component> viewFactory_HeroBirthday2Component0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewHeroBirthday2Component0(parentView, parentIndex);
}

const List<dynamic> styles$HeroBirthday2ComponentHost = const [];

class _ViewHeroBirthday2ComponentHost0 extends AppView<dynamic> {
  ViewHeroBirthday2Component0 _compView_0;
  import1.HeroBirthday2Component _HeroBirthday2Component_0_4;
  _ViewHeroBirthday2ComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroBirthday2Component0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroBirthday2Component_0_4 = new import1.HeroBirthday2Component();
    _compView_0.create(_HeroBirthday2Component_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.HeroBirthday2Component>(0, this, rootEl, _HeroBirthday2Component_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.HeroBirthday2Component) && (0 == nodeIndex))) {
      return _HeroBirthday2Component_0_4;
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

AppView viewFactory_HeroBirthday2ComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHeroBirthday2ComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.HeroBirthday2Component> HeroBirthday2ComponentNgFactory = const ComponentFactory<import1.HeroBirthday2Component>('hero-birthday2', viewFactory_HeroBirthday2ComponentHost0, _HeroBirthday2ComponentMetadata);
const _HeroBirthday2ComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroBirthday2Component, HeroBirthday2ComponentNgFactory);
  _ref0.initReflector();
}
