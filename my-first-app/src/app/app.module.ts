import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HousingService } from './services/housing.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';
import { HttpErrorInterceptorService } from './services/httperror-interceptor.service';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HomeNavComponent } from './home/home-nav/home-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import { HomeCategoriesComponent } from './home/home-categories/home-categories.component';
import { HomeHighlightedComponent } from './home/home-highlighted/home-highlighted.component';
import { HomeProductsContainerComponent } from './home/home-products-container/home-products-container.component';
import { HomeProductsItemComponent } from './home/home-products-item/home-products-item.component';
import { HomeProductsNewarrivalComponent } from './home/home-products-newarrival/home-products-newarrival.component';
import { HomeProductsBestsellerComponent } from './home/home-products-bestseller/home-products-bestseller.component';
const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: 'SignIn', component: UserLoginComponent },
  { path: 'SignUp', component: UserRegisterComponent },
  {  path: 'admin',
  loadChildren: () =>
    import('./Admin-Module/Admin-Module.module').then((m) => m.AdminModuleModule),}
,
  { path: '**', component: HomePageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    FilterPipe,
    SortPipe,
    HomePageComponent,
    HomeNavComponent,
    HomeCarouselComponent,
    HomeCategoriesComponent,
    HomeHighlightedComponent,
    HomeProductsContainerComponent,
    HomeProductsItemComponent,
    HomeProductsNewarrivalComponent,
    HomeProductsBestsellerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule,
    NgbModule,
    SwiperModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true,
    },
    HousingService,
    AlertifyService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
