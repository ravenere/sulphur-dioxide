document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".hover-preview").forEach((element) => {
        let img = document.createElement("img");
        img.src = element.dataset.image;
        img.className = "preview-image";
        document.body.appendChild(img);

        element.addEventListener("mouseenter", (event) => {
            img.style.display = "block";
            img.style.left = event.pageX + "px";
            img.style.top = event.pageY + "px";
        });

        element.addEventListener("mousemove", (event) => {
            img.style.left = event.pageX + "px";
            img.style.top = event.pageY + "px";
        });

        element.addEventListener("mouseleave", () => {
            img.style.display = "none";
        });
    });
});
