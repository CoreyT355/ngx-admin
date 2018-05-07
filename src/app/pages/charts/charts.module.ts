import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { ThemeModule } from '../../@theme/theme.module';

import { ChartsRoutingModule, routedComponents } from './charts-routing.module';
import { D3BarComponent } from './d3/d3-bar.component';
import { D3LineComponent } from './d3/d3-line.component';
import { D3PieComponent } from './d3/d3-pie.component';
import { D3AreaStackComponent } from './d3/d3-area-stack.component';
import { D3PolarComponent } from './d3/d3-polar.component';
import { D3AdvancedPieComponent } from './d3/d3-advanced-pie.component';
import { EchartsLineComponent } from './echarts/echarts-line.component';
import { EchartsPieComponent } from './echarts/echarts-pie.component';
import { EchartsBarComponent } from './echarts/echarts-bar.component';
import { EchartsMultipleXaxisComponent } from './echarts/echarts-multiple-xaxis.component';
import { EchartsAreaStackComponent } from './echarts/echarts-area-stack.component';
import { EchartsBarAnimationComponent } from './echarts/echarts-bar-animation.component';
import { EchartsRadarComponent } from './echarts/echarts-radar.component';
import { HighchartsComponent } from './highcharts/highcharts.component';

const components = [
  D3BarComponent,
  D3LineComponent,
  D3PieComponent,
  D3AreaStackComponent,
  D3PolarComponent,
  D3AdvancedPieComponent,
  EchartsLineComponent,
  EchartsPieComponent,
  EchartsBarComponent,
  EchartsMultipleXaxisComponent,
  EchartsAreaStackComponent,
  EchartsBarAnimationComponent,
  EchartsRadarComponent,
  HighchartsComponent,
];

declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

@NgModule({
  imports: [ThemeModule, ChartsRoutingModule, NgxEchartsModule, NgxChartsModule, ChartModule],
  declarations: [...routedComponents, ...components],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
  ],
})
export class ChartsModule {}
