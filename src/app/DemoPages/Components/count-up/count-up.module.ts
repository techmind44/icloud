import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpModule } from 'countup.js-angular2';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CountUpComponent } from './count-up.component';
import { CountUpRoutingModule } from './count-up-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, CountUpModule, AngularFontAwesomeModule,
    CountUpRoutingModule, PageTitleModule
  ],
  declarations: [CountUpComponent]
})
export class CountUpModules { }
