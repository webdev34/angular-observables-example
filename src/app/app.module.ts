import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './app.material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
