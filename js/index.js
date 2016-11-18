$(function(){  
    var showTime = $('#date-time'),
    	rollWord = $('#left-news-ul'),
    	target = 0,
    	newsTop = 238;
    
    var newDate = new Date();
    var week = newDate.getDay();
    switch(week){
    	case 1: week = "星期一";
    	break;
    	case 2: week = "星期二";
    	break;
    	case 3: week = "星期三";
    	break;
    	case 4: week = "星期四";
    	break;
    	case 5: week = "星期五";
    	break;
    	case 6: week = "星期六";
    	break;
    	case 7: week = "星期天";
    	break;
    }
    var dateTime = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate()+ " " + week;
    showTime.text(dateTime);
    
    setInterval(function(){
    	if(target == 7){
    		target = 0;
    		newsTop+= 238;
    	}
    	rollTarget = $('.left-news-li:eq('+ target +')');
    	target++;
	    
    	rollWord.animate({
	    	top: '+=-34px',
	    	},800,
	    	function(){
	    		rollTarget.css({
			    	top: newsTop+'px',
			    	}
			    );
			    
	    	}
	   	);
    },3000);
    
    $('#nav-ul>li').hover(function() {
        $(this).children('ul').css('z-index', '100');
    }, function() {
        $(this).children('ul').css('z-index', '-1');
    });
    


});  