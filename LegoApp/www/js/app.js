angular.module('ionicLego', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position("bottom");
    ionic.Platform.fullScreen(true);
    $stateProvider
      .state('signin', {
          url: '/sign-in',
          templateUrl: 'templates/sign-in.html',
          controller: 'SignInCtrl'
      })
      .state('forgotpassword', {
          url: '/forgot-password',
          templateUrl: 'templates/forgot-password.html'
      })
      .state('tabs', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
      })
      .state('tabs.home', {
          url: '/home',
          views: {
              'home-tab': {
                  templateUrl: 'templates/home.html',
                  controller: 'HomeTabCtrl'
              }
          }
      })
      .state('tabs.facts', {
          url: '/facts',
          views: {
              'home-tab': {
                  templateUrl: 'templates/facts.html'
              }
          }
      })
      .state('tabs.facts2', {
          url: '/facts2',
          views: {
              'home-tab': {
                  templateUrl: 'templates/facts2.html'
              }
          }
      })
      .state('tabs.about', {
          url: '/about',
          views: {
              'about-tab': {
                  templateUrl: 'templates/about.html'
              }
          }
      })
      .state('tabs.navstack', {
          url: '/navstack',
          views: {
              'about-tab': {
                  templateUrl: 'templates/nav-stack.html'
              }
          }
      })
      .state('tabs.contact', {
          url: '/contact',
          views: {
              'contact-tab': {
                  templateUrl: 'templates/contact.html'
              }
          }
      });

    
    $urlRouterProvider.otherwise('/sign-in');

})

;