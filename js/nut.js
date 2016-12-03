	var odiv = $('#focusshow');
	var sprev = $('#showprev');
	var snext = $('#shownext');
	var simg = $('#showimg');
	var stext = $('#searchtext');
	var search = $('#search');
	var sul = odiv.children('ul:eq(0)');
	var sli = sul.children('li');
	var arrUrl = ['nut/img/mayday.jpg', 'nut/img/mayday23.jpg', 'nut/img/mayday24.jpg', 'nut/img/mayday3.jpg', 'nut/img/mayday1.jpg'];
	var num = 0;
	var timer = null;

	// 搜索框
	stext.focus(function() {
	    $(this).val('');
	});
	stext.blur(function() {
	    if ($(this).val().length < 1) {
	        $(this).val('找到好音乐');
	    }
	});  
	// li的数量
	for (var i = 0; i < arrUrl.length; i++) {
		$('<li>').appendTo(sul);
	}
	sli = sul.children('li');
	// 初始化
	function fn1() {
	    simg[0].src = arrUrl[num];
	    sli.each(function(index, el) {
	    	$(el).attr('class','');
	    });
	    sli.eq(num).addClass('active');
	}
	fn1();

	snext.click(function() {
	    num++;
	    if (num == arrUrl.length) {
	        num = 0;
	    }
	    fn1();
	});
	sprev.click(function() {
	    num--;
	    if (num == -1) {
	        num = arrUrl.length - 1;
	    }
	    fn1();
	});

	for (var i = 0; i < arrUrl.length; i++) {
	    sli[i].index = i;
	    sli[i].onmouseover = function() {
	        num = this.index;
	        fn1();
	    };
	}
	function autoplay() {
	    timer = setInterval(
	        function() {
	            num++;
	            num %= arrUrl.length;
	            fn1();
	        },
	        5000);
	}
	autoplay();
	odiv[0].onmouseover = function() {
	    clearInterval(timer);
	};
	odiv[0].onmouseout = autoplay;
