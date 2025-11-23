// keys
let keyA = document.querySelector(".key-1");
let keyS = document.querySelector(".key-2");
let keyD = document.querySelector(".key-3");
let keyF = document.querySelector(".key-4");
let keyG = document.querySelector(".key-5");
let keyZ = document.querySelector(".key-6");
let keyX = document.querySelector(".key-7");
let keyC = document.querySelector(".key-8");
let keyH = document.querySelector(".key-9");
let keyJ = document.querySelector(".key-10");
let keyK = document.querySelector(".key-11");
let keyL = document.querySelector(".key-12");
let keyM = document.querySelector(".key-13");
let keyN = document.querySelector(".key-14");
let keyP = document.querySelector(".key-15");
let key1 = document.querySelector(".inner-1");
let key2 = document.querySelector(".inner-2");
let key3 = document.querySelector(".inner-3");
let key5 = document.querySelector(".inner-4");
let key6 = document.querySelector(".inner-5");
let key8 = document.querySelector(".inner-6");
let key9 = document.querySelector(".inner-7");
let key0 = document.querySelector(".inner-8");




// audios
let audioA = new Audio("assets/sounds/28.mp3");
let audioS = new Audio("assets/sounds/29.mp3");
let audioD = new Audio("assets/sounds/30.mp3");
let audioF = new Audio("assets/sounds/31.mp3");
let audioG = new Audio("assets/sounds/32.mp3");
let audioZ = new Audio("assets/sounds/33.mp3");
let audioX = new Audio("assets/sounds/34.mp3");
let audioC = new Audio("assets/sounds/35.mp3");
let audioH = new Audio("assets/sounds/36.mp3");
let audioJ = new Audio("assets/sounds/37.mp3");
let audioK = new Audio("assets/sounds/38.mp3");
let audioL = new Audio("assets/sounds/39.mp3");
let audioM = new Audio("assets/sounds/40.mp3");
let audioN = new Audio("assets/sounds/41.mp3");
let audioP = new Audio("assets/sounds/42.mp3");
let audio1 = new Audio("assets/sounds/43.mp3");
let audio2 = new Audio("assets/sounds/44.mp3");
let audio3 = new Audio("assets/sounds/45.mp3");
let audio5 = new Audio("assets/sounds/46.mp3");
let audio6 = new Audio("assets/sounds/47.mp3");
let audio8 = new Audio("assets/sounds/48.mp3");
let audio9 = new Audio("assets/sounds/49.mp3");
let audio0 = new Audio("assets/sounds/50.mp3");





