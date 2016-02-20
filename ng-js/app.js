/**
 * Created by samsuj on 29/10/15.
 */


'use strict';

/* App Module */

var pearlhealth = angular.module('pearlhealth', ['ui.router','ngCookies','ui.bootstrap','angularValidator']);

pearlhealth.run(['$rootScope', '$state',function($rootScope, $state){

    $rootScope.$on('$stateChangeStart',function(){
        $rootScope.stateIsLoading = true;
    });


    $rootScope.$on('$stateChangeSuccess',function(){
        $rootScope.stateIsLoading = false;
    });

}]);

pearlhealth.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

// For any unmatched url, redirect to /state1
    $urlRouterProvider
        .otherwise("/index");

//
    // Now set up the states
    $stateProvider
        .state('index',{
            url:"/index",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    //controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/home.html' ,
                    //controller: 'home'
                },

            }
        })



            .state('services',{
                url:"/services",
                views: {

                    'header': {
                        templateUrl: 'partials/header.html' ,
                        //controller: 'header'
                    },
                    'footer': {
                        templateUrl: 'partials/footer.html' ,
                        //controller: 'footer'
                    },
                    'content': {
                        templateUrl: 'partials/services.html' ,
                        //controller: 'home'
                    },

                }
            })
        .state('upcoming-events',{
            url:"/upcoming-events",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    //controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/upcoming-events.html' ,
                    //controller: 'home'
                },

            }
        })


        .state('dashboard',{
            url:"/dashboard",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_top_menu.html' ,
                     controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                    //  controller: 'admin_left'
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/dashboard.html' ,
                    // controller: 'dashboard'
                },

            }
        }
    )

        .state('add-event', {
                url: "/add-event",
                views: {
                    'admin_header': {
                        templateUrl: 'partials/admin_top_menu.html' ,
                        controller: 'admin_header'
                    },
                    'admin_left': {
                        templateUrl: 'partials/admin_left.html' ,
                        //  controller: 'admin_left'
                    },
                    'admin_footer': {
                        templateUrl: 'partials/admin_footer.html' ,
                    },
                    'content': {
                        templateUrl: 'partials/add_event.html' ,
                        controller: 'addevent'
                    },

                }
            }

        )
            .state('edit-event', {
            url: "/edit-event",
            views: {
                'admin_header': {
                    templateUrl: 'partials/admin_top_menu.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                    //  controller: 'admin_left'
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/add_event.html' ,
                    controller: 'editevent'
                },

            }
        }

    )

        .state('event-list',{
            url:"/event-list",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_top_menu.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                    //  controller: 'admin_left'
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/event_list.html' ,
                    controller: 'eventlist'
                },

            }
        }
    )

        .state('add-finder',{
            url:"/add-finder",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_top_menu.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                    //  controller: 'admin_left'
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/add_finder.html' ,
                     controller: 'addfinder'
                },

            }
        }
    )
        .state('edit-finder',{
            url:"/edit-finder/:userId",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_top_menu.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/edit_finder.html' ,
                    controller: 'editfinder'
                },

            }
        }
    )





        .state('finder-list',{
            url:"/finder-list",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_top_menu.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                    //  controller: 'admin_left'
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/finder_list.html' ,
                    controller: 'finderlist'
                },

            }
        }
    )

        .state('login',
        {
            url:"/login",
            views: {

                /*              'header': {
                 templateUrl: 'partials/admin_header.html' ,
                 controller: 'header'
                 },
                 'footer': {
                 templateUrl: 'partials/admin_footer.html' ,
                 //controller: 'footer'
                 },
                 */                'content': {
                    templateUrl: 'partials/login.html' ,
                    controller: 'login'
                },

            }
            /*           onEnter: ['$stateParams', '$state', '$uibModal',
             function($stateParams, $state, $uibModal) {
             var size;
             $uibModal.open({
             animation: true,
             templateUrl: 'myModalContent.html',
             controller: 'ModalInstanceCtrl',
             size: size,

             });
             }]
             */        }
    )



        .state('planning-your-visit',{
            url:"/planning-your-visit",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    //controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/planning-your-visit.html' ,
                    //controller: 'home'
                },

            }
        }
    )


        .state('mission',{
            url:"/mission",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    //controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/mission.html' ,
                    //controller: 'home'
                },

            }
        }
    )

        .state('contact',{
            url:"/contact",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    //controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/contact.html' ,
                    //controller: 'home'
                },

            }
        }
    )

        .state('psychiatry',{
            url:"/psychiatry",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    //controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/psychiatry.html' ,
                    //controller: 'home'
                },

            }
        }
    )





    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        hashPrefix:'!'
    });

});

