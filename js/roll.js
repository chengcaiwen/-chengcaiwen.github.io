$(function(){var $ul=$('.roll ul');var timeID;function roll(){clearInterval(timeID);timeID=setInterval(function(){clearInterval(timeID);$ul.animate({top:"0px"},2500,function(){$ul.find("li:first").removeClass().addClass('roll_hide').appendTo($ul);for(var i=0;i<5;i++){$ul.find("li").eq(i).removeClass().addClass('roll_'+(i+1)+'')}
roll()})},1000);}
roll()})