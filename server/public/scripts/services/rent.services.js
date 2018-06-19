ngApp.service('RentService', function($http) {
    console.log('in the RentService');
    let self = this;
    self.allListings = ['this is because I am bringing back an array'];
    //GET to display the card to see they're for rent
    self.getListing = function() {
        return $http({
            method: 'GET',
            url: '/real_estate'
        }).then((response) => {
            console.log(response);
            self.allListings = response.data;
        }).catch((error) => {
            console.log(`error getting all songs:`, error);
        });

    };


});