import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing-component/landing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Route } from './routes';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  { 
    path: Route.ABOUT_ME,
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    data: { animation: 'AboutPage' }
  },
  { path: Route.PORTFOLIO, loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: Route.SERVICES, loadChildren: () => import('./professional-services/services.module').then(m => m.ServicesModule) },
  { path: Route.BLOG, loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: Route.SOCIAL_MEDIA, loadChildren: () => import('./social-media/social-media.module').then(m => m.SocialMediaModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { 
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
