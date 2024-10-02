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

//////////
// main button top-btn
//////////
const topBtn = document.querySelector(".top-btn");
topBtn.addEventListener("click", toTop);

function toTop() {
    let scrolled = window.scrollY;
    scrolled -= 50;
    window.scrollTo(0, scrolled);
    if(scrolled > 0) {
        // topBtn.style.opacity = '0';
        setTimeout(toTop, 20)
    } else {
        // topBtn.style.opacity = '1';
    }
}
window.addEventListener("scroll", () => {
    if (scrollY > 500) { topBtn.style.display = 'flex'; }
    else { topBtn.style.display = 'none'; }
});