$(document).ready(function () {
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
    window.addEventListener("scroll", function () {
        var nav = document.getElementById("nav");
        if (window.scrollY > 100) {
            nav.classList.remove("nav-transparent");
            nav.classList.add("nav-colored");
        } else {
            nav.classList.remove("nav-colored");
            nav.classList.add("nav-transparent");
        }
    });

    // 追踪鼠標移動
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleWindowResize);

    const spansSlow = document.querySelectorAll(".spanSlow");
    const spansFast = document.querySelectorAll(".spanFast");

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
    var maxRotationX = 20; // X軸最大旋轉角度
    var maxRotationY = 20; // Y軸最大旋轉角度

    $(document).on("mousemove", function (e) {
        var ax = -($(window).innerWidth() / 2 - e.pageX) / 20;
        var ay = ($(window).innerHeight() / 2 - e.pageY) / 20;

        // 限制最大旋轉角度
        ax = Math.min(Math.max(ax, -maxRotationX), maxRotationX);
        ay = Math.min(Math.max(ay, -maxRotationY), maxRotationY);

        card.attr(
            "style",
            "transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg);-webkit-transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg);-moz-transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg)"
        );
    });

    // 初始化 Swiper
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 3000,
    });

    swiper.el.addEventListener("mouseenter", function () {
        swiper.autoplay.stop();
    });

    swiper.el.addEventListener("mouseleave", function () {
        swiper.autoplay.start();
    });

    var swiper2 = new Swiper(".mySwiper2", {
        direction: "vertical",
        slidesPerView: 4,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 1000,
    });

    swiper2.el.addEventListener("mouseenter", function () {
        swiper2.autoplay.stop();
    });

    swiper2.el.addEventListener("mouseleave", function () {
        swiper2.autoplay.start();
    });

    let SwiperTop = new Swiper(".swiper--top", {
        spaceBetween: 0,
        centeredSlides: true,
        speed: 6000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        slidesPerView: "auto",
        allowTouchMove: false,
        disableOnInteraction: true,
    });

    let SwiperBottom = new Swiper(".swiper--bottom", {
        spaceBetween: 0,
        centeredSlides: true,
        speed: 6000,
        autoplay: {
            delay: 1,
            reverseDirection: true,
        },
        loop: true,
        loopedSlides: 4,
        slidesPerView: "auto",
        allowTouchMove: false,
        disableOnInteraction: true,
    });

    // 初始化 iframe 自適應
    function resizeIframe(iframe) {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }

    function initIframeResize() {
        var iframe = document.getElementById('myIframe');
        iframe.addEventListener('load', function() {
            resizeIframe(iframe);
        });

        window.addEventListener('resize', function() {
            resizeIframe(iframe);
        });
    }

    window.addEventListener('load', initIframeResize);
});

