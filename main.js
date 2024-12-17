const canvas=document.getElementById("myCanvas");//canvas
const shop=document.getElementById("shop")
const setting=document.getElementById("setting");
const body=document.body;
const ctx=canvas.getContext("2d");
const bodyBg=new Image();
bodyBg.src="./image/yuruCampBG04.png";
canvas.width=1200;
canvas.height=675;
const imageTest= new Image();//images
imageTest.src="./image/test.png";
const ShimaRin_image=new Image();
ShimaRin_image.src="./image/ShimaRin.png"
const imageTest2= new Image();
imageTest2.src="./image/twi.png";
const imageWaterBall=new Image();
imageWaterBall.src="./image/Water__01.png";
const imageFireBall=new Image();
imageFireBall.src="./image/Fire_01.png";
const imageFireBallBlock=new Image();
imageFireBallBlock.src="./image/firebook.png"
const imageWaterBallBlock=new Image();
imageWaterBallBlock.src="./image/waterbook.png"
const enemyBrokenImage=new Image();
enemyBrokenImage.src="./image/coin.png";
var keys=[];
let waterBallImageSrc=["./image/Water__01.png","./image/Water__02.png","./image/Water__03.png","./image/Water__04.png","./image/Water__05.png"];
let fireBallImageSrc=["./image/Fire_01.png","./image/Fire_02.png","./image/Fire_03.png","./image/Fire_04.png","./image/Fire_05.png"];
let modeList=["Easy","Easy","Normal","Hard","Expert","Master","Crazy","Impossible"];
let backGroundImageSrc=["./image/yuruCampBG05.png","./image/yuruCampBG05.png","./image/yuruCampBG04.png","./image/yuruCampBG08.png","./image/yuruCampBG07.png","./image/yuruCampBG06.png","./image/yuruCampBG00.png","./image/yuruCampBG02.png","./image/yuruCampBG.png"]
var frame=0;
var isPause=true;
var autoType=0;//自動攻擊
var lastKey="";
let intervalTime=8000;//幾秒生成一波敵人
let waterBallImage=document.getElementById("waterBallImage")
let fireBallImage=document.getElementById("fireBallImage")
let btn_Pause=document.getElementById("btn_Pause")//button
let btn_goshop=document.getElementById("btn_goshop")
let btn_regame=document.getElementById("btn_regame")
let buy_waterBallDmg=document.getElementById("buy_waterBallDmg")//水球術ID
let buy_waterBallPen=document.getElementById("buy_waterBallPen")
let buy_waterBallSpeed=document.getElementById("buy_waterBallSpeed")
let buy_waterBallDmgValue=document.getElementById("buy_waterBallDmgValue")
let buy_waterBallPenValue=document.getElementById("buy_waterBallPenValue")
let buy_waterBallSpeedValue=document.getElementById("buy_waterBallSpeedValue")
let buy_fireBallDmg=document.getElementById("buy_fireBallDmg")//火球術ID
let buy_fireBallPen=document.getElementById("buy_fireBallPen")
let buy_fireBallSpeed=document.getElementById("buy_fireBallSpeed")
let buy_fireBallDmgValue=document.getElementById("buy_fireBallDmgValue")
let buy_fireBallPenValue=document.getElementById("buy_fireBallPenValue")
let buy_fireBallSpeedValue=document.getElementById("buy_fireBallSpeedValue")
let myCoin=document.getElementById("myCoin");
let score=document.getElementById("Score");
let btn_auto=document.getElementById("btn_auto");
let btn_setting=document.getElementById("btn_setting");
let btn_fireKeyUp=document.getElementById("btn_fireKeyUp");
let btn_fireKeyDown=document.getElementById("btn_fireKeyDown");
let btn_waterKeyUp=document.getElementById("btn_waterKeyUp");
let btn_waterKeyDown=document.getElementById("btn_waterKeyDown");
let fireKeyUp=document.getElementById("fireKeyUp");
let fireKeyDown=document.getElementById("fireKeyDown");
let waterKeyUp=document.getElementById("waterKeyUp");
let waterKeyDown=document.getElementById("waterKeyDown");
let yourKey=document.getElementById("yourKey");
let btn_reKey=document.getElementById("btn_reKey");
let waveView=document.getElementById("wave");
let modeView=document.getElementById("mode");
let btn_previous=document.getElementById("btn_previous");
let btn_next=document.getElementById("btn_next");
let btn_chBg=document.getElementById("btn_chBg");
let btn_bgSet=document.getElementById("btn_bgSet");
let chBgView=document.getElementById("chBgView");
let page=document.getElementById("page");
let btn_keySetting=document.getElementById("btn_keySetting");
let btn_bgSetting=document.getElementById("btn_bgSetting");
let changeKey=document.getElementById("changeKey");
let changeBg=document.getElementById("changeBg");

