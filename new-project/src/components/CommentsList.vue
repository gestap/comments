<template>
  <div class="list">
    <div v-if="change">
      <h4 class="list__h4">{{message}}</h4>
      <div class="list--flex" >
        <i class="material-icons list__i list__i--mb0">account_circle</i>
        <p class="list__p list__p--ml5 list__p--mb0"><span class="list__span">Ost Ptk,</span></p>
        <p class="list__p list__p--ml5 list__p--mb0">{{date.toLocaleString("ua", options)}}</p>
        <button @click="openMenu"><i class="material-icons list__i list__i--mb0">keyboard_arrow_down</i></button>     
      </div>
      <div class="list__menu" v-show="menu">
        <ul class="list__ul--pl0">
          <li class="list__li list__li--p"><button @click="change = false">Редагувати</button></li>
          <li class="list__li list__li--p"><button @click="removeComment">Видалити</button></li>
        </ul>
      </div>
      <div class="list__removeComment" v-show="remove">
        <h3 class="list__removeComment-h3">Видалення коментаря</h3>
        <div>
          <button class="list__removeComment-button" @click="confirmRemove">Видалити</button>
          <button class="list__removeComment-button" @click="cancelRemove">Відміна</button>
        </div>
      </div>
    </div>
    <div v-else>
      <input class="input-form__input input-form__input--pb3" type="text" ref="input" :value="this.message">
      <div class="input-form__button-group">
        <button class="input-form__button input-form__button-enabled input-form__button--mr10" @click="saveChange">Зберегти</button>
        <button class="input-form__button" @click="cancelChange">Відмінити</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['date', 'message', 'comments', 'index'],
  data () {
    return {
      options: {
        month: 'long',
        day: 'numeric'
      },
      menu: false,
      remove: false,
      change: true,
    }
  },
  methods: {
    openMenu () {
      this.menu = !this.menu;
    },
    removeComment () {
      this.remove = !this.remove;
    },
    cancelRemove () {
      this.menu = false;
      this.remove = !this.remove;
    },
    confirmRemove () {
      this.menu = false;
      this.remove = !this.remove;
      this.$store.dispatch('removeComment', this.index)
    },
    saveChange () {
      this.menu = false;
      this.change = !this.change;
      this.$store.dispatch('changeComment', this.changeComment);
    },
    cancelChange () {
      this.menu = false;      
      this.change = !this.change;
    }
  },
  computed: {
    changeComment () {
      return {message: this.$refs.input.value, id: this.index};
    }
  },
  
}
</script>

<style >
.list {
  margin-top: 15px;
  position: relative;
}
.list__h4 {
  font-size: 16px;
  padding-bottom: 3px;
  font-weight: 400;
}
.list--flex {
  display: flex;
  align-items: center;
}
.list__p, .list__i {
  color: #8f999c;
}
.list__p--mb0, .list__i--mb0 {
  margin-bottom: 0;
}
.list__i {
  font-size: 15px;
}
.list__p { 
  font-size: 11px;
  text-transform: uppercase;
}
.list__p--ml5 {
  margin-left: 5px;
}
.list__span {
  font-weight: 700;
}
.list__ul--pl0 {
  padding-left: 0;
}
.list__li {
  list-style: none;
  font-size: 16px;
}
.list__li--p {
  padding: 15px 0 15px 20px;
}
.list__li:first-child {
  border-bottom: 1px solid lightgray;
}
.list__menu {
  position: absolute;
  background: white;
  left: 125px;
  width: 200px;
  height: 100px;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  z-index: 100;
}
.list__removeComment {
  width: 350px;
  height: 113px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  background-color: #ffffff;
  position: absolute;
  left: 125px;
  z-index: 101;
}
.list__removeComment-h3 {
  font-weight: 700;
  color: black;
  padding: 15px 20px;
  border-bottom: 1px solid lightgray;
}
.list__removeComment-button {
  padding: 9px 14px;
  margin: 10px 5px 0 5px;
  border: 1px solid lightgray;
  border-radius: 3px;
}
.list__removeComment-button:first-child {
  margin-left: 20px;
  background-color: #db525e;
  border: 1px solid #db525e;
}
.input-form__input--pb3 {
  padding-bottom: 3px;
}
</style>
