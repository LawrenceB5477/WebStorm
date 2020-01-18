import {User} from "./User"
import {Company} from "./Company";
import LatLng = google.maps.LatLng;
import {Map} from "./Map";

const myUser = new User();
const myComp = new Company();
console.log(myComp);
console.log(myUser);

const mapElement: Element = document.querySelector(".map") || new Element();
const myMap = new Map(mapElement);
myMap.addMarker(myUser);
myMap.addMarker(myComp);
