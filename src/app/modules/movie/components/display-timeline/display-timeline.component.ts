import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DeviceService } from 'src/app/shared/modules/services/device.service';
import { Display } from '../../models/display';

@Component({
  selector: 'app-display-timeline',
  templateUrl: './display-timeline.component.html',
  styleUrls: ['./display-timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayTimelineComponent implements OnInit {

  @Input() displays: Display[] = [];

  // device service is used in HTML
  constructor(public deviceService: DeviceService) { }

  ngOnInit(): void {
  }

}
