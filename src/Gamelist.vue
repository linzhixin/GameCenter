<template>
<div class="game-list">
  <ul class="list-group game-lis-group">
    <li class="list-group-item game-lis" v-for="games in gameList">
      <img :src="games.imgs">
      <div class="game-detail">
          <p class="title">{{games.title}}</p>
          <span class="title-tips text-clip-line-2">{{games.detail}}</span>
      </div>
      <button type="button" class="btn-blur game-list-btn">{{msg}}</button>
    </li>
  </ul>
  <div class="loading" v-show="show"><img :src="img"/></div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
        return {
            msg:'开始',
            img:'./img/loading.png',
        }
            
    },
    props:["show","gameList"],

    

}

</script>

<style scoped>

.game-list {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    left:0;
    position:absolute;
    margin-top:3rem;
}
.list-group {
    padding-left: 0;
    width:100%;
    margin-top:0;
    margin-bottom:0
}
.list-group-item {
  position: relative;
  display: block;
  padding: 0.4rem 0.5rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
}
.list-group-item:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}

.game-lis img{
    width: 4.5rem;
    height: 4.5rem;
    vertical-align: middle;
}
.game-lis {
    display: flex;
    align-items: center;
    border-radius: 0;
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #f8f8fb;
}
.text-clip-line-2 {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    box-sizing: border-box;
}
.game-detail {
    margin-left: 1rem;
    flex: 2;
}
.title-tips {
    color: #bababa;
    font-size:0.8rem;
}
.title {
    font-weight: bold;
    color: #414141;
    font-size: 1rem;
    margin-bottom:0.6rem;
    margin-top:0;
}
.game-list-btn {
    font-size: 0.8rem;
    margin-left:0.4rem;
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
.loading{
    width:100%;
    text-align:center;
    font-size:1rem;
    height:2rem;
    line-height:2rem;
}
.loading img{
        display: block;
    margin: 0 auto;
    -webkit-transform: rotate(0deg) translateZ(0);
    -webkit-transition-duration: 0;
    -webkit-animation-name: loading;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
}
@-webkit-keyframes loading {
  from {
    -webkit-transform: rotate(0deg) translateZ(0);
  }
  to {
    -webkit-transform: rotate(360deg) translateZ(0);
  }
}
</style>