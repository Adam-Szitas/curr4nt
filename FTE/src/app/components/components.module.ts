import { NgModule } from '@angular/core';
import { FteButtonComponent } from './fte-button/fte-button.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [FteButtonComponent],
    imports: [BrowserModule],
    exports: [FteButtonComponent],
})
export class ComponentsModule {}
