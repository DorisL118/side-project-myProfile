// 確保文檔加載完畢後再執行代碼
$(document).ready(function() {
    // 初始化 smoove 插件
    $(".smoove").smoove({
        offset: "40%",
    });

    $(".smoove-z").smoove({
        rotateX: "90deg",
        moveZ: "-500px",
        moveY: "100px",
    });

    // 滾動時更改導航欄背景色
    window.addEventListener('scroll', function() {
        var nav = document.getElementById('nav');
        if (window.scrollY > 100) { // 超過 100 像素後添加背景色
            nav.classList.remove('nav-transparent');
            nav.classList.add('nav-colored');
        } else { // 否則保持透明背景
            nav.classList.remove('nav-colored');
            nav.classList.add('nav-transparent');
        }
    });

    // 追踪鼠標移動
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleWindowResize);

    const spansSlow = document.querySelectorAll('.spanSlow');
    const spansFast = document.querySelectorAll('.spanFast');

    let width = window.innerWidth;

    function handleMouseMove(e) {
        let normalizedPosition = e.pageX / (width / 2) - 1;
        let speedSlow = 100 * normalizedPosition;
        let speedFast = 200 * normalizedPosition;
        spansSlow.forEach((span) => {
            span.style.transform = `translate(${speedSlow}px)`;
        });
        spansFast.forEach((span) => {
            span.style.transform = `translate(${speedFast}px)`;
        });
    }

    // 重新計算窗口寬度
    function handleWindowResize() {
        width = window.innerWidth;
    }

    // 鼠標移動效果
    var card = $(".project-1");

    $(document).on("mousemove", function(e) {
        var ax = -($(window).innerWidth() / 2 - e.pageX) / 20;
        var ay = ($(window).innerHeight() / 2 - e.pageY) / 10;
        card.attr("style", "transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg);-webkit-transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg);-moz-transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg)");
    });
});
