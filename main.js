function $ (arg) {
	if (arg.charAt(0) == '#') {
		return document.getElementById(arg.substring(1));
	} else if (arg.charAt(0) == '.') {
		return document.getElementsByClassName(arg.substring(1));
	} else {
		return document.getElementsByTagName(arg);
	}
}

var scroll = function () {
	var tag = $('aside')[0].children;
	var con = $('section');
	var next = $('.scroll');
	tag[0].className = 'cur_a';
	con[0].style.display = 'block';

	for (var i = 0; i < tag.length; i ++) {
		tag[i].index = i;
		tag[i].onclick = function () {
			for (var n = 0; n < tag.length; n ++) {
				tag[n].className = '';
				con[n].style.display = 'none';
			}
			tag[this.index].className = 'cur_a';
			con[this.index].style.display = 'block';
		}
	}
	for (var i = 0; i < next.length; i++) {
    	next[i].index=i;
    	tag[i].index=i;
    	next[i].onclick=function(){
    		for (var n = 0; n < next.length; n++) {
    			tag[n].className="";
    			con[n].style.display="none";
    		}
    		con[this.index+1].style.display="block";
    		tag[this.index+1].className="cur_a";
    	}
	}
}

function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
  return "Chrome";
 }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}

function view () {
	return {
        h : document.documentElement.clientHeight || document.body.clientHeight,
		w : document.documentElement.clientWidth || document.body.clientWidth
	}
	
}

var viewHight = function () {
	var con = $('section');
	var iheight = view().h;
	con[0].style.height = iheight + 'px';
	for (var i = 0;i < con.length; i ++) {
		con[i].style.height = iheight + 'px';
	}
}

//滚动事件函数
var scrollFunc = function(event) {
	var con = $('section');
	var tag = $('aside')[0].children;
    //兼容event的对象
	var event = event || window.event;
	if (event.wheelDelta) { //除firfox的浏览器
		if (event.wheelDelta > 0) {//向上滚动
			for (var i = 1;i < tag.length; i ++) {
				if (tag[i].className == 'cur_a') {
					tag[i].className = '';
					con[i].style.display = 'none';
					tag[i-1].className = 'cur_a';
					con[i-1].style.display = 'block';
					break;
				}
			}
		} else if (event.wheelDelta < 0) {//向下滚动
			for (var i = 0;i < tag.length - 1; i ++) {
				var n = 0;
				if (tag[i].className == 'cur_a') {
					tag[i].className = '';
					con[i].style.display = 'none';
					n = i + 1;
					tag[n].className = 'cur_a';
					con[n].style.display = 'block';
					break;
				}
			} 
		}
	} else if (event.detail) {//firefox
		if (event.detail < 0) {//向上滚动
			for (var i = 1;i < tag.length; i ++) {
				if (tag[i].className == 'cur_a') {
					tag[i].className = '';
					con[i].style.display = 'none';
					tag[i-1].className = 'cur_a';
					con[i-1].style.display = 'block';
					break;
				}
			}
		} else if (event.detail > 0) {//向下滚动
			for (var i = 0;i < tag.length - 1; i ++) {
				var n = 0;
				if (tag[i].className == 'cur_a') {
					tag[i].className = '';
					con[i].style.display = 'none';
					n = i + 1;
					tag[n].className = 'cur_a';
					con[n].style.display = 'block';
					break;
				}
			} 
		}
	} 
}


//画布canvase

var canvasHtml5 = $('#html5').getContext('2d');
var canvasCss3 = $('#css3').getContext('2d');
var canvasjs = $('#js').getContext('2d');
var canvasjq = $('#jq').getContext('2d');
var canvasbs = $('#bs').getContext('2d');
var canvasnj = $('#nj').getContext('2d');
var radius = 70;
var conwidth = 160;
var canh5 = function () {
	var deg = 0;
	var html5T = function (deg) {
		var r = deg * Math.PI/180;
		canvasHtml5.clearRect(0 , 0 , conwidth , conwidth);
		canvasHtml5.beginPath();
		canvasHtml5.lineWidth = 10;
		canvasHtml5.strokeStyle = '#F1652A';
		canvasHtml5.arc(conwidth/2 , conwidth/2 , radius , 0 - 1 / 2 * Math.PI , r - 1 / 2 * Math.PI , false);
		canvasHtml5.stroke();
	};

	var timer = setInterval(function () {
		
		var con = $('section')[2];
		if (con.style.display == 'block') {
			deg += 4;
			html5T(deg);
			if (deg > 324) {
				clearInterval(timer);
			}
		}
	} , 20);
};

var cancss3 = function () {
	var deg = 0;
	var css3T = function (deg) {
		var r = deg * Math.PI/180;
		canvasCss3.clearRect(0 , 0 , conwidth , conwidth);
		canvasCss3.beginPath();
		canvasCss3.strokeStyle = "#409AD8";
		canvasCss3.lineWidth = 10;
		canvasCss3.arc(conwidth/2 , conwidth/2 , radius , 0 - 1 / 2 *Math.PI , r - 1 / 2 * Math.PI , false);
		canvasCss3.stroke();
	}

	var timer = setInterval(function () {
		var con = $('section')[2];
		if (con.style.display == 'block') {
			deg += 4;
			css3T(deg);
			if (deg > 324) {
				clearInterval(timer);
			}
		}
	} , 20);
}

