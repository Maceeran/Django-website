var timeoutVal = 5000;
var slideshowIndex = [0,0,0,0, 0,0,0,0];
var timeoutID = [0,0,0,0, 0,0,0,0];

function slideshowItem0(){
    clearTimeout(timeoutID[0]);
    if (slideshowIndex[0] == imagesRishi.length - 1) {slideshowIndex[0] = -1}
    else if (slideshowIndex[0] < 0) {slideshowIndex[0] = imagesRishi.length - 2};
    slideshowIndex[0]++;
    var item = document.getElementById("item-0");
    item.style.backgroundImage = " url('" + imagesRishi[slideshowIndex[0]] + " ') ";
    timeoutID[0] = setTimeout(slideshowItem0, timeoutVal);
};

function prevSlideshowItem0() {
    slideshowIndex[0] -= 2;
    slideshowItem0();
};

function pauseSlideshowItem0() {
    clearTimeout(timeoutID[0]);
};

function slideshowItem1(){
    clearTimeout(timeoutID[1]);
    if (slideshowIndex[1] == imagesMonsilva.length - 1) {slideshowIndex[1] = -1;}
    else if (slideshowIndex[1] < 0) {slideshowIndex[1] = imagesMonsilva.length - 2};
    slideshowIndex[1]++;
    var item = document.getElementById("item-1");
    item.style.backgroundImage = " url(' " + imagesMonsilva[slideshowIndex[1]] + " ') ";
    timeoutID[1] = setTimeout(slideshowItem1, timeoutVal);
};

function prevSlideshowItem1() {
    slideshowIndex[1] -= 2;
    slideshowItem1();
};

function pauseSlideshowItem1() {
    clearTimeout(timeoutID[1]);
};

function slideshowItem2(){
    clearTimeout(timeoutID[2]);
    if (slideshowIndex[2] == imagesResearch.length - 1) {slideshowIndex[2] = -1;}
    else if (slideshowIndex[2] < 0) {slideshowIndex[2] = imagesResearch.length - 2};
    slideshowIndex[2]++;
    var item = document.getElementById("item-2");
    item.style.backgroundImage = " url(' " + imagesResearch[slideshowIndex[2]] + " ') ";
    timeoutID[2] = setTimeout(slideshowItem2, timeoutVal);
};
function prevSlideshowItem2() {
    slideshowIndex[2] -= 2;
    slideshowItem2();
};
function pauseSlideshowItem2() {
    clearTimeout(timeoutID[2]);
};

function slideshowItem3(){
    clearTimeout(timeoutID[3]);
    if (slideshowIndex[3] == imagesNoclyria.length - 1) {slideshowIndex[3] = -1;}
    else if (slideshowIndex[3] < 0) {slideshowIndex[3] = imagesNoclyria.length - 2};
    slideshowIndex[3]++;
    var item = document.getElementById("item-3");
    item.style.backgroundImage = " url(' " + imagesNoclyria[slideshowIndex[3]] + " ') ";
    timeoutID[3] = setTimeout(slideshowItem3, timeoutVal);
};
function prevSlideshowItem3() {
    slideshowIndex[3] -= 2;
    slideshowItem3();
};
function pauseSlideshowItem3() {
    clearTimeout(timeoutID[3]);
};

function slideshowItem4(){
    clearTimeout(timeoutID[4]);
    if (slideshowIndex[4] == imagesDojo.length - 1) {slideshowIndex[4] = -1;}
    else if (slideshowIndex[4] < 0) {slideshowIndex[4] = imagesDojo.length - 2};
    slideshowIndex[4]++;
    var item = document.getElementById("item-4");
    item.style.backgroundImage = " url(' " + imagesDojo[slideshowIndex[4]] + " ') ";
    timeoutID[4] = setTimeout(slideshowItem4, timeoutVal);
};
function prevSlideshowItem4() {
    slideshowIndex[4] -= 2;
    slideshowItem4();
};
function pauseSlideshowItem4() {
    clearTimeout(timeoutID[4]);
};

function slideshowItem5(){
    clearTimeout(timeoutID[5]);
    if (slideshowIndex[5] == imagesMine.length - 1) {slideshowIndex[5] = -1;}
    else if (slideshowIndex[5] < 0) {slideshowIndex[5] = imagesMine.length - 2};
    slideshowIndex[5]++;
    var item = document.getElementById("item-5");
    item.style.backgroundImage = " url(' " + imagesMine[slideshowIndex[5]] + " ') ";
    timeoutID[5] = setTimeout(slideshowItem5, timeoutVal);
};
function prevSlideshowItem5() {
    slideshowIndex[5] -= 2;
    slideshowItem5();
};
function pauseSlideshowItem5() {
    clearTimeout(timeoutID[5]);
};

