$(function(){
    // 스크롤 지정 하기 위해 상수 선언
    const totalLength = 630;
    const animation=$('.animation');
    const progressBox=$('.animation .chart');
    const progressOst=$('.animation').offset().top-600;
    
    $(window).scroll(function(){
        if($(window).scrollTop()>=progressOst){
            if(!animation.hasClass('isAni')){
                progressAni();
                animation.addClass('isAni');
            }
        }
    })
    // 아래 progressBox.each(function(){} 를 함수로 변경해서 호출
    // function progressAni(){} 해서 {} 안에 아래 progressBox.each(function(){} 를 넣는다.

    function progressAni(){
        progressBox.each(function(){
            let $this=$(this); //progress-bar 중에 해당 순번이 되는 애가 this가 된다. \ $는 변수명으로 사용 가능하다.
            let title=$this.find('h3');        
            let targetNum=title.attr('data-num');
            let circle=$this.find('circle');

            // =======================

            // $({rate:0}) -> 객체를 하나 만든다.
            $({rate:0}).animate(
                {rate:targetNum},
                {duration:2000,
                progress:function(){
                    console.log(this);
                    let now=this.rate; // rate를 위에서 만들었으니까 이걸 .rate로 쓰면 된다
                    let amount=407-(407*now/100);
                    title.text(Math.floor(now)+"%");
                    circle.css({strokeDashoffset:amount});
                }
            })

        })
}
})