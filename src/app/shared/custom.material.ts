import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatButtonModule,
        MatCardModule,
        MatPaginatorModule
        ],
    exports: [
        BrowserAnimationsModule,
        MatSliderModule,
        MatButtonModule,
        MatCardModule,
        MatPaginatorModule
        ],
    declarations: []
})
export class CustomMaterialModule {
    constructor() {}
}