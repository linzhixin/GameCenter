<template>
<div>
<div class="tab">

    <div v-for="tab in tablist"   @click="selected(tab.title,tab.id)"  v-bind:class="{active: activeName1 == tab.title}" v-bind:index="tab.id">{{tab.title}}</div>

</div>
<div id="tab-line"><div class="tab-line-blue" v-bind:style="{marginLeft: marginleft+'%'}"></div></div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
        return {
            tablist:[                
                {id:0,title:'首页'},
                {id:1,title:'最新'},
                {id:2,title:'男生'},
                {id:3,title:'热门'}
            ],
            activeName1: '',
            activeName2: '',
            marginleft:0,
        }
            
    },
    mounted () { 
    }, 
    methods:{
    selected: function(title,id) {
      this.activeName1 = title;
      this.marginleft=25*id;
      this.$store.dispatch('GET_NEWGAME_LIST',id)
    }
    }

}

</script>

<style scoped>
.tab{
    width:100%;
    position:absolute;
    left:0;
}
.tab div{
    float:left;
    text-decoration:none;
    position:relative;
    width:25%;
    height:3rem;
    text-align:center;
    line-height:3rem;
    font-size:16px;
}
.active{
    color:#42a4fc
}
#tab-line {
    height: 2px;
    background: #f5f5fa;
    width: 100%;
    clear: both;
    position:absolute;
    margin-top:3rem;
    left:0;
    z-index:100;
}
#tab-line .tab-line-blue {
    width: 25%;
    height: 100%;
    background: #42a4fc;
    transition: all .3s ease;
}
</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              