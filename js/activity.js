$(document).ready(function () {
    $("td").click(function () { //user select a table data cell
        var content = $(this).text(); //get content of cell
        var col = $(this).index(); //get index of selected cell

        if (content != "Not Available" && col != 0) { //check if content does not contain a particular string
            $(this).toggleClass("tdHighlight"); //add or remove class when cell is selected

            var header = $("th").eq(col).text(); //get content of header cell based on index of selected cell
            var fullText = content + " at " + header;

            if ($(this).hasClass("tdHighlight")) { //check if selected cell has class
                // Append to modal result
                $('#modalResult').append("<p class=\"modal-item\">" + fullText + "</p>");
            } else { //if selected cell don't have class
                // Remove matching item from modal
                $('#modalResult p:contains(' + content + ' at ' + header + ')').remove();
            }

            // If there are any selected items, show the modal; otherwise hide it
            if ($('#modalResult').children().length > 0) {
                $('#selectedModal').modal('show');
            } else {
                $('#selectedModal').modal('hide');
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

    $('#modalGetInfo').click(function () {
        var items = [];
        $('#modalResult .modal-item').each(function () {
            items.push($(this).text());
        });

        if (items.length === 0) {
            alert('Please select at least one activity.');
            return;
        }

        alert('Sending info for :\n' + items.join('\n'));

        $('.tdHighlight').removeClass('tdHighlight');
        $('#modalResult').empty();
        $('#selectedModal').modal('hide');
    });
});