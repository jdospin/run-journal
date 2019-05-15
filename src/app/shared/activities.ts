import { NgModule } from '@angular/core';
import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [{
  id: 1,
  name: 'Main Bike Trails',
  date: new Date('05/15/2019'),
  distance: 6.2,
  comments: 'Nice day, nice weather',
  gpxData: '../../assets/gpx/1.gpx'
}
]
