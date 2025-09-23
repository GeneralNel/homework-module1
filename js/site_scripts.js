//Function to add partner images to the partners section
function addPartners() {
    var photos = [];
    var partnerList = [];
    var image;
    var openList = '<li class="partner">'; //Declare a variable to contain open list tag for partner images list
    var closeList = '</li>'; //Declare a variable to contain close list tag for partners image list

    var partnerNames = ["partner-bustour", "partner-cabinrental", "partner-campingadv", "partner-collegetours", "partner-rentalbike", "partner-tourgroup"];
    //Create a loop to create 6 images starting with index of 0
    for (var i = 0; i < 6; i++) {
        photos.push("<img src='images/partners/" + partnerNames[i] + ".png'>"); //assemble image code
        image = openList + photos[i] + closeList; //assemble image list code
        partnerList.push(image); //Store(push) the assembled list code
    }
    //Display all partner images stored in the array
    document.getElementById("partners").innerHTML = partnerList.join("");
}

//Run addPartners function to add partner images
addPartners();