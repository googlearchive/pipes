// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_async_message_component.dart';
export 'hero_async_message_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_async_message_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/common/pipes/async_pipe.dart' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/angular.dart';

const List<dynamic> styles$HeroAsyncMessageComponent = const [];

class ViewHeroAsyncMessageComponent0 extends AppView<import1.HeroAsyncMessageComponent> {
  import2.Element _el_0;
  import2.Element _el_2;
  import2.Text _text_4;
  import2.ButtonElement _el_5;
  var _expr_0;
  import3.AsyncPipe _pipe_async_0;
  static RenderComponentType _renderType;
  ViewHeroAsyncMessageComponent0(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('hero-message');
    _renderType ??= import7.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$HeroAsyncMessageComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.HeroAsyncMessageComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h2', parentRenderNode);
    import2.Text _text_1 = new import2.Text('Async Hero Message and AsyncPipe');
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'p', parentRenderNode);
    import2.Text _text_3 = new import2.Text('Message: ');
    _el_2.append(_text_3);
    _text_4 = new import2.Text('');
    _el_2.append(_text_4);
    _el_5 = createAndAppend(doc, 'button', parentRenderNode);
    import2.Text _text_6 = new import2.Text('Resend');
    _el_5.append(_text_6);
    _el_5.addEventListener('click', eventHandler0(ctx.resend));
    _pipe_async_0 = new import3.AsyncPipe(ref);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.HeroAsyncMessageComponent _ctx = ctx;
    final currVal_0 = import7.interpolate0(_pipe_async_0.transform(_ctx.message));
    if (!identical(_expr_0, currVal_0)) {
      _text_4.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    _pipe_async_0.ngOnDestroy();
  }
}

AppView<import1.HeroAsyncMessageComponent> viewFactory_HeroAsyncMessageComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewHeroAsyncMessageComponent0(parentView, parentIndex);
}

const List<dynamic> styles$HeroAsyncMessageComponentHost = const [];

class _ViewHeroAsyncMessageComponentHost0 extends AppView<dynamic> {
  ViewHeroAsyncMessageComponent0 _compView_0;
  import1.HeroAsyncMessageComponent _HeroAsyncMessageComponent_0_4;
  _ViewHeroAsyncMessageComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroAsyncMessageComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroAsyncMessageComponent_0_4 = new import1.HeroAsyncMessageComponent();
    _compView_0.create(_HeroAsyncMessageComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.HeroAsyncMessageComponent>(0, this, rootEl, _HeroAsyncMessageComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.HeroAsyncMessageComponent) && (0 == nodeIndex))) {
      return _HeroAsyncMessageComponent_0_4;
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

AppView viewFactory_HeroAsyncMessageComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHeroAsyncMessageComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.HeroAsyncMessageComponent> HeroAsyncMessageComponentNgFactory = const ComponentFactory<import1.HeroAsyncMessageComponent>('hero-message', viewFactory_HeroAsyncMessageComponentHost0, _HeroAsyncMessageComponentMetadata);
const _HeroAsyncMessageComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroAsyncMessageComponent, HeroAsyncMessageComponentNgFactory);
  _ref0.initReflector();
}
