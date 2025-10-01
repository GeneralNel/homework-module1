$(document).ready(function () {
    $('td').each(function () {
        if ($(this).text() != "Not Available") {
            $(this).css('cursor', 'pointer'); // Change cursor to pointer
            $(this).click(function () {
                $(this).toggleClass('selectedCell'); // Toggle the 'selectedCell' class on click
            });
        }
        });
});