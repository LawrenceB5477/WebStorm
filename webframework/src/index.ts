import {User} from "./models/User";

const user = new User({id: 1, name: "lawrence", age: 21});
user.save();

user.on("changed", () => {
    console.log(user);
});

user.on("save", () => {
    console.log(user);
});
