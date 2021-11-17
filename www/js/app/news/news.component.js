angular.
  module('news').
  component('news', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl:'./js/app/news/news.template.html',
    controller: function($scope, $http, $state,$location) {
        $scope.images = []
        $scope.limit = 30;
        $scope.loading = true;
        var showImageView = false;

        var counter = 1;
     

        
        $scope.onBackClicked = function() {
          history.back()
        }
        function initSwiper() {
         const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
          
          });

          
        }


        $scope.hideImageViewer = function() {
          
          document.getElementById("imageView").style.display = "none";
          // $scope.$apply();
          showImageView = false;
        }

        $scope.showImageViewer = function (index) {
          console.log(index);
          
          // console.log(document.querySelector('.swiper'));
          const s = document.querySelector('.swiper').swiper;
          s.slideTo(index+1,0, false)
          document.getElementById("imageView").style.display = "block";
          showImageView = true;
          // $scope.$apply();
        }

    

    const fetchdata = async ()=>{
        $scope.loading = true;
        await $http({
            method:"GET",
            url:"https://api.pexels.com/v1/curated?page="+counter+"&per_page=30",
            // withCredentials:true,
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': '563492ad6f91700001000001fe281c4adbd5487fa50e79ddea0513fa'
            }
        }).then(function successCallback(response) {
            console.log(response);
            $scope.images.push.apply($scope.images, response.data.photos);
            // $scope.loading = false;
        },function errorCallback(response) {
            
        })
    }

     $scope.loadMore = async function() {
       $scope.limit += 30;
       console.log("loading");
       await fetchdata();
       initSwiper();
       console.log($scope.images);
       counter +=1;
     };
   
     $scope.loadMore();



     document.addEventListener("backbutton", onBackKeyDown, false);

     function onBackKeyDown() {
       const url = $location.path();
      
       if (url === "/dashboard/news") {
         if (showImageView ) {
          $scope.hideImageViewer();
         }else{
          $state.go("dashboard")
         }
       }
     }

    }

    
  }).directive("directiveWhenScrolled", function() {
    return function(scope, elm, attr) {
      var raw = elm[0];
  
      elm.bind('scroll', function() {
          console.log("scroll");
        if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
          scope.$apply(attr.directiveWhenScrolled);
        }
      });
    };
  });;