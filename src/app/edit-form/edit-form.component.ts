import { Component, OnInit } from '@angular/core';


interface User {
    name: string,
    email: string,
    editing: boolean
}

@Component({
    selector: 'app-edit-form',
    templateUrl: './edit-form.component.html',
    styleUrls: ['./edit-form.component.css']
})


export class EditFormComponent implements OnInit {
    users: User[] = [{ name: 'Test user', email: 'testUser@email.com', editing: false }, { name: 'Alter user', email: 'alterUser@email.com', editing: false }];
    test: User = { name: '', email: '', editing: false }

    constructor() {
    }

    ngOnInit() {
    }

  addUser(mf) {
      //console.dir(this);
      this.users.push({ name: this.test.name, email: this.test.email, editing: false});
      mf.resetForm();
    }

  removeUser(i) {
      console.dir(i);
      this.users.splice(i, 1);
  }

  editUser(i) {
      console.dir(i);
      this.users[i].editing = !this.users[i].editing;
  }
}
