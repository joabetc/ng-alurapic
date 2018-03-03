import { Component, Input, Output, EventEmitter, ElementRef, AfterViewInit } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent implements AfterViewInit {

    @Input() private title: string = 'Are you sure?';
    @Input() private sentence: string;
    @Output() confirm = new EventEmitter();

    constructor(private _element: ElementRef) {
        this._element = _element;
    }
    
    ngAfterViewInit() {
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
                    this.confirm.emit(null);
                }
            }
        });
    }

    show() {
        $(this._element.nativeElement).dialog('open');
    }
}