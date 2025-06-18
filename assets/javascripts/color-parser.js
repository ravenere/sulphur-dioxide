document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("p, li, td, span, h1, h2, h3, h4, h5, h6").forEach((element) => {
        element.innerHTML = element.innerHTML.replace(/clr\.([\w#]+)/g, (match, color) => {
            let validColor = /^#[0-9A-Fa-f]{3,6}$/.test(color) || CSS.supports("color", color);
            return validColor
                ? `<span class="color-box" style="background-color: ${color};"></span>`
                : match;
        });
    });
});
