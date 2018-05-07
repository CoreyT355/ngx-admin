import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import * as Magic from 'mtgsdk-ts';

@Component({
    selector: 'mtg',
    templateUrl: 'mtg.component.html',
    styleUrls: ['mtg.component.scss']
})
export class MtgComponent implements OnDestroy {
    currentTheme: string;
    themeSubscription: any;
    boosterPack: Magic.Card[];
    constructor(private themeService: NbThemeService, private mtg: Magic.MagicEmitter<Magic.Card>) {
        this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
            this.currentTheme = theme.name;
        });
        Magic.Sets.generateBooster('DOM')
            .then(booster => this.boosterPack = booster)
            .catch(err => { throw err; });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
}
