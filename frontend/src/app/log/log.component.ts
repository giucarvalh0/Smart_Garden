import { Component, OnInit } from '@angular/core';
import { gardenInfoServiceLog } from '../services/garden-info-log.service';
import { GardenInfoLog } from '../models/garden-info-log';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  gardenInfo_LOG = {} as GardenInfoLog;
  gardenInfos_LOG: GardenInfoLog[];

  constructor(private gardenInfoService: gardenInfoServiceLog) {}

  ngOnInit() {
    this.getGardenInfos_LOG();
  }

  // Dados da horta

  saveGardenInfo_LOG(form: NgForm) {
    if (this.gardenInfo_LOG.id !== undefined) {
      this.gardenInfoService.updateGardenInfo_LOG(this.gardenInfo_LOG).subscribe(() => {
        this.cleanGardenForm(form);
      });
    } else {
      this.gardenInfoService.saveGardenInfo_LOG(this.gardenInfo_LOG).subscribe(() => {
        this.cleanGardenForm(form);
      });
    }
  }

  getGardenInfos_LOG() {
    this.gardenInfoService.getGardenInfos_LOG().subscribe((gardenInfos_LOG: GardenInfoLog[]) => {
      this.gardenInfos_LOG = gardenInfos_LOG;
    });
  }

  deleteGardenInfo_LOG(gardenInfo_LOG: GardenInfoLog) {
    this.gardenInfoService.deleteGardenInfo_LOG(gardenInfo_LOG).subscribe(() => {
      this.getGardenInfos_LOG();
    });
  }

  editGardenInfo_LOG(gardenInfo: GardenInfoLog) {
    this.gardenInfo_LOG = { ...gardenInfo };
  }

  cleanGardenForm(form: NgForm) {
    this.getGardenInfos_LOG();
    form.resetForm();
    this.gardenInfo_LOG = {} as GardenInfoLog;
  } 
}
