import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { TaskCreateComponent } from './activities/tasks/task-create/task-create.component';
import { TaskUpdateComponent } from './activities/tasks/task-update/task-update.component';
import { TaskListComponent } from './activities/tasks/task-list/task-list.component';
import { TaskStatusComponent } from './activities/tasks/task-status/task-status.component';
import { TaskRemoveComponent } from './activities/tasks/task-remove/task-remove.component';
import { ActivitiesComponent } from './activities/activities.component';

import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    AuthenticationComponent,
    TaskCreateComponent,
    TaskUpdateComponent,
    TaskListComponent,
    TaskStatusComponent,
    TaskRemoveComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
