angular.module('myApp',[])
.controller('FormController',['$scope','$http', function($scope,$http){
	
	this.user = {
		name: '',
		lastname: ''
	};
	
	this.register = function()
	{
		var encodedString = 'name='+
		encodeURIComponent(this.user.name) +
		'&lastname='+
		encodeURIComponent(this.user.lastname);
		console.log("User clicked" ,this.user);
		$http(
				{   method:'POST',
					url:"http://localhost:9024/MyRestServices/rest/hello/addCustomer",
					data: encodedString,
					headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
				}
			).success(function(data,status,headers,config) 
				{
		 	console.log("success");
			console.log(data);
		 })	
				
	};
	
	
	}]);
		
