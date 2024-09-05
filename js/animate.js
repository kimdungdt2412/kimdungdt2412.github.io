$(function () {
    /** ---------------------------- //
     *  @group viewport trigger script 
     * for adding or removing classes from elements in view within viewport
    */

    var $window = $(window);
    var $animationElements = $('.animation-element');
    var $logoElements = $('.logo')

    function checkIfInView() {

        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();


        if (windowTopPosition > 50) {
            $logoElements.removeClass('translate-y-0')
            $logoElements.addClass('translate-y-[-100px]')
        } else {
            $logoElements.removeClass('translate-y-[-100px]')
            $logoElements.addClass('translate-y-0')
        }

        var windowBottomPosition = (windowTopPosition + windowHeight);
        $.each($animationElements, function () {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

            //check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('animated');
            }
        });
    }

    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');
});

document.getElementById("nav-button").onclick = function () { handleClickNavButton() };
document.getElementsByClassName("nav-item")

const navItems = document.getElementsByClassName("nav-item");
for (let i = 0; i < navItems.length; i++) {
    navItems[i].onclick = function () { closeNav() };
}

const handleClickNavButton = () => {
    let nav = document.getElementById("site-responsive-nav");
    if (nav.classList.contains("show")) {
        return closeNav()
    }
    return openNav()

}

const openNav = () => {
    let navbar = document.getElementById("site-responsive-nav");
    navbar.classList.add("show")

    let navButton = document.getElementById("nav-button");
    navButton.classList.add("expanded")
    handleMultiClassName(navButton, "bg-pink hover:bg-dark_blue", true)
    navButton.classList.add("bg-green")

}

const closeNav = () => {
    let navbar = document.getElementById("site-responsive-nav");
    navbar.classList.remove("show")

    let navButton = document.getElementById("nav-button");
    navButton.classList.remove("expanded")
    navButton.classList.remove("bg-green")
    handleMultiClassName(navButton, "bg-pink hover:bg-dark_blue")
}

const handleMultiClassName = (currentElem, names, isRemove = false) => {
    const listNames = names.split(" ")
    console.log(listNames)
    if (listNames.length > 0) {
        for (const element of listNames) {
            isRemove ? currentElem.classList.remove(`${element}`) : currentElem.classList.add(element)
        }
    }
}