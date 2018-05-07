import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from "../../@core/environment";

import { DataCard } from "../models/data-card.model";

@Component({
    moduleId: module.id,
    selector: 'roadmap',
    templateUrl: 'roadmap.component.html',
    styleUrls: ['roadmap.component.scss']
})
export class RoadmapComponent implements OnDestroy {
    currentTheme: string;
    themeSubscription: any;
    dataCards: DataCard[];
    constructor(private themeService: NbThemeService, private httpClient: HttpClient) {
        this.dataCards = new Array<DataCard>();
        this.getYtdRollup().subscribe(data => {
            var card = new DataCard();
            card.title = 'YTD Rollup';
            card.data = data.items[0].ytd_count;
            this.dataCards.push(card);
            this.dataCards.push(card);
            this.dataCards.push(card);
            this.dataCards.push(card);
            this.dataCards.push(card);
            this.dataCards.push(card);
        });

        this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
            this.currentTheme = theme.name;
        });
    }

    getYtdRollup(): Observable<any> {
        return this.httpClient.get(`${environment.baseApiUri}/data/query/proc/mem_individ_ytd_rollup_compare`);
    }

    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
}
