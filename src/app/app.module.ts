import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';

import { ServicesComponent } from './services/services.component';
import { ServiceListComponent } from './services/service-list/service-list.component';

import { PostComponent } from './post/post.component';
import { PostListComponent } from './post/post-list/post-list.component';

import { WorkComponent } from './work/work.component';


import { TeamComponent } from './team/team.component';
import { DevelopmentTeamComponent } from './team/development-team/development-team.component';
import { ProductionTeamComponent } from './team/production-team/production-team.component';
import { SupportingTeamComponent } from './team/supporting-team/supporting-team.component';
import { SalesAndMarketingTeamComponent } from './team/sales-and-marketing-team/sales-and-marketing-team.component';
import { DevelopmentTeamListComponent } from './team/development-team/development-team-list/development-team-list.component';

import { ProductionTeamListComponent } from './team/production-team/production-team-list/production-team-list.component';

import { SalesAndMarketingTeamListComponent } from './team/sales-and-marketing-team/sales-and-marketing-team-list/sales-and-marketing-team-list.component';

import { SupportingTeamListComponent } from './team/supporting-team/supporting-team-list/supporting-team-list.component';

import { OpeningsComponent } from './openings/openings.component';
import { OpeningsListComponent } from './openings/openings-list/openings-list.component';

import { NewsComponent } from './news/news.component';
import { NewsListComponent } from './news/news-list/news-list.component';

import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationNewComponent } from './registration/registration-new/registration-new.component';
import { RegistrationListComponent } from './registration/registration-list/registration-list.component';
//

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,

    HomeComponent,

    ServicesComponent,
    ServiceListComponent,

    PostComponent,
    PostListComponent,
    WorkComponent,

    TeamComponent,
    DevelopmentTeamComponent,
    ProductionTeamComponent,
    SupportingTeamComponent,
    SalesAndMarketingTeamComponent,
    DevelopmentTeamListComponent,

    ProductionTeamListComponent,

    SalesAndMarketingTeamListComponent,

    SupportingTeamListComponent,

    OpeningsComponent,
    OpeningsListComponent,

    NewsComponent,
    NewsListComponent,

    NavbarComponent,

    RegistrationComponent,

    RegistrationNewComponent,

    RegistrationListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
