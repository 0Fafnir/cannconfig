CamConfig.js text/javascript
// var Vheight = 400;
// var Vwidth = 710;
var Vwidth = window.innerWidth;
var Vheight = window.innerHeight;

var VhalfHeight = Vheight / 2;

var VminiHeight = VhalfHeight / 2.2 -1;
var VminiWidth = Vwidth / 2.2;

var VminiHeight2 = VhalfHeight / 2.2 +2;
var VminiWidth2 = Vwidth / 2.2 +2;


var elementos = [
    'wallpaper-1014',
    'ext-comp-1009',
    'desktop-1017',
    'ext-gen1054',
    'ext-gen1044',
    'ext-quicktips-tip',
    'p_axes',
    'winPreview',
    'h5player_1',
    //'h5player_3',
    'h5player_header_0',
    'h5player_header_3',
    'h5player_header_2'
];
var elemento;

elementos.forEach((elementos, i) => {
    // console.log(`elementos[${i}]=`, elementos);
    elemento = document.getElementById(elementos);
    if (elemento) {
        elemento.remove();
    }
});

document.getElementById('p_ocx').style = `top: 0px; right: auto; left: 0px; width: ${Vwidth}px; height: ${Vheight}px; background-color: rgb(0, 255, 0); border-color: rgb(0, 255, 0); border-style: solid; border-width: 1px;`;
document.getElementById('h5player_0').style = `width: 100%;height: ${VhalfHeight}px;top: 0px;left: 0px;z-index: 100001; background-color: rgb(0, 255, 0); border-color: rgb(0, 255, 0);border-width: 1px;`;
document.getElementById('h5player_2').style = `width: 100%;height: ${VhalfHeight}px;top: ${VhalfHeight}px;left: 0px;z-index: 100001; background-color: rgb(0, 255, 0); border-color: rgb(0, 255, 0);border-width: 1px;`;
document.getElementById('h5player_3').style = `width: ${VminiWidth}px;height: ${VminiHeight}px;top: 0px;left: -60px;z-index: 100001; background-color: rgb(0, 255, 0); border-color: rgb(0, 255, 0);border-width: 1px; border-bottom-right-radius: 10rem;`;

document.getElementById('canvasplayer_0').style = `position: absolute;display: block;top: 0px;left: 0px;width: 100%;height: 100%;`;
document.getElementById('canvasplayer_2').style = `position: absolute;display: block;top: 0px;left: 0px;width: 100%;height: 100%;`;
document.getElementById('canvasplayer_3').style = `position: absolute;display: block;top: 0px;left: 0px;width: 100%;height: 100%;border-bottom-right-radius: 10rem;`;
console.log("Sucesso na operação");


