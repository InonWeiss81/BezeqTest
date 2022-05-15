import { Base } from './../base/base.component';
import { TextsService } from 'src/app/services/texts.service';
import { environment } from './../../../environments/environment';
import { Sensor } from './../../models/sensor';
import { Component, Input, OnInit } from '@angular/core';
import { MyKeyValue } from 'src/app/models/my-key-value';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.less']
})
export class SensorComponent extends Base implements OnInit {

  texts = this.textsService.sensorData;

  @Input() data: Sensor;

  src: string;
  alt: string;
  title: string;
  subtitle: string;
  componentOk: boolean;
  sensorData: MyKeyValue[] = [];


  ngOnInit(): void {
    this.src = this.data.Picture
      ? environment.imagesRootPath + this.data.Picture + '.png'
      : environment.imagesRootPath + 'no-image.png';
    this.alt = this.data.WebSiteDeviceName;
    this.title = this.data.DeviceTypeHebrew;
    this.subtitle = this.data.WebSiteDeviceName;
    this.componentOk = this.data.ComponentOk === 1;
    this.setSensorData();
  }

  setSensorData() {
    // pairing
    if (this.data.InstallDate) {
      this.sensorData.push({ Key: this.texts.InstallDate, Value: this.data.InstallDate, IsDate: true });
    }
    // last report
    if (this.data.LastReportDate) {
      this.sensorData.push({ Key: this.texts.LastReportDate, Value: this.data.LastReportDate, IsDate: true });
    }
    // connection type
    if (this.data.ConnectionType) {
      this.sensorData.push({ Key: this.texts.ConnectionType, Value: this.data.ConnectionType, IsDate: false });
    }
    // reception level
    if (this.data.ReceptionLevel) {
      this.sensorData.push({ Key: this.texts.ReceptionLevel, Value: this.translateReceptionLevel(this.data.ReceptionLevel), IsDate: false });
    }
    // MAC
    if (this.data.MAC) {
      this.sensorData.push({ Key: this.texts.MAC, Value: this.data.MAC, IsDate: false });
    }
  }
  
  translateReceptionLevel(ReceptionLevel: string): string {
    switch (ReceptionLevel) {
      case 'high':
        return this.texts.ReceptionLevel_High
      case 'medium':
        return this.texts.ReceptionLevel_Medium
      case 'low':
        return this.texts.ReceptionLevel_Low
      default:
        return '';
    }
  }

  changeStatus() {
    this.componentOk = !this.componentOk;
  }

  constructor(private textsService: TextsService) {
    super();
  }
}
