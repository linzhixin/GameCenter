<template>
 <div class="lately-play">
 <div class="lately-img">
 <img :src="img">
 </div>
    <div class="swiper-container lately-game swiper-container-horizontal swiper-container-free-mode ">
        <div class="swiper-wrapper lately-game-wrapper">
           <div class="swiper-slide game-box aaa" v-for="lists in list" v-bind:style="{width: width + 'rem' }">

				     <img :src="lists.imgs" class="lately-game-icon">
				     <p class="lately-game-name text-clip-line-1">{{lists.title}}</p>
				     <button class="btn-blur lately-game-star" type="button">{{msg}}</button>

            </div>
        </div>
    </div>
    <div class="swiper-pagination" v-show="false"></div>
</div>
</template>

<script>

import Swiper from '../Js/swiper-3.4.2.min.js'  
export default {
    data () {
        return {
          list: [  
            {  
              title:'部落战争',imgs: '../img/ico1.jpg'  
            }, {  
              title:'沧浪绝',imgs:'../img/ico2.jpg'  
            }, {  
              title:'终身大冒险',imgs: '../img/ico3.png'  
            }, {
              title:'僵尸三国',imgs: '../img/ico4.png'
            },
            {  
              title:'部落战争',imgs: '../img/ico5.png'  
            }, {  
              title:'沧浪绝',imgs:'../img/ico6.png'  
            }, {  
              title:'终身大冒险',imgs: '../img/ico7.png'  
            }, {
              title:'僵尸三国',imgs: '../img/ico8.png'
            },
            {  
              title:'部落战争',imgs: '../img/ico9.jpg'  
            }, {  
              title:'沧浪绝',imgs:'../img/ico10.png'  
            }, {  
              title:'终身大冒险',imgs: '../img/ico11.jpg'  
            }, {
              title:'僵尸三国',imgs: '../img/ico12.png'
            },
            
          ],
          msg:"开始",
          width:8,
          img:'../img/lately.png',
        }
    },
    mounted () {  
    this.huadong()  
    }, 
    methods:{
        huadong () {  
        let latelyGame = new Swiper('.lately-game', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30
          })
        },  
    }
}
</script>


<style scoped>
@import url("../Js/swiper-3.4.2.min.css");
.game-box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 8rem;
    margin-bottom: 5px;
    border: 1px solid #e5e5e5;
    -moz-box-shadow: 1px 1px 9px #C9C9C9;
    -webkit-box-shadow: 1px 1px 9px #C9C9C9;
    box-shadow: 1px 1px 9px #C9C9C9;
}
.lately-game-icon {
    width: 4.5rem;
    height: 4.5rem;
    margin-top: -2rem;
}
.lately-game-wrapper{
	margin-left:3.5rem
}
.text-clip-line-1 {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    box-orient: vertical;
    line-clamp: 1;
}

.lately-game-name {
    width: 100%;
    margin: 1rem 0;
    text-align: center;
}
.btn-blur {
    background: #fff;
    border-radius: 3px;
    outline: none;
    padding: 3px;
    color: #42a4fc;
    border: 1px solid #42a4fc;
    padding: 0.1rem 0.8rem;
}
.lately-game-star {
    margin-bottom: 1rem;
    font-size: 14px;
    width: 56px;
}
.lately-play {
    display: block;
    margin: 1rem 0;
    position: relative;
}
lately-game {
    padding-left:4rem;
}
.lately-game .swiper-wrapper .swiper-slide {
    margin-top: 2rem;
    width:100rem;
}
.lately-img {
    display: inline-block;
    width: 2.5rem;
    background: transparent;
    position: absolute;
    left: 0;
    top: 2rem;
    z-index: 2;
}
</style>