document.body.addEventListener("keydown", (dets) => {
    if (dets.key.toLowerCase() === "a") {
        audioA.currentTime = 0;
        audioA.play();

        keyA.style.backgroundColor = "#ffffff60";

        setTimeout(() => {
            keyA.style.backgroundColor = "#FFF";
        }, 150)
    }

    else if (dets.key.toLowerCase() === "s") {
        audioS.currentTime = 0;
        audioS.play();

        keyS.style.backgroundColor = "#ffffff60";

        setTimeout(() => {
            keyS.style.backgroundColor = "#FFF";
        }, 150)
    }

    else if (dets.key.toLowerCase() === "d") {
        audioD.currentTime = 0;
        audioD.play();

        keyD.style.backgroundColor = "#ffffff60";

        setTimeout(() => {
            keyD.style.backgroundColor = "#FFF";
        }, 150)
    }

    else if (dets.key.toLowerCase() === "f") {
        audioF.currentTime = 0;
        audioF.play();

        keyF.style.backgroundColor = "#ffffff60";

        setTimeout(() => {
            keyF.style.backgroundColor = "#FFF";
        }, 150)
    }

    else if (dets.key.toLowerCase() === "g") {
        audioG.currentTime = 0;
        audioG.play();

        keyG.style.backgroundColor = "#ffffff60";

        setTimeout(() => {
            keyG.style.backgroundColor = "#FFF";
        }, 150)
    }

    else if (dets.key.toLowerCase() === "z") {
        audioZ.currentTime = 0;
        audioZ.play();

        keyZ.style.backgroundColor = "#ffffff60";

        setTimeout(() => {
            keyZ.style.backgroundColor = "#FFF";
        }, 150)
    }

    else if (dets.key.toLowerCase() === "x") {
        audioX.currentTime = 0;
        audioX.play();

        keyX.style.backgroundColor = "#ffffff60";

        setTimeout(() => {
            keyX.style.backgroundColor = "#FFF";
        }, 150)
    }

    else if (dets.key.toLowerCase() === "c") {
        audioC.currentTime = 0;
        audioC.play();

        keyC.style.backgroundColor = "#ffffff60";

        setTimeout(() => {
            keyC.style.backgroundColor = "#FFF";
        }, 150)
    }

    else if (dets.key.toLowerCase() === "h") {
        audioH.currentTime = 0;
        audioH.play();

        keyH.style.backgroundColor = "#ffffff60";

        setTimeout(() => {
            keyH.style.backgroundColor = "#FFF";
        }, 150)
    }

    else if (dets.key.toLowerCase() === "j") {
        audioJ.currentTime = 0;
        audioJ.play();

        keyJ.style.backgroundColor = "#ffffff60";

        setTimeout(() => {
            keyJ.style.backgroundColor = "#FFF";
        }, 150)
    }

    else if (dets.key.toLowerCase() === "k") {
        audioK.currentTime = 0;
        audioK.play();

        keyK.style.backgroundColor = "#ffffff60";

        setTimeout(() => {
            keyK.style.backgroundColor = "#FFF";
        }, 150)
    }

    else if (dets.key.toLowerCase() === "l") {
        audioL.currentTime = 0;
        audioL.play();

        keyL.style.backgroundColor = "#ffffff60";

        setTimeout(() => {
            keyL.style.backgroundColor = "#FFF";
        }, 150)
    }

    else if (dets.key.toLowerCase() === "l") {
        audioL.currentTime = 0;
        audioK.play();

        keyL.style.backgroundColor = "#ffffff60";

        setTimeout(() => {
            keyL.style.backgroundColor = "#FFF";
        }, 150)
    }

    else if (dets.key.toLowerCase() === "k") {
        audioK.currentTime = 0;
        audioK.play();

        keyK.style.backgroundColor = "#ffffff60";

        setTimeout(() => {
            keyK.style.backgroundColor = "#FFF";
        }, 150)
    }

    else if (dets.key.toLowerCase() === "m") {
        audioM.currentTime = 0;
        audioM.play();

        keyM.style.backgroundColor = "#ffffff60";

        setTimeout(() => {
            keyM.style.backgroundColor = "#FFF";
        }, 150)
    }

    else if (dets.key.toLowerCase() === "n") {
        audioN.currentTime = 0;
        audioN.play();

        keyN.style.backgroundColor = "#ffffff60";

        setTimeout(() => {
            keyN.style.backgroundColor = "#FFF";
        }, 150)
    }

    else if (dets.key.toLowerCase() === "p") {
        audioP.currentTime = 0;
        audioP.play();

        keyP.style.backgroundColor = "#ffffff60";

        setTimeout(() => {
            keyP.style.backgroundColor = "#FFF";
        }, 150)
    }

    else if (dets.key === "1") {
        audio1.currentTime = 0;
        audio1.play();

        key1.style.backgroundColor = "#847b7bff";

        setTimeout(() => {
            key1.style.backgroundColor = "#272424ff";
        }, 150)
    }

    else if (dets.key === "2") {
        audio2.currentTime = 0;
        audio2.play();

        key2.style.backgroundColor = "#847b7bff";

        setTimeout(() => {
            key2.style.backgroundColor = "#272424ff";
        }, 150)
    }

    else if (dets.key === "3") {
        audio3.currentTime = 0;
        audio3.play();

        key3.style.backgroundColor = "#847b7bff";

        setTimeout(() => {
            key3.style.backgroundColor = "#272424ff";
        }, 150)
    }

    else if (dets.key === "5") {
        audio5.currentTime = 0;
        audio5.play();

        key5.style.backgroundColor = "#847b7bff";

        setTimeout(() => {
            key5.style.backgroundColor = "#272424ff";
        }, 150)
    }

    else if (dets.key === "6") {
        audio6.currentTime = 0;
        audio6.play();

        key6.style.backgroundColor = "#847b7bff";

        setTimeout(() => {
            key6.style.backgroundColor = "#272424ff";
        }, 150)
    }


    else if (dets.key === "8") {
        audio8.currentTime = 0;
        audio8.play();

        key8.style.backgroundColor = "#847b7bff";

        setTimeout(() => {
            key8.style.backgroundColor = "#272424ff";
        }, 150)
    }

    
    else if (dets.key === "9") {
        audio9.currentTime = 0;
        audio9.play();

        key9.style.backgroundColor = "#847b7bff";

        setTimeout(() => {
            key9.style.backgroundColor = "#272424ff";
        }, 150)
    }

    
    else if (dets.key === "0") {
        audio0.currentTime = 0;
        audio0.play();

        key0.style.backgroundColor = "#847b7bff";

        setTimeout(() => {
            key0.style.backgroundColor = "#272424ff";
        }, 150)
    }

    

});

