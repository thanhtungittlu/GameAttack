var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)
var btnStart = $('.start')
var player = $('#player')
var navigation = $('#navigation')
var listNav = $('.list-nav')
var btnAttack = $('.attack')
var btnSpecial = $('.special-attack')
var btnHeal = $('.heal')
var btnGiveUp = $('.give-up')
var statusGame = $('#status')
var progressPlayer1 = $('.progressPlayer1')
var progressPlayer2 = $('.progressPlayer2')


const app = {

    //Hàm xử lý kết thúc

    gameOver: function() {
        if(progressPlayer1.getAttribute('data-label') == 0 ){
            setTimeout(() => {alert("Monster is the Winner")},0) 
            location.reload()
        }
        if(progressPlayer2.getAttribute('data-label') == 0 ){
            setTimeout(() => {alert("You are the Winner")},0) 
            location.reload();
        }
        
    },

    //Hàm xử lý các sử kiện 
    handleEvents:function() {
        const _this = this

        btnStart.onclick = function(){
            btnStart.style.display = 'none'
            listNav.style.display = 'inline'
        }

        btnAttack.onclick = function(){
            let damePlayer1 = Math.floor(Math.random()*9+1) //Tạo số ngẫu nhiên từ 1-9
            let damePlayer2 = Math.floor(Math.random()*9+1) //Tạo số ngẫu nhiên từ 1-9
            statusGame.innerHTML = statusGame.innerHTML + `
                <div class="monsterHits">MONSTER HITS PLAYER FOR ${damePlayer2}</div>
                <div class="playerHits">PLAYER HITS MONSTER FOR ${damePlayer1}</div>
            `
            progressPlayer1.value = progressPlayer1.value - damePlayer2
            progressPlayer1.setAttribute('data-label',`${progressPlayer1.value}`) 
            progressPlayer2.value = progressPlayer2.value - damePlayer1
            progressPlayer2.setAttribute('data-label',`${progressPlayer2.value}`)

            statusGame.scrollTo(0,statusGame.scrollHeight)
            _this.gameOver()
        }


        btnSpecial.onclick = function(){
            let damePlayer1 = Math.floor(Math.random()*9+5) //Tạo số ngẫu nhiên từ 1-9
            let damePlayer2 = Math.floor(Math.random()*9+1) //Tạo số ngẫu nhiên từ 1-9
            statusGame.innerHTML = statusGame.innerHTML + `
                <div class="monsterHits">MONSTER HITS PLAYER FOR ${damePlayer2}</div>
                <div class="playerHits">PLAYER HITS MONSTER FOR ${damePlayer1}</div>
            `
            progressPlayer1.value = progressPlayer1.value - damePlayer2
            progressPlayer1.setAttribute('data-label',`${progressPlayer1.value}`) 
            progressPlayer2.value = progressPlayer2.value - damePlayer1
            progressPlayer2.setAttribute('data-label',`${progressPlayer2.value}`)
            statusGame.scrollTo(0,statusGame.scrollHeight)
            _this.gameOver()
        }

        btnHeal.onclick=function(){
            let healPlayer1 = Math.floor(Math.random()*9) //Tạo số ngẫu nhiên từ 1-9
            let healPlayer2 = Math.floor(Math.random()*9) //Tạo số ngẫu nhiên từ 1-9

            if(progressPlayer2.value == 100){
                setTimeout(() => {alert("Monster is full heal")},0) 
            }else{
                statusGame.innerHTML = statusGame.innerHTML + `
                <div class="monsterHits">MONSTER +${healPlayer2} HEAL</div>
                `
                progressPlayer2.value = progressPlayer2.value + healPlayer2
                progressPlayer2.setAttribute('data-label',`${progressPlayer2.value}`)
            }
            if(progressPlayer1.value == 100){
                setTimeout(() => {alert("You are full heal")},0) 
            }else{
                statusGame.innerHTML = statusGame.innerHTML + `
                <div class="playerHits">PLAYER +${healPlayer1}  HEAl</div>
                `
                progressPlayer1.value = progressPlayer1.value + healPlayer1
                progressPlayer1.setAttribute('data-label',`${progressPlayer1.value}`) 
            }
            statusGame.scrollTo(0,statusGame.scrollHeight)
        }

        btnGiveUp.onclick=function(){
            location.reload();
        }
    },
    start: function() {
        this.handleEvents()
    },
}

app.start()