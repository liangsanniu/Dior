window.onscroll = function(){
	var up = document.getElementById("top");
	//当前页面滚动的距离？？
	var _top = document.body.scrollTop || document.documentElement.scrollTop;
	// if(_top >= 50){
	// 	up.style.display = "block";
	// } else {
	// 	up.style.display = "none";
	// }
}
function goTop(){
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}



window.onload = function (){
	let index = 0;
	let timer = null;
	function move(){
		index++;
		if(index >= $('.banner img').length){
			index = 0;
		}
		$('.banner img').eq(index).fadeIn(1500).siblings().fadeOut(1500);
	}

	function autoMove(){
		timer = setInterval(()=>{
			move();
		},3000)
	}

	autoMove();

	$('.banner').hover(function(){
		clearInterval(timer);
	},function(){
		autoMove();
	})
}

$(function(){
		//滑入
	$(".search").click(function(){
		$(".search").animate({
			width:257
			
		},500);
	});
		
		//滑出
	$(".search").blur(function(){
		$(".search").animate({
			width:157
		},500);
	});	
})


$(".language").click(function(){
		 $(".chine-list .clearlist")[0].style.display="block";
	})
$(".chine-list .clearlist").mouseleave(function(){
		 $(".chine-list .clearlist")[0].style.display="none";
	})

$("#email").blur(function(){
	var reg = /^\w+@\w+\.(cn|com|net)$/;
	var str = $(this).val();
		if(str == ""){
			$("#prompt").css({"display":"block"});
			$("#prompt1").css({"display":"none"});
			$(this).css({"border":"1px solid red"});
		}else if(str !== ""){
			if(reg.test(str)){
				$("#prompt").css({"display":"none"});
				$("#prompt1").css({"display":"none"});
				$(this).css({"border":"1px solid #ebebeb"});
			}else{
				$("#prompt").css({"display":"none"});
				$("#prompt1").css({"display":"block"});
				$(this).css({"border":"1px solid red"});
			}
		}
	});



$(".gobox1").mouseenter(function(){
	$(".box1").show();
	$(".jt1").show();
});
$(".box1").mouseleave(function(){
	$(".box1").hide();
	$(".jt1").hide();
});
$(".gobox2").mouseenter(function(){
	$(".box2").show();
	$(".jt2").show();
});
$(".box2").mouseleave(function(){
	$(".box2").hide();
	$(".jt2").hide();
});
$(".gobox3").mouseenter(function(){
	$(".box3").show();
	$(".jt3").show();
});
$(".box3").mouseleave(function(){
	$(".box3").hide();
	$(".jt3").hide();
});
$(".gobox4").mouseenter(function(){
	$(".box4").show();
	$(".jt4").show();
});
$(".box4").mouseleave(function(){
	$(".box4").hide();
	$(".jt4").hide();
});
$(".gobox5").mouseenter(function(){
	$(".box5").show();
	$(".jt5").show();
});
$(".box5").mouseleave(function(){
	$(".box5").hide();
	$(".jt5").hide();
});
$(".gobox6").mouseenter(function(){
	$(".box6").show();
	$(".jt6").show();
});
$(".box6").mouseleave(function(){
	$(".box6").hide();
	$(".jt6").hide();
});