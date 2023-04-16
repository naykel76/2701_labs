
Create the modal page and remove the automatically created route from `app-routing.module.ts`

```bash
ionic generate page modal
```

## `app.modules.ts`

<!-- how is this step done in ionic 7? -->
###  Import the modal module into `app.modules.ts` and add to the imports array

This makes the modal available to the rest of the application.

```js
import { ModalPageModule } from './modal/modal.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ModalPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
```

## Update `page.ts`

This `page.ts` file, is the page that will create and call the modal, as well as perform any
necessary when the modal is closed.

This example uses the modalController to present and dismiss modals.

### 1. Import the ModalPage and ModalController

### 2. Inject the `ModalController` into the constructor

Injecting the ModalController into the `page.ts` constructor gives us access to the
`ModalController` within the class.

### 3. Create an async openModal function to display the modal

The `component` parameter defines the page/component that will be displayed for the modal (view??)

`componentProps` is where you pass values to the modal. The value is passed as an object that has
a property and a value.



## Add functions to display the modal

### Modal View `modal.html`

`page.html`

```html
<ion-button (click)=createContact()”> edit </ion-button>
```

### Modal Page `modal.page.ts`

1. Import the `ModalController`
2.
