$(document).ready(function(){

    //响应式菜单显示与隐藏
    $("#switchBtn").toggle(function(){
         $(".menuUl").addClass("showUl");
    },function(){
        $(".menuUl").removeClass("showUl");
    });

});