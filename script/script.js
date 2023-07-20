document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".item");

    accordionItems.forEach((item) => {
        const button = item.querySelector(".accordion-btn");
        const content = item.querySelector(".conteudo");

        content.style.display = "none";

        button.addEventListener("click", function () {
        
            if (content.style.display === "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});