/*
pearlhealth.directive('slideToggle', function() {
    return {
        restrict: 'A',
        scope:{
            isOpen: "=slideToggle"
        },
        link: function(scope, element, attr) {
            var slideDuration = parseInt(attr.slideToggleDuration, 10) || 200;
            scope.$watch('isOpen', function(newVal,oldVal){
                if(newVal !== oldVal){
                    element.stop().slideToggle(slideDuration);
                }
            });
        }
    };
});

pearlhealth.directive('myCustomer', function() {
    return {
        template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
});*/


pearlhealth.controller('index', function($scope,$state,$cookieStore) {
    //$state.go('home');
    //return
});

pearlhealth.controller('login', function($scope,$state,$http,$cookieStore,$rootScope) {
    $scope.login = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'finderlogin',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if(data.userdetails.status == 'success'){
                $cookieStore.put('userid',data.userdetails.id);
                $cookieStore.put('useremail',data.userdetails.email);
                $cookieStore.put('userfullname',data.userdetails.fname+' '+data.userdetails.lname);
                $cookieStore.put('username',data.userdetails.username);

                if(typeof (data.userdetails.roles[4]) != 'undefined')
                    $cookieStore.put('userrole',4);
                if(typeof (data.userdetails.roles[5]) != 'undefined')
                    $cookieStore.put('userrole',5);
                if(typeof (data.userdetails.roles[6]) != 'undefined')
                    $cookieStore.put('userrole',6);
                if(typeof (data.userdetails.roles[7]) != 'undefined')
                    $cookieStore.put('userrole',7);
                console.log($cookieStore.get('userid'));
                console.log($cookieStore.get('useremail'));
                console.log($cookieStore.get('userfullname'));

                $state.go('dashboard');

/*


                if(typeof($cookieStore.get('idea_det_id')) != 'undefined' && $cookieStore.get('idea_det_id')>0) {
                    $scope.idea_det_id = $cookieStore.get('idea_det_id');
                    $cookieStore.remove('idea_det_id');
                    $state.go('ideadetails',{ideaId: $scope.idea_det_id});
                    return
                }else{
*/
                 //   $state.go('dashboard');
                  //  return
               // }

            }else{
                $scope.errormsg = data.msg;
            }

        });
}
});
pearlhealth.controller('addevent',function($scope,$state,$http,$cookieStore,$rootScope,$log){




    setTimeout(function(){
        jQuery('input[name="event_daterange"]').daterangepicker({
            /* timePicker: true,
             timePickerIncrement: 30,*/
            locale: {
                format: 'MM/DD/YYYY h:mm A'
            }
        });

    },4000);




    $scope.showtime=false;

    $scope.toggletimepicker=function(){

        console.log("before"+$scope.showtime);
        $scope.showtime=! $scope.showtime ;
        console.log("after"+$scope.showtime);
    }


    $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function() {
        $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.update = function() {
        var d = new Date();
        d.setHours( 14 );
        d.setMinutes( 0 );
        $scope.starttime = d;
        d.setHours( 15 );
        d.setMinutes( 0 );
        $scope.endtime = d;
    };

    $scope.changed = function () {
        $log.log('Time changed to: ' + $scope.starttime);
    };

    $scope.clear = function() {
        $scope.starttime = null;
    };




});
pearlhealth.controller('editevent',function($scope,$state,$http,$cookieStore,$rootScope){


});
pearlhealth.controller('deleteevent',function($scope,$state,$http,$cookieStore,$rootScope){


});
pearlhealth.controller('eventlist',function($scope,$state,$http,$cookieStore,$rootScope){


});



pearlhealth.controller('addfinder', function($scope,$state,$http,$cookieStore,$rootScope) {
    // $state.go('login');
    $scope.contact=['Anytime','Early morning','Mid morning','Afternoon','Early evening','Late evening'];
    $scope.submitsignUpForm = function(){

        //console.log($scope.adminUrl+'addfinder');


        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'addfinder',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            //$rootScope.stateIsLoading = false;
            if(data.status == 'error'){
                console.log(data);
                $('.email_div').append('<label class="control-label has-error validationMessage">This email already exists.</label>');
            }else{
                //console.log(data);
                //$cookieStore.put('user_insert_id',data);

                $state.go('finder-list');
                return;
                //console.log(data);
            }

        });

    }

    //console.log('in add finder form ');
});
pearlhealth.controller('editfinder', function($scope,$state,$http,$cookieStore,$rootScope,$stateParams){

    $scope.userid=$stateParams.userId;

    $http({
        method  : 'POST',
        async:   false,
         url     :     $scope.adminUrl+'finderdetails',
        data    : $.param({'uid':$scope.userid}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        console.log(data);
        $scope.form = {
            uid: data.uid,
            refferal_code: data.refferal_code,
            fname: data.fname,
            lname: data.lname,
            bname: data.bname,
            email: data.email,
            address: data.address,
            phone_no: data.phone_no,
            mobile_no: data.mobile_no,
            contact_time: data.contact_time,
        }
    });
    $scope.update = function () {

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'finderupdates',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('finder-list');
            return
        });
    }


})


