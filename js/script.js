document.addEventListener("DOMContentLoaded", () => {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    
    // Display and hiden description of project 
    for (i = 1; i <= 6; i++) {
        let j = 'p'+i+'_desc';
        let k = 'p'+i;
        
        document.getElementById(k).addEventListener(
            "mouseover", function () {
                document.getElementById(j).style.visibility = "visible";
            }
        );
        document.getElementById(k).addEventListener(
            "mouseout", function () {
                document.getElementById(j).style.visibility = "hidden";
            }
        );
    }

});