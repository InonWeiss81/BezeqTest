import { Component, OnInit } from '@angular/core';
import { Sensor } from 'src/app/models/sensor';
import { TextsService } from 'src/app/services/texts.service';
import data from 'src/assets/sensors.json';
import { Base } from '../base/base.component';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.less']
})
export class SensorListComponent extends Base implements OnInit {

  texts = this.textsService.sensorList;

  sensors: Sensor[];
  totalSensors: number;
  properSensors: number;
  errorSensors: number;
  
  ngOnInit(): void {
    this.sensors = data.components as unknown as Sensor[];
    this.totalSensors = this.sensors.length;
    this.properSensors = this.sensors.filter(x => x.ComponentOk === 1).length;
    this.errorSensors = this.totalSensors - this.properSensors;
  }

  constructor(private textsService: TextsService) {
    super();
  }
}
