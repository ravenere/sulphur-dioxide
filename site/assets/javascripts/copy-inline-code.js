document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("code").forEach((codeBlock) => {
        if (codeBlock.parentElement.tagName !== "PRE") { // Только для инлайн-кода
            codeBlock.style.cursor = "pointer";
            codeBlock.title = "Кликните для копирования";

            codeBlock.addEventListener("click", () => {
                navigator.clipboard.writeText(codeBlock.innerText).then(() => {
                    codeBlock.title = "Скопировано!";
                    setTimeout(() => (codeBlock.title = "Кликните для копирования"), 900);
                });
            });
        }
    });
});
