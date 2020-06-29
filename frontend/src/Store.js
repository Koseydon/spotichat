import { action, decorate, observable } from "mobx";

function Store() {
  this.nickName = "";
  this.message = "";
  this.messages = {};
  this.currentMessages = [];
  this.currentRoom = "";
  this.rooms = [
    { roomName: "room1", roomId: 1 },
    { roomName: "room2", roomId: 2 },
    { roomName: "room3", roomId: 3 },
  ];

  this.namePopupShow = true;

  this.setNickName = (nickName) => {
    this.nickName = nickName;
  };

  this.toggleNamePopupShow = () => {
    this.namePopupShow = !this.namePopupShow;
  };

  this.addRoom = (name) => {
    this.rooms.push({ roomName: name, roomId: this.rooms.length + 1 });
  };

  this.addMessage = (receivingMessage) => {
    const room = Object.keys(receivingMessage)[0];
    const message = Object.values(receivingMessage)[0][0];
    if (!this.messages[room]) {
      this.messages[room] = [];
    }
    this.messages[room].push(message);
  };

  this.changeRoom = (id) => {
    if (this.currentRoom !== id) {
      this.currentRoom = id;
      this.currentMessages = this.messages[this.currentRoom];
      //console.log("You are now connected to: " + id);
    }
  };

  this.setMessage = (message) => {
    this.message = message;
  };
}

decorate(Store, {
  changeRoom: action,
  addMessage: action,
  setMessage: action,
  addRoom: action,
  toggleNamePopupShow: action,
  setNickName: action,
  currentMessages: observable,
  nickName: observable,
  currentRoom: observable,
  messages: observable,
  message: observable,
  rooms: observable,
  namePopupShow: observable,
});

export default new Store();
