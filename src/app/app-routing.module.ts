import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminUsesComponent } from './admin-uses/admin-uses.component';
//import { AddCategoryComponent } from './add-category/add-category.component';
//import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';


const routes: Routes = [
  { path: '', component:AdminLoginComponent },
  { path: 'view-category', component: ViewcategoryComponent },
  { path: 'add-category', component: AddcategoryComponent},
  {path:'admin-uses',component:AdminUsesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
