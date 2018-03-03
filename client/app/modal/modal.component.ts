import { Component, Input, Output, ElementRef } from "@angular/core";
import { EventEmitter } from "events";

@Component({
    moduleId: module.id,
    selector: 'modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent {

    @Input() private title: string = 'Are you sure?';
    @Input() private sentence: string;
    @Output() confim = new EventEmitter();

    constructor(private _element: ElementRef) {
        this._element = _element;

        $(this._element.nativeElement).dialog({
            title: this.title,
            autoOpen: false,
            resizable: false,
            modal: true,
            buttons: {
                Cancel: () => {
                    $(this._element.nativeElement).dialog("close");
                },
                Confirm: () => {
                    $(this._element.nativeElement).dialog("close");
                    this.confim.emit(null);
                }
            }
        })
    }

    show() {
        $(this._element.nativeElement).dialog("open");
    }
}