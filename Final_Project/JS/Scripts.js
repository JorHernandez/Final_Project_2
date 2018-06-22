$("#btnResi").click(function (e) {
    changeDisName("1234 Resi Street");
    changeResi();
    console.log('Click');
    event.preventDefault();
})

$("#btnInd").click(function (e) {
    changeDisName("456 Industrial Way");
    changeInd();
    console.log('Click2');
    event.preventDefault();
})

$("#btnComm").click(function (e) {
    changeDisName("789 Commercial Blvd");
    changeComm();
    console.log('Click3');
    event.preventDefault();
})

$("#btnMResi").click(function (e) {
    changeDisName("1011 Multiresi Pl");
    changeMFam();
    console.log('Click4');
    event.preventDefault();
})

function changeDisName(text) {
     $(".header-info h1").html(text);
 }



function changeResi(){
    $('#map').attr('src', '../Images/Residential/ResiMap_View.PNG' );
    $('#info').attr('src','../Images/Residential/ResiBuilding_Info.PNG');
    $('#alpha').attr('src','../Images/Residential/ResiAlpha_Bravo.PNG');
    $('#bravo').attr('src','../Images/Residential/ResiAlpha_Bravo.PNG');
    $('#charlie').attr('src','../Images/Residential/ResiBravo_Charlie.PNG');
    $('#delta').attr('src','../Images/Residential/ResiCharlie_Delta.PNG');
}

function changeInd() {
    $('#map').attr('src', '../Images/Industrial/IndMap_view.PNG' );
    $('#info').attr('src','../Images/Industrial/IndBuilding_Info.PNG');
    $('#alpha').attr('src','../Images/Industrial/IndAlpha_Bravo.PNG');
    $('#bravo').attr('src','../Images/Industrial/IndBravo_Charlie.PNG');
    $('#charlie').attr('src','../Images/Industrial/IndCharlie_Delta.PNG');
    $('#delta').attr('src','../Images/Industrial/IndAlpha_Delta.PNG');
}


function changeComm(){
    $('#map').attr('src', '../Images/Business/BusiMap.PNG' );
    $('#info').attr('src','../Images/Business/BusiBuilding_Info.PNG');
    $('#alpha').attr('src','../Images/Business/BusiAlpha.PNG');
    $('#bravo').attr('src','../Images/Business/BusiBravo.PNG');
    $('#charlie').attr('src','../Images/Business/BusiCharlie.PNG');
    $('#delta').attr('src','../Images/Business/BusiDelta.PNG');
}

function changeMFam() {
    $('#map').attr('src', '../Images/Multi_Family/MFamMap_View.PNG' );
    $('#info').attr('src','../Images/Multi_Family/MFamBuilding_Info.PNG');
    $('#alpha').attr('src','../Images/Multi_Family/MFamAlpha_Bravo.PNG');
    $('#bravo').attr('src','../Images/Multi_Family/MFamBravo_Charlie.PNG');
    $('#charlie').attr('src','../Images/Multi_Family/MFamCharlie_Delta.PNG');
    $('#delta').attr('src','../Images/Multi_Family/MFamAlpha_Delta.PNG');
}



