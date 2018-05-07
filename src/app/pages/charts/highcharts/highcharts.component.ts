import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
    selector: 'highcharts',
    templateUrl: 'highcharts.component.html',
    styleUrls: ['highcharts.component.scss']
})
export class HighchartsComponent implements OnDestroy {
    themeSubscription: any;
    options: Object;
    constructor(private theme: NbThemeService) {
        this.options = {
            title: { text: 'This is only a test' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };

        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
        });
    }

    ngOnDestroy(): void {
        this.themeSubscription.unsubscribe();
    }
}
