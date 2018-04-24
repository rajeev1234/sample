
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { RegistrationNewComponent } from './registration/registration-new/registration-new.component';
import { RegistrationListComponent } from './registration/registration-list/registration-list.component';

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




const routes: Routes = [
  // { path: '', component: AppComponent },
  // { path: 'header', component: HeaderComponent },


  { path: 'home', component: HomeComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'service_list', component: ServiceListComponent },

  { path: 'post', component: PostComponent },
  { path: 'post_list', component: PostListComponent },

  { path: 'work', component: WorkComponent },


  { path: 'team', component: TeamComponent },
  { path: 'development_team', component: DevelopmentTeamComponent },
  { path: 'production_team', component: ProductionTeamComponent },
  { path: 'supporting_team', component: SupportingTeamComponent },
  { path: 'sale_and_marketing_team', component: SalesAndMarketingTeamComponent },
  { path: 'development_team_list', component: DevelopmentTeamListComponent },

  { path: 'production_team_list', component: ProductionTeamListComponent },

  { path: 'sale_and_marketing_team_list', component: SalesAndMarketingTeamListComponent },

  { path: 'supporting_team_list', component: SupportingTeamListComponent },

  { path: 'opening', component: OpeningsComponent },
  { path: 'opening_list', component: OpeningsListComponent },

  { path: 'news_list', component: NewsListComponent },
  { path: 'news', component: NewsComponent },
  { path: 'registration', component: RegistrationComponent, children: [
      {path: 'registration_new', component: RegistrationNewComponent},
      {path: 'registration_list', component: RegistrationListComponent}
      ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
