//阻止右键菜单
document.oncontextmenu=function(){
    alert("为了使用体验，本网站禁用右键");
    return false;
}
// 时钟
setTime.style["font-size"] = "45px";
setTime.style["line-height"]="110px";
setTime.style.position="relative";
setTime.style.left="20px";
setTime.style["font-family"]="Courier New";
var time2=setInterval(function(){
    var date=new Date();
    var a=Number(date.getHours());
    var b=Number(date.getMinutes());
    var c=Number(date.getSeconds());

    setTime.innerText=`${a}:${b}:${c}`;
},1000)
// 每日一句
var arr = [
    "生活从来不会欠你什么，它只是按照自己的方式运行。"
    , "岁月流转，深情仍在，微笑不变。"
    , "充实了自己，才会有更多的底气跑更远的路"
    , "流水匆匆，青春不再，唯有梦想与爱情可给你坚持下去的力量。"
    , "无论你经历了多少风雨，都要相信自己的目标与梦想。"
    , "每天都是新的开始，昨天的泪水换来今天的倔强。"
    , "只有把安危寄之于天，放缓脚步，才能更好地体味生命之美。"
    , "人生需要勇气，不断地面对挫折和痛苦。"
    , "生命在于折腾，把握当下，勇敢地拥抱未来。"
    , "每一个人都有自己的路，即使你和他的起点相同，终点也未必一致。"
    , "生活的意义在于我们所经历和学习的一切，而不是我们所拥有的一切。"
    , "活得自由是必然的，爱得深沉才是难得的。"
    , "秋叶阳光下微微发黄，人生无常，难免有离愁。"
    , "光阴如梭，岁月如歌，让我们一直走下去。"
    , "每一颗破碎的心都必须学会强大，由此才能成就更好的自己。"
    , "最好的品质是无需营造的，它们是从内心最深处散发出来的。"
    , "每一步都必须小心翼翼地前进，因为它们将会影响你的未来。"
    , "真正的人生不在于你现在所站的位置，而在于你未来所登上的高度。"
    , "天上的星辰发光，而你内心的光芒更加夺目。"
    , "永远不要成为你生命中的枯木，要做一颗能生长的绿色植物。"]
function text() {
    var num = Math.floor(Math.random() * arr.length);
    document.querySelector('.say    ').innerHTML = arr[num];
}
setTimeout(function () {
    var num = Math.floor(Math.random() * arr.length);
    document.querySelector('.say').innerHTML = arr[num];
}, 3000);
setInterval(text, 60000);

var say = document.querySelector('.say');
say.addEventListener('click', function () {
    var num = Math.floor(Math.random() * arr.length);
    document.querySelector('.say').innerHTML = arr[num];
});


//回到顶部
var backTop=document.querySelector(".home");
// backTop.style.cursor="pointer";
backTop.onclick=function(){
    window.scrollTo(0,0);
}


//亮度模式转换
var light=document.querySelector("#light");
light.onclick=function(){
    if (light.innerText==""){
        light.innerText="";
        document.body.style.backgroundColor="grey";
        document.body.style.color="white";
        alert("切换到夜间模式")

    }else{
        light.innerText="";
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        alert("切换到白天模式")
    }
}

//隐藏按钮
window.onscroll=function() {
    // console.log(document.body.scrollTop || document.documentElement.scrollTop);
    // console.log(document.documentElement.scrollLeft || document.body.scrollLeft)
    if (document.body.scrollTop || document.documentElement.scrollTop > 500) {
        backTop.style.display = "block";
    } else {
        backTop.style.display = "none";
    }
}

// 个人主页点击事件
var home = document.querySelector('.home');
var ul1 = document.querySelector('.homepage');
ul1.style.display = 'none';
home.onclick = function () {
    if (ul1.style.display == 'none') {
        console.log(ul1.style.display);
        ul1.style.display = 'block';
    } else {
        ul1.style.display = 'none';
    }
}

