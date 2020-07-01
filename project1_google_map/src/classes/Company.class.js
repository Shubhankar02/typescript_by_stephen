import faker from 'faker';
var Company = /** @class */ (function () {
    function Company() {
        this.color = 'red';
        this.name = faker.company.companyName();
        this.bio = faker.company.catchPhrase();
        this.location = {
            lat: Number(faker.address.latitude()),
            lng: Number(faker.address.longitude())
        };
    }
    return Company;
}());
export { Company };
