import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { BooksComponent } from './books/books.component';
import { LandingComponent } from './layout/landing/landing.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { UserbooksComponent } from './userbooks/userbooks.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path:'landing',
    component: LandingComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'userbooks',
    component: UserbooksComponent
  },
  {
    path: 'userbooks/create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
