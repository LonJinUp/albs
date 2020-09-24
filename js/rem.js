//rem布局
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                // 这里的数字 取决于设计稿的宽度
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    recalc();
})(document, window);


// //用于flex定位下的input，失去焦点布局被顶上去
// $("input,select").blur(function () {
//     setTimeout(() => {
//         const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
//         window.scrollTo(0, Math.max(scrollHeight - 1, 0));
//     }, 100);
// });
