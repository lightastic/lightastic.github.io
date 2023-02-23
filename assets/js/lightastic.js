// mobile menu
window.addEventListener('load', (event) => {

    const burgerItem = document.querySelector('#burger');
    const navbarMenu = document.querySelector('#nav-menu');

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

/* TOC STUFF... no longer used
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
    var tocHTML = ""; // we will build the HTML that will go inside a <ul></ul> here...

    headings.forEach(e => {
        if (e.tagName == "H1" || e.tagName == "H2") {
            if (inSublist) {
                tocHTML += "</ul></li>";
                inSublist = false;
            }
        } else if (e.tagName == "H3") {
            if (!inSublist) {
                tocHTML += "<li><ul>";
                inSublist = true;
            }
        }
        tocHTML += '<li><a href="#' + e.id + '">' + e.innerText + '</a></li>';
    });

    if (inSublist) {
        tocHTML += "</ul></li>";
    }

    toc.innerHTML = tocHTML;
    toc.parentNode.classList.toggle('is-hidden');
});
*/
