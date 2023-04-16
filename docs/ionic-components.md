## ion-item-sliding

A sliding item contains an item that can be dragged to reveal option buttons. It requires an item component as a child. All options to reveal should be placed in the item options element.

end is the default


```html
<ion-item-sliding>
    <ion-item>
        <ion-label>Sliding Item with End Options</ion-label>
    </ion-item>

    <ion-item-options>
        <ion-item-options side="start|end">
        <ion-item-option color="danger">Action</ion-item-option>
        <ion-item-option color="success">Another Action</ion-item-option>
    </ion-item-options>
</ion-item-sliding>
```


