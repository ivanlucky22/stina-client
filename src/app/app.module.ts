import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CoreModule} from '@app/core/core.module';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "@app/feature/component/page-not-found/page-not-found.component";
import {MainPageComponent} from "@app/core/component/main-page/main-page.component";
import {UserDetailComponent} from "@app/feature/component/user-detail/user-detail.component";

const appRoutes: Routes = [
  {path: 'users/:id', component: UserDetailComponent},
  {path: '', component: MainPageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
