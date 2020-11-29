const fadeInImage = document.getElementById('fadeInImage');
const fadeInText = document.getElementById('fadeInText');
fadeInImage.animate([
    {opacity: '0'}, {opacity: '1'}
],1500);

/*fadeInImage.animate([
    {opacity: '0'},
    {opacity: '0.5'}
], 1500, function() {
    fadeInText.animate([
        {opacity: '0'},
        {opacity: '1'}
    ],1500);
});*/

//const fadeInIcon = document.getElementById('fadeInIcon');
//fadeInIcon.animate([{opacity: '0'}, {opacity: '1'}], 1500);

/*var fadein = function() {
    fadeInIcon.animate([{opacity: '0'}, {opacity: '1'}], 1500);
}

setInterval(fadein(), 1000);*/