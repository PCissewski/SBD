import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstProjectComponent } from './first-project/first-project.component';
import { SecondProjectComponent } from './second-project/second-project.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecordComponent } from './first-project/record/record.component';
import { RecordService } from './first-project/record/service/record.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstProjectComponent,
    SecondProjectComponent,
    HomePageComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
