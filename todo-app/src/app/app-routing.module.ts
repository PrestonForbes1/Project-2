import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [

  {
    path: '',
    component: CardComponent
  },
  {
    path: 'task',
    component: TasksComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
