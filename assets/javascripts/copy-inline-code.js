document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("code").forEach((codeBlock) => {
        if (codeBlock.parentElement.tagName !== "PRE") { // Только для инлайн-кода
            codeBlock.style.cursor = "pointer";
            codeBlock.setAttribute("data-tooltip", "Кликните для копирования");

            codeBlock.addEventListener("click", () => {
                navigator.clipboard.writeText(codeBlock.innerText).then(() => {
                    codeBlock.setAttribute("data-tooltip", "Скопировано!");
                    setTimeout(() => codeBlock.setAttribute("data-tooltip", "Кликните для копирования"), 1000);
                });
            });
        }
    });
});