let atk_waterBall_penetration;//Game Value
let atk_waterBall_dmg;
let atk_waterBall_speed;
let waterBallDmgLevel;
let waterBallPenLevel;
let waterBallSpeedLevel;
let fireUp="KeyQ";
let fireDown="KeyZ";
let waterUp="KeyW";
let waterDown="KeyX"
let atk_fireBall_penetration;//火球術
let atk_fireBall_dmg;
let atk_fireBall_speed;
let fireBallDmgLevel;
let fireBallPenLevel;
let fireBallSpeedLevel;
let coin;
let kill=0;
let wave=0;
let bgFlag=false;
let bgPage=1;
let enemyList=[];

function gameinit(){//重製遊戲
    wave=0;
    intervalTime=8000;
    atk_waterBall.penetration=1;//水球術
    atk_waterBall.openetration=1;
    atk_waterBall.dmg=10;
    atk_waterBall.speed=5;
    atk_waterBall.x=canvas.width-130;
    atk_waterBall.ox=canvas.width-130;
    atk_waterBall.y=canvas.height/2-90;
    atk_waterBall.oy=canvas.height/2-90;
    waterBallDmgLevel=0;
    waterBallPenLevel=0;
    waterBallSpeedLevel=0;
    atk_fireBall.penetration=1;//火球術
    atk_fireBall.openetration=1;
    atk_fireBall.dmg=20;
    atk_fireBall.speed=3;
    atk_fireBall.x=canvas.width-130;
    atk_fireBall.ox=canvas.width-130;
    atk_fireBall.y=canvas.height/2-40;
    atk_fireBall.oy=canvas.height/2-40;
    fireBallDmgLevel=0;
    fireBallPenLevel=0;
    fireBallSpeedLevel=0;
    coin=0;
    kill=0;
    enemyList=[]
    myCoin.innerHTML="Coin:"+coin;//顯示錢
    buy_fireBallSpeedValue.innerHTML="LEVEL 1";//法術等級歸零
    buy_fireBallPenValue.innerHTML="LEVEL 1";
    buy_fireBallDmgValue.innerHTML="LEVEL 1";
    buy_waterBallSpeedValue.innerHTML="LEVEL 1";
    buy_waterBallPenValue.innerHTML="LEVEL 1";
    buy_waterBallDmgValue.innerHTML="LEVEL 1";
    var newImg1=new Image();//圖片回復
    newImg1.src=waterBallImageSrc[0];
    atk_waterBall.image=newImg1;
    waterBallImage.src=waterBallImageSrc[0];
    var newImg2=new Image();
    newImg2.src=fireBallImageSrc[0];
    atk_fireBall.image=newImg2;
    fireBallImage.src=fireBallImageSrc[0];
    console.log(atk_fireBall.penetration,"fire pen")
}

