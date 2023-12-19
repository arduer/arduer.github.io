function search()
{
    alert('该功能暂未开发！');
};
fetch('head.html')
    .then(response => response.text())
    .then(data => {
        // 将获取的HTML内容插入到页面中
        document.getElementById('NavContent').innerHTML = data;
    })
    .catch(error => console.error('Error:', error));
$(document).ready(function() {
    var navbar = $("#NavContent");
    var stickyPoint = navbar.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() >= stickyPoint) {
            navbar.addClass("sticky-top");
        } else {
            navbar.removeClass("sticky-top");
        }
    });
});

// 当页面滚动时触发
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // 如果滚动超过100px，导航栏就显示出来
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("hidden").style.top = "0";
    } else {
        // 否则，导航栏滑上去
        document.getElementById("hidden").style.top = "-200";
    }
};