	document.body.onload= function ($) {
	setTimeout(function(){
		var preloader = document.getElementsByClassName('loader')[0];
		if( !preloader.classList.contains('done'))
		{
			preloader.classList.add('done');
		}
	},1000);
}