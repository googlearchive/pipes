// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/angular.dart';
import 'src/flying_heroes_component.dart';
import 'src/hero_async_message_component.dart';
import 'src/hero_birthday1_component.dart';
import 'src/hero_birthday2_component.dart';
import 'src/hero_list_component.dart';
import 'src/power_boost_calculator_component.dart';
import 'src/power_booster_component.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'src/flying_heroes_component.template.dart' as _ref1;
import 'src/hero_async_message_component.template.dart' as _ref2;
import 'src/hero_birthday1_component.template.dart' as _ref3;
import 'src/hero_birthday2_component.template.dart' as _ref4;
import 'src/hero_list_component.template.dart' as _ref5;
import 'src/power_boost_calculator_component.template.dart' as _ref6;
import 'src/power_booster_component.template.dart' as _ref7;

import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import1;
import 'dart:html' as import2;
import 'src/hero_birthday1_component.template.dart' as import3;
import 'src/hero_birthday1_component.dart' as import4;
import 'src/hero_birthday2_component.template.dart' as import5;
import 'src/hero_birthday2_component.dart' as import6;
import 'src/power_booster_component.template.dart' as import7;
import 'src/power_booster_component.dart' as import8;
import 'src/power_boost_calculator_component.template.dart' as import9;
import 'src/power_boost_calculator_component.dart' as import10;
import 'src/flying_heroes_component.template.dart' as import11;
import 'src/flying_heroes_component.dart' as import12;
import 'src/hero_async_message_component.template.dart' as import13;
import 'src/hero_async_message_component.dart' as import14;
import 'src/hero_list_component.template.dart' as import15;
import 'src/hero_list_component.dart' as import16;
import 'package:angular/src/common/pipes/date_pipe.dart' as import17;
import 'dart:core';
import 'package:angular/src/common/pipes/uppercase_pipe.dart' as import19;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import21;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import23;
import 'package:angular/angular.dart';

const List<dynamic> styles$AppComponent = const [];

