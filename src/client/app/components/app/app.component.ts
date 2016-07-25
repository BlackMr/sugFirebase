// angular
import {ChangeDetectionStrategy} from '@angular/core';

// app
import {NameListService} from '../../frameworks/app/index';
import {AnalyticsService} from '../../frameworks/analytics/index';
import {RouteComponent, PlatformDirective} from '../../frameworks/core/index';
import {LangSwitcherComponent} from '../../frameworks/i18n/index';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';

import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

@RouteComponent({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [NameListService],
  templateUrl: 'app.component.html',
  directives: [LangSwitcherComponent, NavbarComponent, ToolbarComponent, PlatformDirective],
  changeDetection: ChangeDetectionStrategy.Default, // Everything else uses OnPush
  providers: [
        FIREBASE_PROVIDERS,
        defaultFirebase('https://sugFirebase.firebaseio.com/')
    ]
})
export class AppComponent {
  constructor(public analytics: AnalyticsService) {
     PlatformDirective.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
  }
}

