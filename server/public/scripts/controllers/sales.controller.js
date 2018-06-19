ngApp.controller('SalesController', function(SalesService) {
    console.log('in the SalesController');
    let scon = this;

    scon.deleteListing = function(listing) {
        console.log(listing);
    }
});