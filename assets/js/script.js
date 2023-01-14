$(window).on("load", function () {

    // initMenu();
    hideLoading();
    enablePortfolio();
});


// function initMenu() {

//     if ($("#menu-svg").length > 0) {
//         const MENU = $("#menu-svg");
//         MENU.on("click", function () {
//             $(this).toggleClass("active");
//             $(".menu2__list").toggleClass("active");
//         });
//     }
// }

function hideLoading() {
    setTimeout(() => {
        if ($(".loading").length > 0) {
            $(".loading").addClass("finished");
        }
    }, 1000);
}

function enablePortfolio() {
    setTimeout(() => {
        if ($(".loading").hasClass("finished")) {
            $(".portfolio__card-describe-item-experience-attribute").css("display", "flex")
        }
    }, 1000);
}