function gameStart(){//遊戲開始
    wave=0;
    intervalTime=8000;
    atk_waterBall_penetration=1;//水球術
    atk_waterBall_dmg=10;
    atk_waterBall_speed=5;
    waterBallDmgLevel=0;
    waterBallPenLevel=0;
    waterBallSpeedLevel=0;
    atk_fireBall_penetration=1;//火球術
    atk_fireBall_dmg=20;
    atk_fireBall_speed=3;
    fireBallDmgLevel=0;
    fireBallPenLevel=0;
    fireBallSpeedLevel=0;
    coin=0;
    kill=0;
    enemyList=[]
    myCoin.innerHTML="Coin:"+coin;//顯示錢
    buy_fireBallSpeedValue.innerHTML="LEVEL 1";//法術等級歸零
    buy_fireBallPenValue.innerHTML="LEVEL 1";
    buy_fireBallDmgValue.innerHTML="LEVEL 1";
    buy_waterBallSpeedValue.innerHTML="LEVEL 1";
    buy_waterBallPenValue.innerHTML="LEVEL 1";
    buy_waterBallDmgValue.innerHTML="LEVEL 1";
}

gameStart();
myCoin.innerHTML="Coin:"+coin;

class Enemy{
    constructor(image,x,y,w,h,speed,hp,maxhp,frame){
        this.image=image;
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.speed=speed;
        this.frame=frame+RandomIntInRange(0,60);
        this.cooldown=false;
        this.cooldownTime=500;
        this.health = hp; 
        this.maxHealth = maxhp; 
        this.image.onload=()=>{
            this.loaded=true;
        }
        this.loaded=false;
    }
    setCooldown() {
        this.cooldown = true;
        setTimeout(() => {
            this.cooldown = false;
        }, this.cooldownTime);
    }
    update(){
        this.draw();
        if(!isPause) this.x=this.x+this.speed/15;
        if(this.x>=canvas.width-100){
            gameOver();
        }
    }
    draw(){
        if(!this.loaded) return;
        this.drawHealthBar();
        if(this.health<=0){
            this.image = enemyBrokenImage;
            audio.die.stop();
            audio.die.play();
        }else{
            if(!isPause){
                if((this.frame%60)<=20){//敵人飛行動作
                if(this.cooldown){
                    if((this.frame%60)<=5) this.image.src="";
                }else{
                    this.image.src="./image/bat1.png";
                }
            }else if((this.frame)%60<=40){
                if(this.cooldown){
                    if((this.frame)%60<=45) this.image.src="";
                }else{
                    this.image.src="./image/bat2.png";
                }
            }else{
                this.image.src="./image/bat3.png";
                }   
            }
        }
        this.frame+=1;
        ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
    }
    drawHealthBar() {//血條繪製
        if(this.health<0){
            this.health=0;
        }
        // ctx.strokeText("LV"+(parseInt(wave/15)+1)+" HP:"+this.health+"/"+this.maxHealth,this.x,this.y-15,);//有等級版
        ctx.strokeText("HP:"+this.health+"/"+this.maxHealth,this.x,this.y-15,);//無等級版
        ctx.fillStyle = 'gray';//生命值背景
        ctx.fillRect(this.x, this.y - 10, this.w,5);
        let healthBarWidth = (this.health / this.maxHealth) * this.w;//照比例值繪製當前生命
        ctx.fillStyle = 'red';//生命值
        ctx.fillRect(this.x, this.y - 10, healthBarWidth,5);
    }
}

class Player{
    constructor(image,x,y,w,h){
        this.image=image;
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.image.onload=()=>{
            this.loaded=true;
        }
        this.loaded=false;
    }
    update(){
        this.draw();
    }
    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
    }
}