keyA.addEventListener("click", () => {
    audioA.currentTime = 0;  // optional but recommended
    audioA.play();

    keyA.style.backgroundColor = "#ffffff60";

    setTimeout(() => {
        keyA.style.backgroundColor = "#FFF";
    }, 200)
});

keyS.addEventListener("click", () => {
    audioS.currentTime = 0;
    audioS.play();

    keyS.style.backgroundColor = "#ffffff60";

    setTimeout(() => {
        keyS.style.backgroundColor = "#FFF";
    }, 200)
});

keyD.addEventListener("click", () => {
    audioD.currentTime = 0;
    audioD.play();

    keyD.style.backgroundColor = "#ffffff60";

    setTimeout(() => {
        keyD.style.backgroundColor = "#FFF";
    }, 200)
});

keyF.addEventListener("click", () => {
    audioF.currentTime = 0;
    audioF.play();

    keyF.style.backgroundColor = "#ffffff60";

    setTimeout(() => {
        keyF.style.backgroundColor = "#FFF";
    }, 200)
});

keyG.addEventListener("click", () => {
    audioG.currentTime = 0;
    audioG.play();

    keyG.style.backgroundColor = "#ffffff60";

    setTimeout(() => {
        keyG.style.backgroundColor = "#FFF";
    }, 200)
});

keyZ.addEventListener("click", () => {
    audioZ.currentTime = 0;
    audioZ.play();

    keyZ.style.backgroundColor = "#ffffff60";

    setTimeout(() => {
        keyZ.style.backgroundColor = "#FFF";
    }, 200)
});

keyX.addEventListener("click", () => {
    audioX.currentTime = 0;
    audioX.play();

    keyX.style.backgroundColor = "#ffffff60";

    setTimeout(() => {
        keyX.style.backgroundColor = "#FFF";
    }, 200)
});

keyC.addEventListener("click", () => {
    audioC.currentTime = 0;
    audioC.play();

    keyC.style.backgroundColor = "#ffffff60";

    setTimeout(() => {
        keyC.style.backgroundColor = "#FFF";
    }, 200)
});

keyH.addEventListener("click", () => {
    audioH.currentTime = 0;
    audioH.play();

    keyH.style.backgroundColor = "#ffffff60";

    setTimeout(() => {
        keyH.style.backgroundColor = "#FFF";
    }, 200)
});

