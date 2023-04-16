import { Component, OnInit } from '@angular/core';
// 1. import ModalController
import { ModalController } from '@ionic/angular';
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

  // 2. inject ModalController to make available to the entire class
  constructor(private modal: ModalController) { }

  ngOnInit() { }

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
