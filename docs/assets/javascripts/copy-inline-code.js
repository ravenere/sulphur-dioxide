document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("code").forEach((codeElement) => {
        if (codeElement.parentElement.tagName !== "PRE") {  // Исключаем блоки кода
            codeElement.style.cursor = "pointer";  // Делаем курсор указателем
            codeElement.addEventListener("click", function () {
                navigator.clipboard.writeText(codeElement.textContent).then(() => {
                    codeElement.style.backgroundColor = "#d4edda"; // Зелёный фон
                    setTimeout(() => {
                        codeElement.style.backgroundColor = ""; // Убираем подсветку
                    }, 500);
                });
            });
        }
    });
});
