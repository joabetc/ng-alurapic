import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'my-button',
    templateUrl: './my-button.component.html'
})
export class MyButtonComponent {

    @Input() name: string = 'Ok';
    @Input() buttonStyle: string = 'btn-default';
    @Input() buttonType: string = 'button';
    @Input() buttonDisabled: boolean = false;
    @Output() action = new EventEmitter();

    executeAction() {
        this.action.emit(null);
    }
}