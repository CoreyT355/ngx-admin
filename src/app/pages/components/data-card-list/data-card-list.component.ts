import { Component, Input } from '@angular/core';
import { DataCard } from "../../models/data-card.model";

@Component({
    moduleId: module.id,
    selector: 'data-card-list',
    templateUrl: 'data-card-list.component.html',
    styleUrls: ['data-card-list.component.scss']
})
export class DataCardListComponent {
    @Input()
    cards: DataCard[];
}
