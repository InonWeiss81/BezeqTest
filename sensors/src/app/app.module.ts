import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SensorComponent } from './components/sensor/sensor.component';
import { SensorListComponent } from './components/sensor-list/sensor-list.component';
import { Base } from './components/base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorComponent,
    SensorListComponent,
    Base
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
