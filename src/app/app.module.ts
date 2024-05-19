import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BackendService} from './backend.service';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { TaskModule } from './modules/task/task.module';
import { SharedModule } from './share-modules';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule,
    SharedModule,
    BrowserAnimationsModule,
    
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
