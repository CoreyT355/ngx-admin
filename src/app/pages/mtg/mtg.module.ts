// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';

import * as Magic from 'mtgsdk-ts';

// This Module's Components
import { MtgComponent } from './mtg.component';

@NgModule({
    imports: [
        ThemeModule,
        CommonModule,
    ],
    declarations: [
        MtgComponent,
    ],
    exports: [ ],
    providers: [ Magic.MagicEmitter ]
})
export class MtgModule {

}