pearlhealth.controller('finderlist', function($scope,$state,$http,$cookieStore,$rootScope) {
    console.log($scope.adminUrl+'finderlist');
    $scope.currentPage=1;
    $scope.perPage=3;
    $scope.begin=0;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function(){
        $scope.begin=parseInt($scope.currentPage-1)*$scope.perPage;
        $scope.userlistp = $scope.userlist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));
    }
    $http({
        method  : 'POST',
        async:   false,
        url     : $scope.adminUrl+'finderlist',
        // data    : $.param($scope.form),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        console.log(data);
            $scope.userlist=data;
            $scope.userlistp = $scope.userlist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));


    });

    $scope.searchkey = '';
    $scope.search = function(item){

        if ( (item.fname.indexOf($scope.searchkey) != -1) || (item.lname.indexOf($scope.searchkey) != -1) ||(item.mail.indexOf($scope.searchkey) != -1) ){
            return true;
        }
        return false;
    };
    $scope.delfinder = function(item){
        $rootScope.stateIsLoading = true;
        var idx = $scope.userlist.indexOf(item);
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'deletefinder',
            data    : $.param({uid: $scope.userlist[idx].uid}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $scope.userlist.splice(idx,1);
            $scope.userlistp = $scope.userlist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));

        });
    }

    $scope.changeStatus = function(item){
        $rootScope.stateIsLoading = true;
        var idx = $scope.userlist.indexOf(item);
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'updatestatus',
            data    : $.param({uid: $scope.userlist[idx].uid}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $scope.userlist[idx].status = !$scope.userlist[idx].status;
        });
    }




    //console.log('in add finder form ');
});


pearlhealth.controller('admin_header', function($scope,$state,$http,$cookieStore,$rootScope,$log) {
    // $state.go('login');
    console.log($cookieStore.get('userid'));

    if (typeof($cookieStore.get('userid')) != 'undefined' && $cookieStore.get('userid') > 0) {


    // if($cookieStote.get('userid'))
    angular.element('head').append('<link id="home" href="css/admin_style.css" rel="stylesheet">');

    $scope.toggledropdown = function () {

        angular.element('.user-manu-dropdown').toggleClass('open');
    }


    //angular.element('head').append('<script src="plugins/jQuery/jQuery-2.1.4.min.js"></script>');
    angular.element('head').append('<script src="plugins/fastclick/fastclick.min.js"></script>');
    angular.element('head').append('<script src="dist/js/app.min.js"></script>');
    angular.element('head').append('<script src="plugins/sparkline/jquery.sparkline.min.js"></script>');
    angular.element('head').append('<script src="plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>');
    angular.element('head').append('<script src="plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>');
    angular.element('head').append('<script src="plugins/slimScroll/jquery.slimscroll.min.js"></script>');
    angular.element('head').append('<script src="dist/js/pages/dashboard2.js"></script>');
    angular.element('head').append('<script src="dist/js/demo.js"></script>');
/*
        angular.element('head').append('<script>+setTimeout(function(){
        $('input[name="event_daterange"]').daterangepicker({
            timePicker: true,
            timePickerIncrement: 30,
            locale: {
                format: 'MM/DD/YYYY h:mm A'
            }
        });
    }, 2000);)+'</script>'
*/



    $scope.logout = function () {
        $cookieStore.remove('userid');
        $cookieStore.remove('username');
        $cookieStore.remove('useremail');
        $cookieStore.remove('userfullname');
        $state.go('index');
    }
}
    else{
        $state.go('index');
    }

   // console.log('in admin header');
});