class Attack{
    constructor(image,x,y,w,h,dmg,penetration,speed,type){
        this.image=image;
        this.ox=x;//原來位置and魔法書位置
        this.oy=y;
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.dmg=dmg;//傷害
        this.penetration=penetration;//穿透 
        this.openetration=penetration;//穿透 
        this.speed=speed//飛行速度
        this.type=type;
        if (this.type=="fireBall"){
            let atk_block=new Image();
            atk_block.src="./image/redblock.png";
            this.blockImage=atk_block;
        }else{
            let atk_block=new Image();
            atk_block.src="./image/redblock.png";
            this.blockImage=atk_block;
        }
        this.image.onload=()=>{
            this.loaded=true;
        }
        this.loaded=false;
    }
    isHit(enemy){
        var ax=this.x+this.w/2;
        var ay=this.y+this.h/2;
        var ex=enemy.x+enemy.w/2;
        var ey=enemy.y+enemy.h/2;
        return (Math.sqrt(((ax-ex)*(ax-ex)+(ay-ey)*(ay-ey)))<=51);
    }
    update(){
        if(!isPause){
            if(this.type=="fireBall"){
                if(keys[fireUp]&&(this.oy>=-20)){
                    this.oy=this.oy-3;
                }
                if(keys[fireDown]&&(this.oy<=canvas.height-80)){
                    this.oy=this.oy+3;
                }
            }
            if(this.type=="waterBall"){
                if(keys[waterUp]&&(this.oy>=-20)){
                    this.oy=this.oy-3;
                }
                if(keys[waterDown]&&(this.oy<=canvas.height-80)){
                    this.oy=this.oy+3;
                }
            }
            if((this.x<=-50||(this.y<=-50||this.y>=canvas.height))){
                this.repos();
            }else{
                this.x=this.x-this.speed;
            }
        }
        this.draw();
    }
    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
    }
    repos(){
        this.x=this.ox;
        this.y=this.oy;
        this.penetration=this.openetration;
    }
}

class AttackBlock{//魔法書
    constructor(attack,image){
        this.attack=attack;
        this.image=image;
        this.image.onload=()=>{
            this.loaded=true;
        }
        this.loaded=false;
    }
    update(){
        this.draw()
    }
    draw(){
        ctx.drawImage(this.image,this.attack.ox,(this.attack.oy+25),50,50)
    }
}

const shimaRin=new Player(ShimaRin_image,canvas.width-130,canvas.height/2-90,150,185)//芝麻
const atk_waterBall=new Attack(imageWaterBall,canvas.width-130,canvas.height/2-90,100,100,atk_waterBall_dmg,atk_waterBall_penetration,atk_waterBall_speed,"waterBall");//法術攻擊
const atk_fireBall=new Attack(imageFireBall,canvas.width-130,canvas.height/2-40,140,100,atk_fireBall_dmg,atk_fireBall_penetration,atk_fireBall_speed-1,"fireBall");
const block_waterBall=new AttackBlock(atk_waterBall,imageWaterBallBlock);//魔法書
const block_fireBall=new AttackBlock(atk_fireBall,imageFireBallBlock);

function creatEnemy(enemy_num){//生成敵人
    wave+=1;
    waveView.innerHTML="Wave:"+wave;
    modeView.innerHTML="Mode:"+modeList[min(7,parseInt(wave/15)+1)];//每15波敵人生命值會變多
    for (let i=0;i<enemy_num;i++){
        const enemyImage=new Image();//每次要new一下才能全顯示
        enemyImage.src="./image/test.png";
        const enemy=new Enemy(enemyImage,0,(canvas.height/2-25)+RandomIntInRange(-(canvas.height/2-25),canvas.height/2-25),50,50,RandomIntInRange(1,3),100+(parseInt(wave/15))*60,100+(parseInt(wave/15))*60,frame);//創建新敵人
        enemyList.push(enemy)
        // console.log(enemyList);
    }
}

function waveEnemy(){
    if(!isPause) creatEnemy(RandomIntInRange(1,5)+parseInt(wave/20)*2);//每波生成1-5隻敵人，每提升一難度，會+2隻怪
}

const intervalId=setInterval(waveEnemy,intervalTime)//延遲幾秒生成敵人