function slideshowItem6(){
    clearTimeout(timeoutID[6]);
    if (slideshowIndex[6] == imagesFacility.length - 1) {slideshowIndex[6] = -1;}
    else if (slideshowIndex[6] < 0) {slideshowIndex[6] = imagesFacility.length - 2};
    slideshowIndex[6]++;
    var item = document.getElementById("item-6");
    item.style.backgroundImage = " url(' " + imagesFacility[slideshowIndex[6]] + " ') ";
    timeoutID[6] = setTimeout(slideshowItem6, timeoutVal);
};
function prevSlideshowItem6() {
    slideshowIndex[6] -= 2;
    slideshowItem6();
};
function pauseSlideshowItem6() {
    clearTimeout(timeoutID[6]);
};

function slideshowItem7(){
    clearTimeout(timeoutID[7]);
    if (slideshowIndex[7] == imagesPrison.length - 1) {slideshowIndex[7] = -1;}
    else if (slideshowIndex[7] < 0) {slideshowIndex[7] = imagesPrison.length - 2};
    slideshowIndex[7]++;
    var item = document.getElementById("item-7");
    item.style.backgroundImage = " url(' " + imagesPrison[slideshowIndex[7]] + " ') ";
    timeoutID[7] = setTimeout(slideshowItem7, timeoutVal);
};
function prevSlideshowItem7() {
    slideshowIndex[7] -= 2;
    slideshowItem7();
};
function pauseSlideshowItem7() {
    clearTimeout(timeoutID[7]);
};


var imagesRishi = ["static/gallery/images/Rishi/0.png","static/gallery/images/Rishi/1.png","static/gallery/images/Rishi/2.png",
                    "static/gallery/images/Rishi/3.png","static/gallery/images/Rishi/4.png","static/gallery/images/Rishi/5.png",
                    "static/gallery/images/Rishi/6.png","static/gallery/images/Rishi/7.png","static/gallery/images/Rishi/8.png",
                    "static/gallery/images/Rishi/9.png","static/gallery/images/Rishi/10.png","static/gallery/images/Rishi/11.png"];

var imagesMonsilva = ["static/gallery/images/Monsilva/0.png","static/gallery/images/Monsilva/1.png","static/gallery/images/Monsilva/2.png",
                        "static/gallery/images/Monsilva/3.png","static/gallery/images/Monsilva/4.png"];

var imagesResearch = ["static/gallery/images/Research/0.png","static/gallery/images/Research/1.png","static/gallery/images/Research/2.png",
                        "static/gallery/images/Research/3.png","static/gallery/images/Research/4.png","static/gallery/images/Research/5.png",
                        "static/gallery/images/Research/6.png","static/gallery/images/Research/7.png"];
                        
var imagesNoclyria = ["static/gallery/images/Noclyria/0.png","static/gallery/images/Noclyria/1.png","static/gallery/images/Noclyria/2.png",
                        "static/gallery/images/Noclyria/3.png","static/gallery/images/Noclyria/4.png","static/gallery/images/Noclyria/5.png",
                        "static/gallery/images/Noclyria/6.png","static/gallery/images/Noclyria/7.png","static/gallery/images/Noclyria/8.png"];
                                                
var imagesDojo = ["static/gallery/images/Dojo/0.png","static/gallery/images/Dojo/1.png","static/gallery/images/Dojo/2.png",
                        "static/gallery/images/Dojo/3.png","static/gallery/images/Dojo/4.png","static/gallery/images/Dojo/5.png",
                        "static/gallery/images/Dojo/6.png"];
         
var imagesMine = ["static/gallery/images/Mine/0.png","static/gallery/images/Mine/1.png","static/gallery/images/Mine/2.png"];

var imagesFacility = ["static/gallery/images/Facility/0.png","static/gallery/images/Facility/1.png","static/gallery/images/Facility/2.png",
                        "static/gallery/images/Facility/3.png","static/gallery/images/Facility/4.png","static/gallery/images/Facility/5.png",
                        "static/gallery/images/Facility/6.png","static/gallery/images/Facility/7.png","static/gallery/images/Facility/8.png"];

var imagesPrison = ["static/gallery/images/Prison/0.png","static/gallery/images/Prison/1.png","static/gallery/images/Prison/2.png","static/gallery/images/Prison/3.png",];
