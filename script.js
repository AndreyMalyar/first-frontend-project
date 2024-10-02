//////////
// section basicsGit, tabs code
//////////
document.querySelectorAll(".tabs-trigger__item").forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const  id = e.target.getAttribute('href').replace("#", "");

        document.querySelectorAll(".tabs-trigger__item").forEach(child => {
            child.classList.remove("tabs-trigger__item_active");
        })
        document.querySelectorAll(".tabs-content__item").forEach(child => {
            child.classList.remove("tabs-content__item_active");
        })

        item.classList.add("tabs-trigger__item_active");
        document.getElementById(id).classList.add("tabs-content__item_active");
    })
})