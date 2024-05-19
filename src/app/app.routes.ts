import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { ProductListComponent } from './product/product.component';
import { ProductResolver } from './services/product-resolver.service';
import { CanLoadAuthGuard } from './guards/can-load.guard';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'feature',
    loadComponent: () =>
      import('./feature/feature.component').then((m) => ({
        default: m.FeatureComponent,
      })),
    canMatch: [CanLoadAuthGuard], // Apply the CanLoad guard here
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products',
    component: ProductListComponent,
    resolve: { products: ProductResolver },
  },

  {
    path: 'parentComponent',
    component: ParentComponent,
    canActivateChild: [AuthGuard],
    children: [],
  },
];
