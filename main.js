var message = [
  'Hello Special 4 Clan မှကြိုဆိုပါ  တယ်',
  '‌ေတွ့ရတာ၀မ်းသာပါတယ်🙄🙄',
  'Speical 4 clan ရဲ့အချောဆုံးကတော့ magicပါသူကရုပ်လဲချောskill လဲကောင်း😁',
  'speical.4 clan ရဲ့Leaderက‌ေတာ့ S4 RoHanပါ သူကတော့ clan ရဲ့ leaderလဲဟုတ် clan ရဲ့ algel‌ေလးလဲဟုတ်  စော်ရှာပေးလို့ပါ😁',
  'Clan ရဲ့coleader‌ေတက‌ေတာ့ S4 DragonနဲS4 Magicပါ ',
  'Girl Playerမှာဆို‌ေလာ‌ေလာဆယ်namechangeထားတာ  S4 Algel/S4 Mia ပါ',
  'ခု‌ေမးချင်တာ‌ေမး‌ေနတဲ့လူက‌ေစာ်‌ေတဘဲ‌ေတရှီလယး',
  'အပို‌ေတ‌ေပြာမ‌ေနနဲ မင်းအောင်လှိူင်သာအာဏာရရင်ရမယ်broကရမှာမဟုတ်ဘူး🙄',
  'စိတ်မဆိုးပါနဲ ချစ်လို့စတာ❤️❤️',
  'Clan ၀င်ချင်ရင်လဲပြောနော် အားမနာနဲ ',
  'magicကို ချစ်နေရင်လဲဖွင့်ပြောလိုက်',
  'နိူင်ငံ‌ေရးမ‌ေကာင်းတာ‌ေတာင်ဒီမှာစာလာ‌ေရး‌ေနနိူင်တယ် လိပ်ပြာလုံပါစေ🙄🙄🙄',
  'ဆဲချင်ရင်လဲclan leaderကိုသွားဆဲ🙂🙂🙂',
  'တာ့တာ့ အချိန်ကုန်တယ် စော်မရှီ ဘဲမရှီတေနဲပြောကတာ🙄🙄🙄',
  ':)'
]

$(document).ready(function() { 
    setTimeout(function(){
        loader();
        setTimeout(function(){
        $('.container .display .lds-ellipsis').fadeOut(0);
        reply();
       }, 1600) 
    },1000);
 })

var scrollctr = 200;
var i =0;

function scrollUpdate(){
    lastElementTop = $('.display').position().top ;
    scrollAmount = lastElementTop + scrollctr ;
    scrollctr += 200; 
$('.display').animate({scrollTop: scrollAmount},700);
}

function msngr(){
  var msg = $('.text input').val();
  $('.container .display').append("<div class='msg'><p>"+msg+"</p></div>");
  $('.text input').val("");
}
function reply(){
    
    
    if(i>=15){i =15; }
    $('.container .display').append("<div class='reply'><p>"+message[i]+"</p></div>");
    i++;
}
function loader(){
    $('.container .display').append("<div class='lds-ellipsis'><div></div><div></div><div></div><div></div></div>");
}


$('.tray .fa-paper-plane').click(msngr);
$(document).on('keypress',function(e) {
    if(e.which == 13) {
        e.preventDefault();
        msngr();
        scrollUpdate();
    }
});



$('.tray .fa-paper-plane').click(function(){
    setTimeout(function(){
        scrollUpdate();
        loader();
        setTimeout(function(){
        $('.container .display .lds-ellipsis').fadeOut(0);
        reply();
        scrollUpdate();
       }, 1600) 
    },1000);
});
$(document).on('keypress',function(e) {
    if(e.which == 13) {
        e.preventDefault();
        setTimeout(function(){
        scrollUpdate();
        loader();
        setTimeout(function(){
        $('.container .display .lds-ellipsis').fadeOut(0);
        reply();
        scrollUpdate();
       }, 1600) 
    },1000);
}
});

