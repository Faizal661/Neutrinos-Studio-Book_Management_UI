// _neu_generated_code__dont_modify_directly_
import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-loading_animationComponent
import { loading_animationComponent } from '../components/Layout/loading_animation.component';
//CORE_REFERENCE_IMPORT-view_auditsComponent
import { view_auditsComponent } from '../components/pages/audits/view_audits.component';
//CORE_REFERENCE_IMPORT-view_booksComponent
import { view_booksComponent } from '../components/pages/books/view_books.component';
//CORE_REFERENCE_IMPORT-update_bookComponent
import { update_bookComponent } from '../components/pages/books/update_book.component';
//CORE_REFERENCE_IMPORT-search_bookComponent
import { search_bookComponent } from '../components/pages/books/search_book.component';
//CORE_REFERENCE_IMPORT-add_bookComponent
import { add_bookComponent } from '../components/pages/books/add_book.component';
//CORE_REFERENCE_IMPORT-confirm_modalComponent
import { confirm_modalComponent } from '../components/Layout/confirm_modal.component';
//CORE_REFERENCE_IMPORT-library_footerComponent
import { library_footerComponent } from '../components/Layout/library_footer.component';
//CORE_REFERENCE_IMPORT-library_headerComponent
import { library_headerComponent } from '../components/Layout/library_header.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loading_animationComponent
  loading_animationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-view_auditsComponent
  view_auditsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-view_booksComponent
  view_booksComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-update_bookComponent
  update_bookComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-search_bookComponent
  search_bookComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-add_bookComponent
  add_bookComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-confirm_modalComponent
  confirm_modalComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-library_footerComponent
  library_footerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-library_headerComponent
  library_headerComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'home',
    component: view_booksComponent,
    canActivate: [NeutrinosAuthGuardService],
  },
  {
    path: 'add-book',
    component: add_bookComponent,
    canActivate: [NeutrinosAuthGuardService],
  },
  {
    path: 'search-book',
    component: search_bookComponent,
    canActivate: [NeutrinosAuthGuardService],
  },
  {
    path: 'update-book',
    component: update_bookComponent,
    canActivate: [NeutrinosAuthGuardService],
  },
  {
    path: 'audits',
    component: view_auditsComponent,
    canActivate: [NeutrinosAuthGuardService],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