keyJ.addEventListener("click", () => {
    audioJ.currentTime = 0;
    audioJ.play();

    keyJ.style.backgroundColor = "#ffffff60";

    setTimeout(() => {
        keyJ.style.backgroundColor = "#FFF";
    }, 200)
});

keyK.addEventListener("click", () => {
    audioK.currentTime = 0;
    audioK.play();

    keyK.style.backgroundColor = "#ffffff60";

    setTimeout(() => {
        keyK.style.backgroundColor = "#FFF";
    }, 200)
});

keyL.addEventListener("click", () => {
    audioL.currentTime = 0;
    audioL.play();

    keyL.style.backgroundColor = "#ffffff60";

    setTimeout(() => {
        keyL.style.backgroundColor = "#FFF";
    }, 200)
});

keyM.addEventListener("click", () => {
    audioM.currentTime = 0;
    audioM.play();

    keyM.style.backgroundColor = "#ffffff60";

    setTimeout(() => {
        keyM.style.backgroundColor = "#FFF";
    }, 200)
});

keyN.addEventListener("click", () => {
    audioN.currentTime = 0;
    audioN.play();

    keyN.style.backgroundColor = "#ffffff60";

    setTimeout(() => {
        keyN.style.backgroundColor = "#FFF";
    }, 200)
});

keyP.addEventListener("click", () => {
    audioP.currentTime = 0;
    audioP.play();

    keyP.style.backgroundColor = "#ffffff60";

    setTimeout(() => {
        keyP.style.backgroundColor = "#FFF";
    }, 200)
});

key1.addEventListener("click", (event) => {
    event.stopPropagation();   

    audio1.currentTime = 0;
    audio1.play();

    key1.style.backgroundColor = "#847b7bff";

    setTimeout(() => {
        key1.style.backgroundColor = "#272424ff";
    }, 150);
});

key2.addEventListener("click", (event) => {
    event.stopPropagation();   

    audio2.currentTime = 0;
    audio2.play();

    key2.style.backgroundColor = "#847b7bff";

    setTimeout(() => {
        key2.style.backgroundColor = "#272424ff";
    }, 150);
});

key3.addEventListener("click", (event) => {
    event.stopPropagation();   

    audio3.currentTime = 0;
    audio3.play();

    key3.style.backgroundColor = "#847b7bff";

    setTimeout(() => {
        key3.style.backgroundColor = "#272424ff";
    }, 150);
});

key5.addEventListener("click", (event) => {
    event.stopPropagation();   

    audio5.currentTime = 0;
    audio5.play();

    key5.style.backgroundColor = "#847b7bff";

    setTimeout(() => {
        key5.style.backgroundColor = "#272424ff";
    }, 150);
});

key6.addEventListener("click", (event) => {
    event.stopPropagation();   

    audio6.currentTime = 0;
    audio6.play();

    key6.style.backgroundColor = "#847b7bff";

    setTimeout(() => {
        key6.style.backgroundColor = "#272424ff";
    }, 150);
});

key8.addEventListener("click", (event) => {
    event.stopPropagation();   

    audio8.currentTime = 0;
    audio8.play();

    key8.style.backgroundColor = "#847b7bff";

    setTimeout(() => {
        key8.style.backgroundColor = "#272424ff";
    }, 150);
});

key9.addEventListener("click", (event) => {
    event.stopPropagation();   

    audio9.currentTime = 0;
    audio9.play();

    key9.style.backgroundColor = "#847b7bff";

    setTimeout(() => {
        key9.style.backgroundColor = "#272424ff";
    }, 150);
});

key0.addEventListener("click", (event) => {
    event.stopPropagation();   

    audio0.currentTime = 0;
    audio0.play();

    key0.style.backgroundColor = "#847b7bff";

    setTimeout(() => {
        key0.style.backgroundColor = "#272424ff";
    }, 150);
});




