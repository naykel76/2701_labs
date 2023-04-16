import { Component } from '@angular/core';
// 1. import the ModalController and Modal Page
import { ModalController } from '@ionic/angular';
import { ModalContactPage } from '../modal-contact/modal-contact.page';

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
    // create the ion-modal instance and pass in component and props
    const modal = await this.modal.create({
      component: ModalContactPage,
      componentProps: {}
    })

    // 4. handle data when modal is closed (save). exception handling???
    modal.onDidDismiss()
      .then((res) => {
        // push contact to array
        this.contacts.push(res.data);
      });

    // actually display the modal
    return modal.present();
  }

}

