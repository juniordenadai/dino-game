const dino = document.querySelector('.dino');
const back = document.querySelector('.back');
let jumping = false;
let position = 0;

function handleKeyUp(event){
    if (event.keyCode ===32){
        if (!jumping){
        jump();
        
        }
    }
}

function jump(){
    jumping = true;
    let upInterval = setInterval(() =>
    {  
    //stop
    if (position >= 180){
        clearInterval(upInterval);

        //desce
        let downInterval = setInterval(()=>{
            if (position <=0){
                clearInterval(downInterval);
                jumping = false;
            }
            else{
                position-=20;
                dino.style.bottom = position + 'px';
            }
        },30);
    }
        //subida
        position+=20;
        dino.style.bottom = position + 'px';
    }, 20); 
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6500;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    back.appendChild(cactus);

    let leftInterval = setInterval(()=>{
        if (cactusPosition <= -60){
            clearInterval(leftInterval)
            back.removeChild(cactus);
            
        }
        else if (cactusPosition > 0 && cactusPosition < 60 && position <60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="gameover">GAME OVER</h1>';
        }
        else {
        cactusPosition-=10;
            cactus.style.left = cactusPosition + 'px';  
        }    
    },20);
    setTimeout(createCactus,randomTime);

}
createCactus();
document.addEventListener('keyup', handleKeyUp);