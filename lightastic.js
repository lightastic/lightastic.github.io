// mobile menu
window.addEventListener('load', (event) => {

    const burgerItem = document.querySelector('#burger');
    const navbarMenu = document.querySelector('#nav-links');

    burgerItem.addEventListener('click', () => {
        navbarMenu.classList.toggle('is-active');
    });
});
/*
var firstDivContent = document.getElementById('mydiv1');
var secondDivContent = document.getElementById('mydiv2');
Now just assign mydiv1's content to mydiv2.

secondDivContent.innerHTML = firstDivContent.innerHTML;
*/

window.addEventListener('load', (event) => {
    var toc = document.getElementById('TOC');
    if (toc == null) {
        console.log("TOC: no TOC element found");
        return
    }

    const headings = document.querySelectorAll('div.content h1, div.content h2, div.content h3');
    if (headings.length == 0) {
        console.log("TOC: no headings found");
        return
    }

    var inSublist = false;
    var tocHTML = "<ul>";

    headings.forEach(e => {
        if (e.tagName == "H1" || e.tagName == "H2") {
            if (inSublist) {
                tocHTML += "</ul>";
                inSublist = false;
            }
        } else if (e.tagName == "H3") {
            if (!inSublist) {
                tocHTML += "<ul>";
                inSublist = true;
            }
        }
        tocHTML += '<li><a href="#' + e.id + '">' + e.innerText + '</a></li>';
    });

    if (inSublist) {
        tocHTML += "</ul>";
    }
    tocHTML += "</ul>";

    toc.innerHTML = tocHTML;
});
