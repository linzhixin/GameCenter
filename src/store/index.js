import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as types from './mutations-types'

Vue.use(Vuex)
const qs = require('qs');
const store = new Vuex.Store({
	state: {
       gameList:[],
       status:'',
	},
	actions:{
      GET_GAME_LIST({commit}) {
         axios.get('json/game-1.json').then(response => {
         	    console.log(response.data.gameList);
               commit('GET_GAME_LIST',{
                    list:response.data.gameList  
                },error => {
                return console.log(error)
         })
      })
     },
     GET_MOREGAME_LIST({commit}) {
         axios.get('json/game-2.json').then(response => {
         	    console.log(response.data.gameList);
               commit('GET_MOREGAME_LIST',{
                    list:response.data.gameList  
                },error => {
                return console.log(error)
         })
      })
     },
     GET_NEWGAME_LIST({commit},id) {
     	console.log(id);
     	let url = 'json/game-'+id+'.json';
     	console.log(url);
         axios.get(url).then(response => {
         	   console.log(response.data.gameList);
               commit('GET_NEWGAME_LIST',{
                    list:response.data.gameList  
                },error => {
                return console.log(error)
         })
      })     	
     }
    },
	mutations: {
      GET_GAME_LIST(state,{list}){
         state.gameList = list
      },
      GET_MOREGAME_LIST(state,{list}){
      	 for(var i=0;i<list.length;i++){
         state.gameList.push(list[i]);
         console.log("1111");
         }
         console.log(state.gameList)
      },
      GET_NEWGAME_LIST(state,{list}){
      	state.gameList = list
      }
	},
	getters: {
	    doneTodos: state => {
	      return state.gameList.filter(gameList.status==state.status)
	    }
	}
})
export default store