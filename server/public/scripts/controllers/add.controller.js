ngApp.controller('AddController', ['AddService', function(AddService) {
    console.log('in the AddController');
    let self = this;
    class Listing {
        constructor(cost, sqft, type, city, image_path) {
            this.cost = cost;
            this.sqft = sqft;
            this.type = type;
            this.city = city;
            this.image_path = image_path;
        }
    }

    self.addListing = function() {
        let newListing = new Listing(self.costIn, self.sqftIn, self.typeIn, self.cityIn, self.imageIn);

        AddService.postListing(newListing).then(function() {
            console.log('in AddService.postListing(newListing) ');

        });
        // clear function
        // submit function
    };

}]);