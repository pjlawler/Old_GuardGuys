
const burger_wrapperEl = document.querySelector(".burger-wrapper");
const burger_menuEl = document.querySelector(".burger-menu");
const menu_items = document.getElementsByClassName("navmenu-item");

let burger_menu_on = false;

function populate_burger_menu() {
    for(let i=0; i < menu_items.length; i++) {
        const buttonTitle = menu_items[i].textContent;
        const buttonLink = menu_items[i].parentElement.href;
        const aEl = document.createElement("a");

        aEl.href = buttonLink;
        aEl.innerText = buttonTitle;
        aEl.classList.add("burger-item");
        burger_menuEl.appendChild(aEl);





    }
}

function burger_clicked() {
    if(burger_menu_on) {
        burger_menuEl.classList.add("menu-hidden");
        burger_menu_on = false;
    } else {
        burger_menuEl.classList.remove("menu-hidden");
        burger_menu_on = true;
    }
}

function burger_menu_selection(event) {
    console.log(event.target)
    burger_clicked();
}




burger_wrapperEl.addEventListener("click", burger_clicked);
burger_menuEl.addEventListener('click', burger_menu_selection);


populate_burger_menu();