class ViewAppComponent0 extends AppView<import1.AppComponent> {
  import2.AnchorElement _el_0;
  import2.Element _el_1;
  import2.AnchorElement _el_3;
  import2.Element _el_5;
  import2.AnchorElement _el_6;
  import2.Element _el_8;
  import2.AnchorElement _el_9;
  import2.Element _el_11;
  import2.AnchorElement _el_12;
  import2.Element _el_14;
  import2.AnchorElement _el_15;
  import2.Element _el_17;
  import2.AnchorElement _el_18;
  import2.Element _el_20;
  import2.AnchorElement _el_21;
  import2.Element _el_23;
  import2.AnchorElement _el_24;
  import2.Element _el_26;
  import2.AnchorElement _el_27;
  import2.Element _el_29;
  import2.AnchorElement _el_30;
  import2.Element _el_32;
  import2.Element _el_33;
  import2.AnchorElement _el_34;
  import2.Element _el_35;
  import2.Element _el_37;
  import3.ViewHeroBirthdayComponent0 _compView_37;
  import4.HeroBirthdayComponent _HeroBirthdayComponent_37_4;
  import2.Element _el_38;
  import2.AnchorElement _el_39;
  import2.Element _el_40;
  import2.Element _el_42;
  import2.Text _text_43;
  import2.Element _el_44;
  import2.Text _text_45;
  import2.Element _el_46;
  import2.AnchorElement _el_47;
  import2.Element _el_48;
  import2.Element _el_50;
  import5.ViewHeroBirthday2Component0 _compView_50;
  import6.HeroBirthday2Component _HeroBirthday2Component_50_4;
  import2.Element _el_51;
  import2.AnchorElement _el_52;
  import2.Element _el_53;
  import2.Element _el_55;
  import2.Text _text_56;
  import2.Element _el_57;
  import2.Text _text_58;
  import2.Element _el_59;
  import2.Text _text_60;
  import2.Element _el_61;
  import2.AnchorElement _el_62;
  import2.Element _el_63;
  import7.ViewPowerBoosterComponent0 _compView_63;
  import8.PowerBoosterComponent _PowerBoosterComponent_63_4;
  import2.Element _el_64;
  import2.AnchorElement _el_65;
  import2.Element _el_66;
  import9.ViewPowerBoostCalculatorComponent0 _compView_66;
  import10.PowerBoostCalculatorComponent _PowerBoostCalculatorComponent_66_4;
  import2.Element _el_67;
  import2.AnchorElement _el_68;
  import2.Element _el_69;
  import11.ViewFlyingHeroesComponent0 _compView_69;
  import12.FlyingHeroesComponent _FlyingHeroesComponent_69_4;
  import2.Element _el_70;
  import2.AnchorElement _el_71;
  import2.Element _el_72;
  import11.ViewFlyingHeroesImpureComponent0 _compView_72;
  import12.FlyingHeroesImpureComponent _FlyingHeroesImpureComponent_72_4;
  import2.Element _el_73;
  import2.AnchorElement _el_74;
  import2.Element _el_75;
  import13.ViewHeroAsyncMessageComponent0 _compView_75;
  import14.HeroAsyncMessageComponent _HeroAsyncMessageComponent_75_4;
  import2.Element _el_76;
  import2.AnchorElement _el_77;
  import2.Element _el_78;
  import15.ViewHeroListComponent0 _compView_78;
  import16.HeroListComponent _HeroListComponent_78_4;
  import2.DivElement _el_79;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  import17.DatePipe _pipe_date_0;
  String Function(dynamic) _pipe_date_0_0;
  String Function(dynamic, String) _pipe_date_0_1;
  String Function(dynamic) _pipe_date_0_2;
  String Function(dynamic, String) _pipe_date_0_3;
  String Function(dynamic, String) _pipe_date_0_4;
  import19.UpperCasePipe _pipe_uppercase_1;
  String Function(String) _pipe_uppercase_1_0;
  String Function(String) _pipe_uppercase_1_1;
  String Function(String) _pipe_uppercase_1_2;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, num parentIndex) : super(import21.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-app');
    _renderType ??= import23.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.AppComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_0, 'id', 'toc');
    _el_1 = createAndAppend(doc, 'h1', parentRenderNode);
    import2.Text _text_2 = new import2.Text('Pipes');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_3, 'href', '#happy-birthday1');
    import2.Text _text_4 = new import2.Text('Happy Birthday v1');
    _el_3.append(_text_4);
    _el_5 = createAndAppend(doc, 'br', parentRenderNode);
    _el_6 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_6, 'href', '#birthday-date-pipe');
    import2.Text _text_7 = new import2.Text('Birthday DatePipe');
    _el_6.append(_text_7);
    _el_8 = createAndAppend(doc, 'br', parentRenderNode);
    _el_9 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_9, 'href', '#happy-birthday2');
    import2.Text _text_10 = new import2.Text('Happy Birthday v2');
    _el_9.append(_text_10);
    _el_11 = createAndAppend(doc, 'br', parentRenderNode);
    _el_12 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_12, 'href', '#birthday-pipe-chaining');
    import2.Text _text_13 = new import2.Text('Birthday Pipe Chaining');
    _el_12.append(_text_13);
    _el_14 = createAndAppend(doc, 'br', parentRenderNode);
    _el_15 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_15, 'href', '#power-booster');
    import2.Text _text_16 = new import2.Text('Power Booster custom pipe');
    _el_15.append(_text_16);
    _el_17 = createAndAppend(doc, 'br', parentRenderNode);
    _el_18 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_18, 'href', '#power-boost-calc');
    import2.Text _text_19 = new import2.Text('Power Boost Calculator custom pipe with params');
    _el_18.append(_text_19);
    _el_20 = createAndAppend(doc, 'br', parentRenderNode);
    _el_21 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_21, 'href', '#flying-heroes');
    import2.Text _text_22 = new import2.Text('Flying Heroes filter pipe (pure)');
    _el_21.append(_text_22);
    _el_23 = createAndAppend(doc, 'br', parentRenderNode);
    _el_24 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_24, 'href', '#flying-heroes-impure');
    import2.Text _text_25 = new import2.Text('Flying Heroes filter pipe (impure)');
    _el_24.append(_text_25);
    _el_26 = createAndAppend(doc, 'br', parentRenderNode);
    _el_27 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_27, 'href', '#hero-message');
    import2.Text _text_28 = new import2.Text('Async Hero Message and AsyncPipe');
    _el_27.append(_text_28);
    _el_29 = createAndAppend(doc, 'br', parentRenderNode);
    _el_30 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_30, 'href', '#hero-list');
    import2.Text _text_31 = new import2.Text('Hero List with caching FetchJsonPipe');
    _el_30.append(_text_31);
    _el_32 = createAndAppend(doc, 'br', parentRenderNode);
    _el_33 = createAndAppend(doc, 'hr', parentRenderNode);
    _el_34 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_34, 'id', 'happy-birthday1');
    _el_35 = createAndAppend(doc, 'h2', parentRenderNode);
    import2.Text _text_36 = new import2.Text('Hero Birthday v1');
    _el_35.append(_text_36);
    _compView_37 = new import3.ViewHeroBirthdayComponent0(this, 37);
    _el_37 = _compView_37.rootEl;
    parentRenderNode.append(_el_37);
    _HeroBirthdayComponent_37_4 = new import4.HeroBirthdayComponent();
    _compView_37.create(_HeroBirthdayComponent_37_4, []);
    _el_38 = createAndAppend(doc, 'hr', parentRenderNode);
    _el_39 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_39, 'id', 'birthday-date-pipe');
    _el_40 = createAndAppend(doc, 'h2', parentRenderNode);
    import2.Text _text_41 = new import2.Text('Birthday DatePipe');
    _el_40.append(_text_41);
    _el_42 = createAndAppend(doc, 'p', parentRenderNode);
    _text_43 = new import2.Text('');
    _el_42.append(_text_43);
    _el_44 = createAndAppend(doc, 'p', parentRenderNode);
    _text_45 = new import2.Text('');
    _el_44.append(_text_45);
    _el_46 = createAndAppend(doc, 'hr', parentRenderNode);
    _el_47 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_47, 'id', 'happy-birthday2');
    _el_48 = createAndAppend(doc, 'h2', parentRenderNode);
    import2.Text _text_49 = new import2.Text('Hero Birthday v2');
    _el_48.append(_text_49);
    _compView_50 = new import5.ViewHeroBirthday2Component0(this, 50);
    _el_50 = _compView_50.rootEl;
    parentRenderNode.append(_el_50);
    _HeroBirthday2Component_50_4 = new import6.HeroBirthday2Component();
    _compView_50.create(_HeroBirthday2Component_50_4, []);
    _el_51 = createAndAppend(doc, 'hr', parentRenderNode);
    _el_52 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_52, 'id', 'birthday-pipe-chaining');
    _el_53 = createAndAppend(doc, 'h2', parentRenderNode);
    import2.Text _text_54 = new import2.Text('Birthday Pipe Chaining');
    _el_53.append(_text_54);
    _el_55 = createAndAppend(doc, 'p', parentRenderNode);
    _text_56 = new import2.Text('');
    _el_55.append(_text_56);
    _el_57 = createAndAppend(doc, 'p', parentRenderNode);
    _text_58 = new import2.Text('');
    _el_57.append(_text_58);
    _el_59 = createAndAppend(doc, 'p', parentRenderNode);
    _text_60 = new import2.Text('');
    _el_59.append(_text_60);
    _el_61 = createAndAppend(doc, 'hr', parentRenderNode);
    _el_62 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_62, 'id', 'power-booster');
    _compView_63 = new import7.ViewPowerBoosterComponent0(this, 63);
    _el_63 = _compView_63.rootEl;
    parentRenderNode.append(_el_63);
    _PowerBoosterComponent_63_4 = new import8.PowerBoosterComponent();
    _compView_63.create(_PowerBoosterComponent_63_4, []);
    _el_64 = createAndAppend(doc, 'hr', parentRenderNode);
    _el_65 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_65, 'id', 'power-boost-calc');
    _compView_66 = new import9.ViewPowerBoostCalculatorComponent0(this, 66);
    _el_66 = _compView_66.rootEl;
    parentRenderNode.append(_el_66);
    _PowerBoostCalculatorComponent_66_4 = new import10.PowerBoostCalculatorComponent();
    _compView_66.create(_PowerBoostCalculatorComponent_66_4, []);
    _el_67 = createAndAppend(doc, 'hr', parentRenderNode);
    _el_68 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_68, 'id', 'flying-heroes');
    _compView_69 = new import11.ViewFlyingHeroesComponent0(this, 69);
    _el_69 = _compView_69.rootEl;
    parentRenderNode.append(_el_69);
    _FlyingHeroesComponent_69_4 = new import12.FlyingHeroesComponent();
    _compView_69.create(_FlyingHeroesComponent_69_4, []);
    _el_70 = createAndAppend(doc, 'hr', parentRenderNode);
    _el_71 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_71, 'id', 'flying-heroes-impure');
    _compView_72 = new import11.ViewFlyingHeroesImpureComponent0(this, 72);
    _el_72 = _compView_72.rootEl;
    parentRenderNode.append(_el_72);
    _FlyingHeroesImpureComponent_72_4 = new import12.FlyingHeroesImpureComponent();
    _compView_72.create(_FlyingHeroesImpureComponent_72_4, []);
    _el_73 = createAndAppend(doc, 'hr', parentRenderNode);
    _el_74 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_74, 'id', 'hero-message');
    _compView_75 = new import13.ViewHeroAsyncMessageComponent0(this, 75);
    _el_75 = _compView_75.rootEl;
    parentRenderNode.append(_el_75);
    _HeroAsyncMessageComponent_75_4 = new import14.HeroAsyncMessageComponent();
    _compView_75.create(_HeroAsyncMessageComponent_75_4, []);
    _el_76 = createAndAppend(doc, 'hr', parentRenderNode);
    _el_77 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_77, 'id', 'hero-list');
    _compView_78 = new import15.ViewHeroListComponent0(this, 78);
    _el_78 = _compView_78.rootEl;
    parentRenderNode.append(_el_78);
    _HeroListComponent_78_4 = new import16.HeroListComponent();
    _compView_78.create(_HeroListComponent_78_4, []);
    _el_79 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_79, 'style', 'margin-top:12em;');
    _pipe_date_0 = new import17.DatePipe();
    _pipe_date_0_0 = import23.pureProxy1(_pipe_date_0.transform);
    _pipe_date_0_1 = import23.pureProxy2(_pipe_date_0.transform);
    _pipe_date_0_2 = import23.pureProxy1(_pipe_date_0.transform);
    _pipe_date_0_3 = import23.pureProxy2(_pipe_date_0.transform);
    _pipe_date_0_4 = import23.pureProxy2(_pipe_date_0.transform);
    _pipe_uppercase_1 = new import19.UpperCasePipe();
    _pipe_uppercase_1_0 = import23.pureProxy1(_pipe_uppercase_1.transform);
    _pipe_uppercase_1_1 = import23.pureProxy1(_pipe_uppercase_1.transform);
    _pipe_uppercase_1_2 = import23.pureProxy1(_pipe_uppercase_1.transform);
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import4.HeroBirthdayComponent) && (37 == nodeIndex))) {
      return _HeroBirthdayComponent_37_4;
    }
    if ((identical(token, import6.HeroBirthday2Component) && (50 == nodeIndex))) {
      return _HeroBirthday2Component_50_4;
    }
    if ((identical(token, import8.PowerBoosterComponent) && (63 == nodeIndex))) {
      return _PowerBoosterComponent_63_4;
    }
    if ((identical(token, import10.PowerBoostCalculatorComponent) && (66 == nodeIndex))) {
      return _PowerBoostCalculatorComponent_66_4;
    }
    if ((identical(token, import12.FlyingHeroesComponent) && (69 == nodeIndex))) {
      return _FlyingHeroesComponent_69_4;
    }
    if ((identical(token, import12.FlyingHeroesImpureComponent) && (72 == nodeIndex))) {
      return _FlyingHeroesImpureComponent_72_4;
    }
    if ((identical(token, import14.HeroAsyncMessageComponent) && (75 == nodeIndex))) {
      return _HeroAsyncMessageComponent_75_4;
    }
    if ((identical(token, import16.HeroListComponent) && (78 == nodeIndex))) {
      return _HeroListComponent_78_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.AppComponent _ctx = ctx;
    final currVal_0 = import23.interpolate1('The hero\'s birthday is ', _pipe_date_0_0(_ctx.birthday), '');
    if (!identical(_expr_0, currVal_0)) {
      _text_43.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import23.interpolate1('The hero\'s birthday is ', _pipe_date_0_1(_ctx.birthday, 'MM/dd/yy'), ' ');
    if (!identical(_expr_1, currVal_1)) {
      _text_45.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import23.interpolate1('The chained hero\'s birthday is  ', _pipe_uppercase_1_0(_pipe_date_0_2(_ctx.birthday)), '');
    if (!identical(_expr_2, currVal_2)) {
      _text_56.text = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = import23.interpolate1('The chained hero\'s birthday is  ', _pipe_uppercase_1_1(_pipe_date_0_3(_ctx.birthday, 'fullDate')), '');
    if (!identical(_expr_3, currVal_3)) {
      _text_58.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = import23.interpolate1('The chained hero\'s birthday is  ', _pipe_uppercase_1_2(_pipe_date_0_4(_ctx.birthday, 'fullDate')), '');
    if (!identical(_expr_4, currVal_4)) {
      _text_60.text = currVal_4;
      _expr_4 = currVal_4;
    }
    _compView_37.detectChanges();
    _compView_50.detectChanges();
    _compView_63.detectChanges();
    _compView_66.detectChanges();
    _compView_69.detectChanges();
    _compView_72.detectChanges();
    _compView_75.detectChanges();
    _compView_78.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_37?.destroy();
    _compView_50?.destroy();
    _compView_63?.destroy();
    _compView_66?.destroy();
    _compView_69?.destroy();
    _compView_72?.destroy();
    _compView_75?.destroy();
    _compView_78?.destroy();
  }
}

AppView<import1.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

const List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<dynamic> {
  ViewAppComponent0 _compView_0;
  import1.AppComponent _AppComponent_0_4;
  _ViewAppComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import21.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_4 = new import1.AppComponent();
    _compView_0.create(_AppComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.AppComponent>(0, this, rootEl, _AppComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.AppComponent) && (0 == nodeIndex))) {
      return _AppComponent_0_4;
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

AppView viewFactory_AppComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.AppComponent> AppComponentNgFactory = const ComponentFactory<import1.AppComponent>('my-app', viewFactory_AppComponentHost0, _AppComponentMetadata);
const _AppComponentMetadata = const [];
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
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ngRef.registerComponent(
    AppComponent,
    AppComponentNgFactory,
  );
}
