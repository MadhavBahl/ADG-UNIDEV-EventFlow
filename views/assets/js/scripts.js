var overlay = document.getElementById("overlay");
var mainContent = document.getElementById("topContent");
mainContent.style.display = 'none';

jQuery(document).ready(function() {

    setTimeout(function(){
      overlay.style.display = 'none';
      mainContent.style.display = 'block';
      console.log("LOADER HIDEN");
    },9000);

    /*
        Fullscreen background
    */
    $.backstretch([
                    "assets/img/backgrounds/2.jpg"
	              , "assets/img/backgrounds/3.jpg"
	              , "assets/img/backgrounds/1.jpg"
								, "assets/img/backgrounds/4.JPG"
							], {duration: 1500, fade: 650});

    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });

    $('.login-form').on('submit', function(e) {

    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});

    });

    // function addGlow(checkId,checkmain) {
    //   console.log(checkId);
    //   // console.log("\'" + checkId.toString() + "\'");
    //   // document.getElementById("\'" + checkId.toString() + "\'").checked = true;
    //   // console.log('Checked');
    //   if(checkmain.checked == true) checkId.checked = true;
    //   else checkId.checked = false;
    // }
});
