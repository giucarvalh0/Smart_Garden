import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FontSizeService {

    change = new EventEmitter<any>();
    save = new EventEmitter<any>();
    widgetFontSizeChanged = new Subject<string>();
    visualization = 0;

    constructor() {
    }

    public changeFont(font?: number) {
        this.visualization = font;
        this.change.emit(this.visualization);
    }

    public onWidgetFontSizeChanged(widgetType: string) {
        this.widgetFontSizeChanged.next(widgetType);
    }

    public saveFontDashboard() {
        this.save.emit();
    }

}