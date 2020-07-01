import faker from 'faker';
var User = /** @class */ (function () {
    function User() {
        this.color = 'red';
        this.name = faker.name.firstName() + " " + faker.name.lastName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
    return User;
}());
export { User };
