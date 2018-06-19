ngApp.controller('RentController', function(RentService) {
    console.log('in the RentController');
    let self = this;

    self.rentalListing = function() {
        RentService.getListing().then(function() {
            self.allListings = RentService.allListings;
        });
    }

    self.rentalListing();
});