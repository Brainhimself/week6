document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    
    sidebar.addEventListener("mouseover", () => {
        sidebar.classList.remove("collapsed");
    });

    sidebar.addEventListener("mouseleave", () => {
        sidebar.classList.add("collapsed");
    });

    sidebar.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });
});
