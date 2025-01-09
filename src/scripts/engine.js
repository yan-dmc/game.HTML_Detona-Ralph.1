const state = {
    view: {
        score: document.querySelector("#game-score"),
        highScore: document.querySelector("#high-score"),
        lives: document.querySelector(".lives"),
        ralph: document.querySelector(".ralph"),
        ralphImg: document.querySelector(".ralphImg"),
        windows: document.querySelectorAll(".window"),
    },
    values: {
        tripleclick: 0,
        lastClick: null,
        points: 0,
        count: 0,
    },
    actions: {
        
    }
};

function playSound(audioName, repeat, volume) {
    const audio = new Audio(`./src/audios/FixItFelix-SFX/FELIX-${audioName}.wav`);
    audio.volume = volume;
    if (repeat === "repeat") {
        audio.loop = true;
    }
    audio.play();
}

// Inicializa som de fundo após a interação
document.addEventListener("DOMContentLoaded", () => {
    const initSound = () => {
        playSound(26, "repeat", 0.5); 
        document.removeEventListener("click", initSound); 
    };
    document.addEventListener("click", initSound);
});


function formatCounter(number) {
    return number.toString().padStart(6, '0');
}

function breakWindow(number) {
    if (number >= 15) {
        state.values.count = 0;
        return true;
    }
}

function addListenerHitbox() {
    state.view.windows.forEach((window)=>{
        window.addEventListener("mousedown", () =>{
            if (state.values.lastClick !== window) {
                state.values.tripleclick = 0;
            }
            state.values.lastClick = window;
            state.values.tripleclick++;
            if (state.values.tripleclick === 3 && window.classList.contains("hidden")) {
                state.values.points++;
                state.values.count++;
                window.classList.remove("hidden");
                window.classList.add("window-effect");
                state.values.tripleclick = 0;
                state.values.lastClickedWindow = null; 
                state.view.score.textContent = formatCounter(state.values.points);
                playSound(27, "", 1);
                if (breakWindow(state.values.count)) {
                    state.view.ralphImg.src = ("./src/images/ralph-punch.gif");
                    playSound(28, "", 1);
                    setTimeout(() => {
                        state.view.windows.forEach((window)=>{
                        window.classList.add("hidden");
                        window.classList.remove("window-effect");
                        state.view.ralphImg.src = ("./src/images/ralph.gif");
                        });
                    }, 1000);
                }
            }
        })
    })
}

function main() {
    addListenerHitbox();
}

main();