// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { HttpModule } from '@angular/http';

// This Module's Components
import { RoadmapComponent } from './roadmap.component';
import { DataCardComponent } from "../components/data-card/data-card.component";
import { DataCardListComponent } from "../components/data-card-list/data-card-list.component";

@NgModule({
    imports: [
        ThemeModule,
        CommonModule,
        HttpModule,
    ],
    declarations: [
        RoadmapComponent,
        DataCardComponent,
        DataCardListComponent,
    ],
    exports: [
        RoadmapComponent,
        DataCardComponent,
        DataCardListComponent,
        HttpModule,
    ]
})
export class RoadmapModule {

}
