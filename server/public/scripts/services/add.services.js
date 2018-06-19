ngApp.service('AddService', ['$http', function($http) {
    console.log('in the AddService');
    let self = this;

    //POST
    self.postListing = function(newListing) {

        return $http({
            method: 'POST',
            url: '/real_estate',
            data: newListing
        }).then((response) => {
            console.log('back from POST with:', response);
        }).catch((error) => {
            console.log('back from POST with:', error);
        });
    };
}]);