var canjs = function () {
	var deg = 0;
	var jsT = function (deg) {
		var r = deg * Math.PI/180;
		canvasjs.clearRect(0 , 0 , conwidth , conwidth);
		canvasjs.beginPath();
		canvasjs.strokeStyle = "#ECB12C";
		canvasjs.lineWidth = 10;
		canvasjs.arc(conwidth/2 , conwidth/2 , radius , 0 - 1 / 2 *Math.PI , r - 1 / 2 * Math.PI , false);
		canvasjs.stroke();
	}

	var timer = setInterval(function () {
		var con = $('section')[2];
		if (con.style.display == 'block') {
			deg += 4;
			jsT(deg);
			if (deg > 280) {
				clearInterval(timer);
			}
		}
	} , 20);
}

var canjq = function () {
	var deg = 0;
	var jqT = function (deg) {
		var r = deg * Math.PI/180;
		canvasjq.clearRect(0 , 0 , conwidth , conwidth);
		canvasjq.beginPath();
		canvasjq.strokeStyle = "#75B143";
		canvasjq.lineWidth = 10;
		canvasjq.arc(conwidth/2 , conwidth/2 , radius , 0 - 1 / 2 *Math.PI , r - 1 / 2 * Math.PI , false);
		canvasjq.stroke();
	}

	var timer = setInterval(function () {
		var con = $('section')[2];
		if (con.style.display == 'block') {
			deg += 4;
			jqT(deg);
			if (deg > 280) {
				clearInterval(timer);
			}
		}
	} , 20);
}

var canbs = function () {
	var deg = 0;
	var bsT = function (deg) {
		var r = deg * Math.PI/180;
		canvasbs.clearRect(0 , 0 , conwidth , conwidth);
		canvasbs.beginPath();
		canvasbs.strokeStyle = "#583F85";
		canvasbs.lineWidth = 10;
		canvasbs.arc(conwidth/2 , conwidth/2 , radius , 0 - 1 / 2 *Math.PI , r - 1 / 2 * Math.PI , false);
		canvasbs.stroke();
	}

	var timer = setInterval(function () {
		var con = $('section')[2];
		if (con.style.display == 'block') {
			deg += 4;
			bsT(deg);
			if (deg > 280) {
				clearInterval(timer);
			}
		}
	} , 20);
}

var cannj = function () {
	var deg = 0;
	var njT = function (deg) {
		var r = deg * Math.PI/180;
		canvasnj.clearRect(0 , 0 , conwidth , conwidth);
		canvasnj.beginPath();
		canvasnj.strokeStyle = "#031A3A";
		canvasnj.lineWidth = 10;
		canvasnj.arc(conwidth/2 , conwidth/2 , radius , 0 - 1 / 2 *Math.PI , r - 1 / 2 * Math.PI , false);
		canvasnj.stroke();
	}

	var timer = setInterval(function () {
		var con = $('section')[2];
		if (con.style.display == 'block') {
			deg += 4;
			njT(deg);
			if (deg > 180) {
				clearInterval(timer);
			}
		}
	} , 20);
}

//表单判断
var checkUsername=function(){
	var username=document.getElementById("username").value;
	var usernamecheck=document.getElementById("check_username");
	usernamecheck.innerText="";
	var myreg=/^[\u4e00-\u9fa5 ]{2,20}$/;
	var myreg1=/^[a-zA-Z\/ ]{2,20}$/;
	if(username==""||username==null){
		usernamecheck.innerText="姓名不能为空";
	}
	else{
		if (myreg.test(username)||myreg1.test(username)) {
		usernamecheck.innerText="";		
		}
		else{
			usernamecheck.innerText="姓名格式错误";
		}
	}
}
var checkMail=function(){
	var usermail=document.getElementById("usermail").value;
	var usermailcheck=document.getElementById("check_usermail");
	usermailcheck.innerText="";
	var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if(usermail==""||usermail==null){
		usermailcheck.innerText="邮箱不能为空";
	}
	else{
		if (myreg.test(usermail)) {
		usermailcheck.innerText="";		
		}
		else{
			usermailcheck.innerText="邮箱格式错误";
		}
	}
}
var checkTheme=function(){
	var usertheme=document.getElementById("usertheme").value;
	var userthemecheck=document.getElementById("check_usertheme");
	userthemecheck.innerText="";
	if(usertheme==""||usertheme==null){
		userthemecheck.innerText="主题不能为空";
	}
}

var checkCon=function(){
	var usercon=document.getElementById("usercon").value;
	var userconcheck=document.getElementById("check_usercon");
	userconcheck.innerText="";
	if(usercon==""||usercon==null){
		userconcheck.innerText="内容不能为空";
	}
}

var usernameon=document.getElementById("username");
usernameon.onblur=checkUsername;

var mymailon=document.getElementById("usermail");
mymailon.onblur=checkMail;

var mythemeon=document.getElementById("usertheme");
mythemeon.onblur=checkTheme;
var myconon=document.getElementById("usercon");
myconon.onblur=checkCon;

//w3c绑定页面滚动事件
if (document.addEventListener) {
	document.addEventListener('DOMMouseScroll', scrollFunc, false)
}
//传统事件绑定并触发
var browser = myBrowser();
if ("IE" == browser) {
    document.onmousewheel = scrollFunc;  
}else{
    window.onmousewheel = scrollFunc;  
}



scroll();
viewHight();
canh5();
cancss3();
canjs();
canjq();
canbs();
cannj();