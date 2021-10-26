import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModuleComponent } from './Admin-Module.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DashboardContainerComponent } from './Components/dashboard-container/dashboard-container.component';
import { UsersComponent } from './Components/users/users.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { GendersComponent } from './Components/genders/genders.component';
import { DeliveryChargesComponent } from './Components/delivery-charges/delivery-charges.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProdutsOnHomeComponent } from './Components/produts-on-home/produts-on-home.component';
import { ProdutsFormComponent } from './Components/produts-form/produts-form.component';
import { ProdutsDiscountComponent } from './Components/produts-discount/produts-discount.component';
import { ProdutsOutofstockComponent } from './Components/produts-outofstock/produts-outofstock.component';
import { ProdutsInCartsComponent } from './Components/produts-in-carts/produts-in-carts.component';
import { ContactLensComponent } from './Components/contact-lens/contact-lens.component';
import { ContactLensOnHomeComponent } from './Components/contact-lens-on-home/contact-lens-on-home.component';
import { ReviewComponent } from './Components/review/review.component';
import { BannerComponent } from './Components/banner/banner.component';
import { BannerFormComponent } from './Components/banner-form/banner-form.component';
import { QueryComponent } from './Components/query/query.component';
import { ProductLensComponent } from './Components/product-lens/product-lens.component';
import { ProductLensFeatureComponent } from './Components/product-lens-feature/product-lens-feature.component';
import { ProductLensFormComponent } from './Components/product-lens-form/product-lens-form.component';
import { ProductLensFeatureFormComponent } from './Components/product-lens-feature-form/product-lens-feature-form.component';
import { RouterModule, Routes } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
const adminRoutes: Routes = [
  { path: '', component: AdminModuleComponent,
    children:[
      {path: 'dashboard', component: DashboardComponent },
      {path:'categories',component:CategoriesComponent },
      {path:'genders',component:GendersComponent },
      {path:'charges',component:DeliveryChargesComponent },
      {path:'products',component:ProductsComponent },
      {path:'outofStock',component:ProdutsOutofstockComponent },
      {path:'review',component:ReviewComponent },
      {path:'banners',component:BannerComponent },
      {path:'queries',component:QueryComponent },
      {path:'lenses',component:ProductLensComponent },
      {path:'contactlens',component:ContactLensComponent },
      {path:'incart',component:ProdutsInCartsComponent },

    ]
},
]
@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(adminRoutes),],
  declarations: [
    AdminModuleComponent,
    DashboardComponent,
    DashboardContainerComponent,
    UsersComponent,
    CategoriesComponent,
    GendersComponent,
    DeliveryChargesComponent,
    ProductsComponent,
    ProdutsOnHomeComponent,
    ProdutsFormComponent,
    ProdutsDiscountComponent,
    ProdutsOutofstockComponent,
    ProdutsInCartsComponent,
    ContactLensComponent,
    ContactLensOnHomeComponent,
    ReviewComponent,
    BannerComponent,
    BannerFormComponent,
    QueryComponent,
    ProductLensComponent,
    ProductLensFeatureComponent,
    ProductLensFormComponent,
    ProductLensFeatureFormComponent,
  ],
  providers:[

    AlertifyService
  ]
})
export class AdminModuleModule {}
