$(document).ready(function () {
    $("td").click(function () { //user select a table data cell
        var content = $(this).text(); //get content of cell
        var col = $(this).index(); //get index of selected cell

        if (content != "Not Available" && col != 0) { //check if content does not contain a particular string
            $(this).toggleClass("tdHighlight"); //add or remove class when cell is selected

            if ($(this).hasClass("tdHighlight")) { //check if selected cell has class
                var header = $("th").eq(col).text(); //get content of header cell based on index of selected cell
                content = content + " at " + header; //add header content to selected cell content

                $('#displaySelected').css("visibility", "visible"); //make display box visible
                $('#displaySelected').css("margin-top", "2em"); //add spaces above display box
                $('#result').append("<p>" + content + "</p>"); //add child element with contents of cell

            } else { //if selected cell don't have class
                $('#result p:contains(' + content + ')').remove(); //remove child element

                if ($('#result').has('p').length == false) { //check if there are any child elements within parent
                    $('#displaySelected').css("visibility", "hidden"); //make display box hidden
                    $('#displaySelected').css("margin-top", "0"); //remove spaces above display box
                }
            }
        }
    });
    $("td").hover(function () {
        var content = $(this).text(); //get content of cell
        var col = $(this).index(); //get index of selected cell

        if (content != "Not Available" && col != 0) { //check if content does not contain a particular string
            $(this).css("cursor", "pointer");
        }
    });
});