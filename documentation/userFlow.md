### User Flow

1. When the user opens the application but doesn't have any enrolled authentication, 
only `Open Settings` button is present, that opens security settings.
If user has enrolled authentication a second button to start the authentication process is added.

2. After the user successfully completes the authentication process he is redirected to the home screen where there are 
3 predefined Todo items and a text field with a button to add new Todo Items.

3. After the user enters some text in the text field, the button will become active allowing the user to add a new item, 
which will appear in the Todo list.

4. Every Todo item has 3 buttons:<br/>
- Toggle the Item, which will cross/uncross the item's title by a line;
- Remove the Item, which will remove the Todo item from the Todo list
- Edit the Item, which will enable editing mode for the current Todo item.<br/>
In the editing mode there is a text field to update the text and a button to save changes.
By default the text in the text field is taken from the current title.<br/>
After pressing on save button the item will be updated and the editing mode will be disabled.