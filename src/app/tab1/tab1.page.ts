import { Component } from '@angular/core';
// 1. import the ModalController and Modal Page
import { ModalController } from '@ionic/angular';
import { ModalContactPage } from '../modal-contact/modal-contact.page';
import { Contact } from '../interface/contact';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  contacts = [{
    firstName: 'Billy',
    lastName: 'Jones',
    email: 'billy@email.com.au'
  },
  {
    firstName: 'Sue',
    lastName: 'Williams',
    email: 'sue@email.com.au'
  },
  {
    firstName: 'Mike',
    lastName: 'McDingle',
    email: 'mike@email.com.au'
  }];

  // 2. inject ModalController into the constructor
  constructor(private modal: ModalController) { }

  // 3. create async function to open the modal to create a new contact
  async createContact() {
    const modal = await this.modal.create({
      component: ModalContactPage,
      componentProps: {}
    })

    // 4. handle data when modal is closed (save).
    // what about exception handling???
    modal.onDidDismiss()
      .then((res) => {
        this.contacts.push(res.data);
      });

    // actually display the modal
    return modal.present();
  }

  async editContact(i: number) {
    console.log(i)
  }

  delete(i: number) {

    if (confirm('Delete ' + this.contacts[i].firstName)) {
      this.contacts.splice(i, 1);
    }

  }

}

