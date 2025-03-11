// File: src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DetailsComponent } from './details/details.component';
import { OrderComponent } from './order/order.component'; // ייבוא OrderComponent

const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'order', component: OrderComponent }, // הוספת נתיב ל־OrderComponent
  { path: '**', redirectTo: '' }, // נתיב גיבוי לכל כתובת לא קיימת
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
