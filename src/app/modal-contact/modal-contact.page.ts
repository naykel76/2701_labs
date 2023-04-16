import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Contact } from '../interface/contact';

@Component({
    selector: 'app-modal-contact',
    templateUrl: './modal-contact.page.html',
    styleUrls: ['./modal-contact.page.scss'],
})

export class ModalContactPage implements OnInit {

    contact: Contact = {
        firstName: '',
        lastName: '',
        email: ''
    }

    id?: number;
    editing: boolean = false;

    constructor(private modal: ModalController, private navParams: NavParams) { }

    ngOnInit() {
        if (this.navParams.get('id')) {
            this.editing = true;
        }
    }

    /**
     * close the modal and set data and role
     */
    save() {
        this.modal.dismiss(this.contact, 'saved');
    }

    /**
     * close the modal setting data = null, and role = cancel
     */
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }

}
