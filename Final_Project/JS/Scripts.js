//I: Select one of the options
//O: The option will bring up images related to the address


//When drop down is selected:
    
    //Slide district name to the header


$("#btnResi").click(function(e)
{
changeDisName("1234 Resi Street");
console.log('Click');
event.preventDefault();
})

$("#btnInd").click(function(e)
{
    changeDisName("456 Industrial Way");
    console.log('Click2');
    event.preventDefault();
    })

$("#btnComm").click(function(e)
{
    changeDisName("789 Commercial Blvd");
    console.log('Click3');
    event.preventDefault();
})
    
$("#btnMResi").click(function(e)
{
    changeDisName("1011 Multiresi Pl");
    console.log('Click4');
    event.preventDefault();
})






function changeDisName (text) {
$(".header-info h1").html(text);
 }


// change district name 
// display images
// hide other imagess
//e preventdefault