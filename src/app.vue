<!-- 简单写个title和一个循环 -->
<template>
<div class="container" id="#app">
<div class="swiper-container gallery-top swiper-container-horizontal">  
    <div class="swiper-wrapper">  
       <div v-for="value in lbt" class="swiper-slide swiper-slide-next swiperPicture" style="width: 100%; margin-right: 10px;" v-bind:style="{backgroundImage: 'url(' + value.imgs + ')'}"></div>  
    </div>  
    <div class="swiper-pagination gallery-down" id="banner-pagination"></div>
</div> 
<Demo></Demo>
<Tab></Tab>
<Gamelist :show="show" :gameList="gameList"></Gamelist>
</div>
</template>

<script>
import Swiper from '../Js/swiper-3.4.2.min.js'  
import Demo from './demo.vue'
import Tab from './Tab.vue'
import Gamelist from './Gamelist.vue'
import {mapState} from 'vuex'
let galleryTop; 
let galleryThumbs; 
let latelyGame;
export default {

    data () {
        return {
          lbt: [  
            {  
              'imgs': '../img/01.jpg'  
            }, {  
              'imgs': '../img/02.jpg'  
            }, {  
              'imgs': '../img/03.jpg'  
            }  
          ],
          show:false,
          flag:true,
        }
    },
    components:{
         Demo,
         Tab,
         Gamelist
    },
    computed:mapState([
        'gameList'
    ]),
    created(){
         this.getGameList();
         document.body.style.margin=0;
         document.body.style.width='100%';
         document.body.style.height='100%';
         document.documentElement.style.height='100%';
         document.documentElement.style.fontSize='100%';
         window.addEventListener('scroll',this.handleScroll);
    },
    mounted () {  
    this.lunbo();
    window.addEventListener('scroll',this.handleScroll);
    }, 
    methods:{
        getGameList(){ 
              this.$store.dispatch('GET_GAME_LIST')
        },
        lunbo () {
          galleryTop = new Swiper('.gallery-top', {  
            nextButton: '.swiper-button-next',  
            prevButton: '.swiper-button-prev',  
            spaceBetween: 10,  
            autoplay: 4000, 
            grabCursor: true,  
            autoplayDisableOnInteraction: false, 
            initialSlide: 1,  
            pagination : '.swiper-pagination',
          })   
          galleryTop.params.control = galleryThumbs  
          galleryThumbs.params.control = galleryTop  
          latelyGame = new Swiper('.lately-game', {
              
          })
        },  
       handleScroll(){
       //获取滚动条高度及页面总长度
       var scrollTop = document.body.scrollTop;
       console.log(document.body.scrollTop);
       var allHeight = document.body.scrollHeight;
       console.log(document.body.scrollHeight);
       console.log(document.body.clientHeight);
       //如果滚动高度=页面总长-页面一屏的高度（即--滚动条到了底部）
       if(scrollTop == allHeight - document.body.clientHeight){
        //如果还有下一页，则传递页码发送ajax,否则显示更多
        if (this.flag) {
            this.flag=false,
            this.show=true,
            setTimeout(()=>{
              this.show=false,
              this.$store.dispatch('GET_MOREGAME_LIST'),
              this.flag=true 
            },1000)
        }
       }
       }
      }, 
    }
</script>

<style scoped>
@import url("../Js/swiper-3.4.2.min.css");
html,body{height: 100%;}
.container{
    width:100%;
    height:100%;
    margin:0;
    padding:0;
    position:relative
}
.gallery-top{    
    height:15rem;    
    width:100%;
    background-size:cover;  
}    
.gallery-thumbs .swiper-slide-active{    
    opacity:1;   
}   
#banner-pagination{
    text-align: right;
    bottom: 0px;
}
.swiperPicture{  
  background-size: 100%;  
  -webkit-background-size: 100%;  
}  
#banner-pagination .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
}
#banner-pagination .swiper-pagination-bullet-active {
    opacity: .7;
}
</style>