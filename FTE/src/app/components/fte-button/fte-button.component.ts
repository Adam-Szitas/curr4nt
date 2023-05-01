import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonTypes, EmitterType } from '../types/fte-button.types';

@Component({
    templateUrl: './fte-button.component.html',
    styleUrls: ['./fte-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-fte-button',
})
export class FteButtonComponent {
    @Input()
    public type!: ButtonTypes;
    @Input()
    public text!: string;
    @Input()
    public hasIcon: boolean | null = false;

    @Output()
    public buttonClicked: EventEmitter<EmitterType> = new EventEmitter();

    public onButtonClicked(): void {
        const customEvent: EmitterType = {
            type: this.type,
        };
        this.buttonClicked.emit(customEvent);
    }

    public getColor(): string {
        switch (this.type) {
            case 'SUBMIT':
                return 'bg-green';
            case 'BACK':
                return 'bg-orange';
            case 'SET':
            case 'NEXT':
            case 'ADD':
                return 'bg-blue';
            case 'EXIT':
                return 'bg-red';
        }
    }
}
