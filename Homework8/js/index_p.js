 $(function(){
    $(".menu a").click(function(e){
        e.preventDefault();
        var target = $(this).attr("href");
        $(".menu a").removeClass("active");
        $(this).addClass("active");
        $("#work > div").hide();
        $(target).show();
    });
    /*toggle switch*/
    $("#toggleThis").click(function(){
        $("#menu_content").slideToggle(1500);
    });
});

/*Animated Text effect on top introduction part*/
var intervalID = setInterval(function(){
    // every 4 seconds execute following
    var visibleWord = document.getElementsByClassName('visible')[0],
        nextWord = visibleWord.nextSibling;
    // check if nextSibling is textnode (whitespace) - if so get next next sibling. 
    if(nextWord.nodeType == 3) nextWord = nextWord.nextSibling;
    // if there is a next node 
    if(!(nextWord == null)) {
      visibleWord.setAttribute('class','hidden');
      nextWord.setAttribute('class','visible');
    } else {
      clearInterval(intervalID);
    }
  }, 4000)


/////////////////////////////////////////////////////////

window.onload=function(){
    /*darkmode*/
    const chk = document.getElementById('chk');

    chk.addEventListener('change', () => {
        document.body.classList.toggle('dark');
    });



    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    menuBtn.addEventListener('click',() => {
        if(!menuOpen){
            menuBtn.classList.add('open');
            menuOpen = true;
        } else{
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    });
    
    "use-strict";
    var cursor = document.querySelector(".cursor1");
    var cursorInner = document.querySelector(".cursor-inner");


    document.addEventListener("mousemove", function(e){
        var x =e.clientX;
        var y =e.clientY;

        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
    });  
    document.addEventListener("mousemove", function(e){
        var x =e.clientX;
        var y =e.clientY;

        cursorInner.style.left = x + "px";
        cursorInner.style.top = y + "px";
    });  
    document.addEventListener("mousedown", function(){
        cursorInner.classList.add("click");
    });
    document.addEventListener("mouseup", function(){
        cursorInner.classList.remove("click");
    });
  }


