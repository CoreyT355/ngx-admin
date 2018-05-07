import { Component, Input } from '@angular/core';
import { DataCard } from "../../models/data-card.model";

@Component({
    moduleId: module.id,
    selector: 'data-card',
    templateUrl: 'data-card.component.html',
    styleUrls: ['data-card.component.scss']
})
export class DataCardComponent {
    @Input()
    card: DataCard;
}