function Animate(){//動畫
    requestAnimationFrame(Animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    yourKey.innerHTML="Your Key:"+lastKey;
    var mx=0;
    var my=0;
    enemyList.forEach(enemy=>{//遍歷搜尋每個敵人
        if (enemy.x>mx){
            mx=enemy.x;
            my=enemy.y;
        }
        if(atk_waterBall.isHit(enemy) && !enemy.cooldown){//判斷攻擊是否擊中且敵人可不可以被擊中
            enemy.health=enemy.health-atk_waterBall.dmg;
            enemy.setCooldown();
            enemy.x=enemy.x-5;//擊退
            atk_waterBall.penetration-=1;
            if(atk_waterBall.penetration<=0){
                atk_waterBall.repos();
            }
            audio.takedmg.play();
            if (enemy.health<=0){
                kill+=1;
                earnCoin();
                setTimeout(() => {
                    enemyList = enemyList.filter(e => e !== enemy);//刪除生命值低於0的敵人
                }, 500);
            }
        }
        if(atk_fireBall.isHit(enemy) && !enemy.cooldown){
            enemy.health=enemy.health-atk_fireBall.dmg;
            enemy.setCooldown();
            enemy.x=enemy.x-5;//擊退
            atk_fireBall.penetration-=1;
            if(atk_fireBall.penetration<=0){
                atk_fireBall.repos();
            }
            audio.takedmg.play();
            if (enemy.health<=0){
                kill+=1;
                earnCoin();
                setTimeout(() => {
                    enemyList = enemyList.filter(e => e !== enemy);
                }, 500);
            }
        }
    })
    if(autoType%3==1){//開自動
        atk_fireBall.oy=my;
    }else if(autoType%3==2){
        atk_waterBall.oy=my;
    }
    enemyList.forEach(enemy => {
        enemy.update();
    });
    shimaRin.update();
    atk_waterBall.update(enemyList);
    atk_fireBall.update(enemyList);
    block_waterBall.update();
    block_fireBall.update();
    frame+=1;
}
Animate();

document.addEventListener("keydown",function(e){//鍵盤按壓
    keys[e.code]=true;
    lastKey=e.code;
    console.log(e.code,keys[e.code]);
})
document.addEventListener("keyup",function(e){
    keys[e.code]=false;
    console.log(e.code,keys[e.code]);
})
btn_Pause.addEventListener("click",function(){//開始/暫停按鈕
    if(btn_Pause.value=="Restart"){//重啟遊戲
        score.innerHTML="";
        gameinit();
    }
    if(isPause){
        if(wave==0){
            creatEnemy(2);
        }
        btn_Pause.value="Pause";
        isPause=false;
    }else{
        btn_Pause.value="Start";
        isPause=true;
    }
    audio.btn.play();
})
btn_goshop.addEventListener("click",function(){//一堆按鈕
    canvas.style.display = "none";//隱藏遊戲
    shop.style.display = "inline-block";//顯示商店
    isPause=true;
    btn_Pause.value="Start";
    btn_goshop.style.display = "none";
    btn_Pause.style.display="none";
    btn_auto.style.display="none";
    btn_setting.style.display="none";
    btn_regame.style.display = "inline-block";
    audio.btn.play();
})
btn_regame.addEventListener("click",function(){
    canvas.style.display = "inline-block";
    shop.style.display = "none";
    setting.style.display = "none"
    btn_goshop.style.display = "inline-block";
    btn_Pause.style.display="inline-block"
    btn_auto.style.display="inline-block";
    btn_regame.style.display = "none";
    btn_setting.style.display="inline-block";
    audio.btn.play();
})
btn_setting.addEventListener("click",function(){
    canvas.style.display = "none";//隱藏遊戲
    setting.style.display = "inline-block";//顯示設定
    isPause=true;
    btn_Pause.value="Start";
    btn_goshop.style.display = "none";
    btn_Pause.style.display="none";
    btn_auto.style.display="none";
    btn_setting.style.display="none";
    btn_regame.style.display = "inline-block";
    audio.btn.play();
})
buy_waterBallDmg.addEventListener("click",function(){
    if(canBuy(30)){
        waterBallDmgLevel+=1;
        atk_waterBall.dmg+=10;
        waterBallImage.src=waterBallImageSrc[waterBallDmgLevel];
        var newImg=new Image();
        newImg.src=waterBallImageSrc[waterBallDmgLevel];
        atk_waterBall.image=newImg;
        if (waterBallDmgLevel==4){
            buy_waterBallDmgValue.innerHTML="LEVEL "+(waterBallDmgLevel+1)+"(Max)";
            buy_waterBallDmg.disabled=true;
        }else{
            buy_waterBallDmgValue.innerHTML="LEVEL "+(waterBallDmgLevel+1);
        }  
        audio.btn.play(); 
    }
})
buy_waterBallPen.addEventListener("click",function(){
    if(canBuy(30)){
        waterBallPenLevel+=1;
        atk_waterBall.openetration+=1;
        if (waterBallPenLevel==9){
            buy_waterBallPenValue.innerHTML="LEVEL "+(waterBallPenLevel+1)+"(Max)";
            buy_waterBallPen.disabled=true;
        }else{
            buy_waterBallPenValue.innerHTML="LEVEL "+(waterBallPenLevel+1);
        }   
        audio.btn.play();
    }
})
buy_waterBallSpeed.addEventListener("click",function(){
    if(canBuy(30)){
        waterBallSpeedLevel+=1;
        atk_waterBall.speed+=1;
        if (waterBallSpeedLevel==9){
            buy_waterBallSpeedValue.innerHTML="LEVEL "+(waterBallSpeedLevel+1)+"(Max)";
            buy_waterBallSpeed.disabled=true;
        }else{
            buy_waterBallSpeedValue.innerHTML="LEVEL "+(waterBallSpeedLevel+1);
        }   
        audio.btn.play();
    }
})
buy_fireBallDmg.addEventListener("click",function(){
    if(canBuy(30)){
        fireBallDmgLevel+=1;
        atk_fireBall.dmg+=15;
        fireBallImage.src=fireBallImageSrc[fireBallDmgLevel];
        var newImg=new Image();
        newImg.src=fireBallImageSrc[fireBallDmgLevel];
        atk_fireBall.image=newImg;
        if (fireBallDmgLevel==4){
            buy_fireBallDmgValue.innerHTML="LEVEL "+(fireBallDmgLevel+1)+"(Max)";
            buy_fireBallDmg.disabled=true;
        }else{
            buy_fireBallDmgValue.innerHTML="LEVEL "+(fireBallDmgLevel+1);
        }   
        audio.btn.play();
    }
})
buy_fireBallPen.addEventListener("click",function(){
    if(canBuy(30)){
        fireBallPenLevel+=1;
        atk_fireBall.openetration+=1;
        if (fireBallPenLevel==9){
            buy_fireBallPenValue.innerHTML="LEVEL "+(fireBallPenLevel+1)+"(Max)";
            buy_fireBallPen.disabled=true;
        }else{
            buy_fireBallPenValue.innerHTML="LEVEL "+(fireBallPenLevel+1);
        }   
        audio.btn.play();
    }
})
buy_fireBallSpeed.addEventListener("click",function(){
    if(canBuy(30)){
        fireBallSpeedLevel+=1;
        atk_fireBall.speed+=1;
        if (fireBallSpeedLevel==9){
            buy_fireBallSpeedValue.innerHTML="LEVEL "+(fireBallSpeedLevel+1)+"(Max)";
            buy_fireBallSpeed.disabled=true;
        }else{
            buy_fireBallSpeedValue.innerHTML="LEVEL "+(fireBallSpeedLevel+1);
        }    
        audio.btn.play();    
    }
})
btn_auto.addEventListener("click",function(){
    if(autoType%3==0){
        btn_auto.value="自動:火球";
    }else if(autoType%3==1){
        btn_auto.value="自動:水球";
    }else{
        btn_auto.value="自動:關";
    }
    autoType+=1;
    audio.btn.play();
})
btn_fireKeyUp.addEventListener("click",function(){//更改按鍵
    fireKeyUp.innerHTML=lastKey;
    fireUp=lastKey;
    audio.btn.play();
})
btn_fireKeyDown.addEventListener("click",function(){//更改按鍵
    fireKeyDown.innerHTML=lastKey;
    fireDown=lastKey;
    audio.btn.play();
})
btn_waterKeyUp.addEventListener("click",function(){//更改按鍵
    waterKeyUp.innerHTML=lastKey;
    waterUp=lastKey;
    audio.btn.play();
})
btn_waterKeyDown.addEventListener("click",function(){//更改按鍵
    waterKeyDown.innerHTML=lastKey;
    waterDown=lastKey;
    audio.btn.play();
})
btn_reKey.addEventListener("click",function(){//返回預設
    fireKeyUp.innerHTML="KeyQ";
    fireUp="KeyQ";
    fireKeyDown.innerHTML="KeyZ";
    fireDown="KeyZ";
    waterKeyUp.innerHTML="KeyW";
    waterUp="KeyW";
    waterKeyDown.innerHTML="KeyX";
    waterDown="KeyX";
    audio.btn.play();
})
btn_previous.addEventListener("click",function(){
    bgPage=max(bgPage-1,1)
    chBgView.src=backGroundImageSrc[bgPage];
    page.innerHTML=bgPage+"/8";
    audio.btn.play();
})
btn_next.addEventListener("click",function(){
    bgPage=min(bgPage+1,8)
    chBgView.src=backGroundImageSrc[bgPage];
    page.innerHTML=bgPage+"/8";
    audio.btn.play();
})
btn_bgSet.addEventListener("click",function(){
    if(bgFlag){
        body.style.backgroundImage="url("+backGroundImageSrc[bgPage]+")";
    }else{
        canvas.style.backgroundImage="url("+backGroundImageSrc[bgPage]+")";
    }
    audio.btn.play();
})
btn_chBg.addEventListener("click",function(){
    bgFlag=!bgFlag;
    if(bgFlag){
        btn_chBg.value="網站背景";
    }else{
        btn_chBg.value="遊戲背景";
    }
    audio.btn.play();
})
btn_bgSetting.addEventListener("click",function(){
    btn_bgSetting.style.backgroundColor="#ff3d6a";
    btn_keySetting.style.backgroundColor="#c26a00";
    changeBg.style.display="inline-block";
    changeKey.style.display="none";
    audio.btn.play();
})
btn_keySetting.addEventListener("click",function(){
    btn_keySetting.style.backgroundColor="#ff3d6a";
    btn_bgSetting.style.backgroundColor="#c26a00";
    changeBg.style.display="none";
    changeKey.style.display="inline-block";
    audio.btn.play();
})
bodyBg.onload = function() {
    body.style.backgroundImage = "url(./image/yuruCampBG04.png)";
};
function RandomIntInRange (min, max) {//隨機產生整數
    return Math.round(Math.random() * (max - min) + min);
}
function earnCoin(){//賺錢
    coin+=5;
    myCoin.innerHTML="Coin:"+coin;
}
function canBuy(price){
    if(coin>=price){
        coin-=price;
        myCoin.innerHTML="Coin:"+coin;//顯示錢
        return true;
    }
    return false;
}
function gameOver(){//遊戲輸了
    isPause=true;
    btn_Pause.value="Restart";
    score.innerHTML="Game Over<br>You Kill "+kill+" Enemy";
}
function min(a,b){//比大小
    if(a>b){
        return b;
    }
    return a;
}
function max(a,b){
    if(a>b){
        return a;
    }
    return b;
}