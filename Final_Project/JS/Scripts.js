//I: Select one of the options
//O: The option will bring up images related to the address


//When drop down is selected:




$("#btnResi").click(function (e) {
    changeDisName("1234 Resi Street");
    displayResi ();
    console.log('Click');
    event.preventDefault();
})

$("#btnInd").click(function (e) {
    changeDisName("456 Industrial Way");
    console.log('Click2');
    event.preventDefault();
})

$("#btnComm").click(function (e) {
    changeDisName("789 Commercial Blvd");
    console.log('Click3');
    event.preventDefault();
})

$("#btnMResi").click(function (e) {
    changeDisName("1011 Multiresi Pl");
    console.log('Click4');
    event.preventDefault();
})






function changeDisName(text) {
    $(".header-info h1").html(text);
}

function displayResi () {
    $(".map").html(<img src="../Images/Residential/ResiMap_View.PNG" />);
}


// change district name 
// display images
// hide other imagess
//e preventdefault
//nice to have: BS modal pop up for each image. 