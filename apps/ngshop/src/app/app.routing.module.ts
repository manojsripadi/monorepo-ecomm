import { Routes } from '@angular/router'
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

export const routes: Routes = [
{
    path: '',
    component: HomePageComponent
},
{
    path: 'products',
    component: ProductListComponent
}
]