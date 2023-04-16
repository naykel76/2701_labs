#### What is the difference between a `page.ts` and `module.ts`?

In Ionic, a page is a component that represents a single screen of an application. It typically
consists of HTML, CSS, and TypeScript.

On the other hand, a page module is a module that is specifically designed to encapsulate the
functionality of a single page component. It is used to group together all the related components,
directives, pipes, and services that are required by the page component.

A page module typically includes the page component itself, along with any child components,
directives, pipes, and services that are specific to that page. It may also import and re-export
modules from other parts of the application that are required by the page.


#### How do I pass props between pages?




```bash
ionic generate {component|service|module|class|directive|guard} "name"

ionic g --help
```

    function myBrokenFunction() {
    debugger;
    // do other stuff
    }

## Input Mode

    <ion-item>
        <ion-label>Username or Email</ion-label>
        <ion-input inputmode="email"></ion-input>
    </ion-item>

    <ion-item>
        <ion-label>Enter a number</ion-label>
        <ion-textarea inputmode="numeric"></ion-textarea>
    </ion-item>

```html
<ion-content class="ion-padding">
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>

  <p>Here's a small text description for the content. Nothing more, nothing less.</p>
</ion-content>
```


## Routing

### Ionic RouterLink

    <ion-button routerLink="/account" shape="round" size="large" color="success">


## ngFor


    <ion-list>
        <ion-item *ngFor="let name of names">
            <p>{{name}}</p>
        </ion-item>
    </ion-list>

    first|last|odd|even

    <ion-item *ngFor="let name of names; oddas oddRow" [ngClass]="{oddClass: oddRow}">

## ngIf

    <p *ngIf="names.length == 0"> No names to display </p>

    <!--  -->
    <p *ngIf="names.length == 0; else elseBlock"> No names to display </p>
    <!-- labeled template -->
    <ng-template #elseBlock>
        <ion-list> … </ion-list>
    </ng-template>


#### Add a button to the tool bar to create will call an addContact() function when the button is clicked

In the template add an add button to the navigation bar which
● Create a modal which allows the user to input a first name, last name, and email of a
contact, as well as a button to 'Add' the contact. When the modal 'Add' button is clicked
the modal is dismissed and the contact data from the modal must be passed back to the
addContact() function.
● In the addContact() function create a new element in the contacts array for the new
contact, the list should automatically update

1.
Add a button to add a new item

2.
Prompt the user for information

3.
Add the new information to the array

4.
The template will automatically update as ngFor is bound to the array
