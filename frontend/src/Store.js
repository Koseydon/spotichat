import { action, decorate, observable } from "mobx";

function Store() {
  this.name = "";
  this.message = "";
  this.messages = [];
  this.currentRoom = "";

  this.addMessage = (message) => {
    if (!this.messages[this.currentRoom]) {
      this.messages[this.currentRoom] = [];
    }
    this.messages[this.currentRoom].push(message);
    console.log(this.messages);
  };

  this.changeRoom = (id) => {
    this.currentRoom = id;
    console.log("You are now connected to: " + id);
  };

  this.setMessage = (message) => {
    this.message = message;
  };
}

decorate(Store, {
  changeRoom: action,
  addMessage: action,
  setMessage: action,
  name: observable,
  currentRoom: observable,
  messages: observable,
  message: observable,
});

export default new Store();
