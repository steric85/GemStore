(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController',function(){
		this.products = gems;				// product is attribute of controller
	});

	var gems = [{
		name : 'Dodecahedron',
		price : 2.95,
		description : 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodecahedron is one of those gems.',
		canPurchase : true,
		images : [{
			full : "dodecahedron-01-full.jpg",
			thumb : "dodecahedron-01-thumb.jpg",
		}],
	},
	{
		name : 'Pentagonal Gem',
		price : 5.95,
		description : 'Some gems have hidden qualities beyond their luster, beyond their shine... Pentagonal is one of those gems.',
		canPurchase : false,	
		images : [{
			full : "pentagon-01-full.jpg",
			thumb : "pentagon-01-thumb.jpg",
		}],	
	}];

	app.controller('PanelController',function(){
		this.tab = 1;

		this.selectTab=function(checkTab){
			this.tab=checkTab;
		};

		this.isSelected=function(checkTab){
			return this.tab===checkTab;
		}
	});

})();