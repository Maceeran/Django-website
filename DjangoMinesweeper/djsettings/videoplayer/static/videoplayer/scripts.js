function populateVideoList(){
    videoList = document.getElementsByClassName("videoListElement");
    var i = 0;
    var usedIndexes = [];
    while(i < videoList.length){
        imgElem = videoList[i].getElementsByTagName("img");
        randomLinkIndex = Math.floor(Math.random() * ytLinkList.length);

        while (usedIndexes.includes(randomLinkIndex)){
            randomLinkIndex = Math.floor(Math.random() * ytLinkList.length);
        };

        usedIndexes[i] = randomLinkIndex;
        imgElem[0].src = "https://img.youtube.com/vi/" + ytLinkList[randomLinkIndex].slice(32, 43) + "/mqdefault.jpg";
        console.log(Math.floor(Math.random() * ytLinkList.length), ytLinkList.length);

        i++;
    };
};

function setPlayerSrc(element){
    fullLink = "https://www.youtube.com/embed/" + element.src.slice(27, 38);
    document.getElementById("videoPlayer").src = fullLink;
    console.log(fullLink)
};

ytLinkList = [  "https://www.youtube.com/watch?v=0OWPADFASFM",
                "https://www.youtube.com/watch?v=Ot-acn1whrc",
                "https://www.youtube.com/watch?v=0nisJRrsNmc",
                "https://www.youtube.com/watch?v=7zOQSjE-UTo",
                "https://www.youtube.com/watch?v=PgYO3VB6ubo",
                "https://www.youtube.com/watch?v=XAFnxV2GYRU",
                "https://www.youtube.com/watch?v=XeEYaX82jSE",
                "https://www.youtube.com/watch?v=f7k-q21pJzQ",
                "https://www.youtube.com/watch?v=Uvpw6Jh1WGQ",
                "https://www.youtube.com/watch?v=o2L8qINZD3Q",
                "https://www.youtube.com/watch?v=HPe6BgzHWY0",
                "https://www.youtube.com/watch?v=SfsKHfaZEu4",
                "https://www.youtube.com/watch?v=X0oYUGLhO_o",
                "https://www.youtube.com/watch?v=PPySn3slfXI",
                "https://www.youtube.com/watch?v=G2xFJUSLEv8",
                "https://www.youtube.com/watch?v=xSsMr87Pw5k",
                "https://www.youtube.com/watch?v=_BBOvVdWIkw",
                "https://www.youtube.com/watch?v=1qnjsOG84DE",
                "https://www.youtube.com/watch?v=VymuQC0o7yQ",
                "https://www.youtube.com/watch?v=VymuQC0o7yQ",
                "https://www.youtube.com/watch?v=EKI3ICGSWQE",
                "https://www.youtube.com/watch?v=seAeyajk_VU",
                "https://www.youtube.com/watch?v=bsiayJSoYO0",
                "https://www.youtube.com/watch?v=IDWQ_uCwxso",
                "https://www.youtube.com/watch?v=U2rCl0bn3c8",
                "https://www.youtube.com/watch?v=IDWQ_uCwxso",
                "https://www.youtube.com/watch?v=aLjMSvDFEeA",
                "https://www.youtube.com/watch?v=7ftrUdKFKZg",
];