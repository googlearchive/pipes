// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_birthday1_component.dart';
export 'hero_birthday1_component.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_birthday1_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/common/pipes/date_pipe.dart' as import3;
import 'dart:core';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/angular.dart';

const List<dynamic> styles$HeroBirthdayComponent = const [];

class ViewHeroBirthdayComponent0 extends AppView<import1.HeroBirthdayComponent> {
  import2.Element _el_0;
  import2.Text _text_2;
  var _expr_0;
  import3.DatePipe _pipe_date_0;
  String Function(dynamic) _pipe_date_0_0;
  static RenderComponentType _renderType;
  ViewHeroBirthdayComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('hero-birthday');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$HeroBirthdayComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.HeroBirthdayComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'p', parentRenderNode);
    import2.Text _text_1 = new import2.Text('The hero\'s birthday is ');
    _el_0.append(_text_1);
    _text_2 = new import2.Text('');
    _el_0.append(_text_2);
    _pipe_date_0 = new import3.DatePipe();
    _pipe_date_0_0 = import8.pureProxy1(_pipe_date_0.transform);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.HeroBirthdayComponent _ctx = ctx;
    final currVal_0 = import8.interpolate0(_pipe_date_0_0(_ctx.birthday));
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.HeroBirthdayComponent> viewFactory_HeroBirthdayComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewHeroBirthdayComponent0(parentView, parentIndex);
}

const List<dynamic> styles$HeroBirthdayComponentHost = const [];

class _ViewHeroBirthdayComponentHost0 extends AppView<dynamic> {
  ViewHeroBirthdayComponent0 _compView_0;
  import1.HeroBirthdayComponent _HeroBirthdayComponent_0_5;
  _ViewHeroBirthdayComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroBirthdayComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroBirthdayComponent_0_5 = new import1.HeroBirthdayComponent();
    _compView_0.create(_HeroBirthdayComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.HeroBirthdayComponent>(0, this, rootEl, _HeroBirthdayComponent_0_5);
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

AppView viewFactory_HeroBirthdayComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewHeroBirthdayComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.HeroBirthdayComponent> HeroBirthdayComponentNgFactory = const ComponentFactory<import1.HeroBirthdayComponent>('hero-birthday', viewFactory_HeroBirthdayComponentHost0, _HeroBirthdayComponentMetadata);
const _HeroBirthdayComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroBirthdayComponent, HeroBirthdayComponentNgFactory);
  _ref0.initReflector();
}
