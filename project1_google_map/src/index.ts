import {User} from "./classes/User.class";
import {Company} from "./classes/Company.class";

import {GoogleMap} from "./classes/GoogleMap.class";

const user = new User();
const company = new Company();
//
// console.log(user.name);
// console.log(user.location);
//
// console.log(company.name);
// console.log(company.location)
// console.log(company.bio);

const map = new GoogleMap('map');
map.addMarker(user);
map.addMarker(company)


