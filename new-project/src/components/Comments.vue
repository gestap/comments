<template>
  <section>
    <div class="conteiner">
      <div class="top top--p top--flex">
        <div class="top__text-group">
          <h3 class="top__h3 top__h3--mb5">Думати</h3>
          <p class="top__p top__p--mb0">Продавець</p>
        </div>
        <div class="top__button-group">
          <button class="top__button top__button--p">Зміна етапу підбору</button>
        </div>
      </div>
      <div class="input-form input-form--line">
        <input class="input-form__input input-form__input--ptb12" v-model="value" @focus="focus = true" type="text" placeholder="Написати коментар">
        <div v-show="focus" class="input-form__button-group">
          <button :disabled='!value' class="input-form__button input-form__button-disabled input-form__button-enabled input-form__button--mr10 input-form__button--mb12" @click="addComment">Зберегти</button>
          <button class="input-form__button input-form__button--mb12" @click="cancelComment">Відмінити</button>
      </div>
      </div>

      <comments-list
        v-for="(comment, index) in comments" 
        :message='comment.message'
        :date='comment.date'
        :key='comment.id'
        :comments='comments'
        :index="index"
      />
    </div>
  </section>
</template>

<script>
import CommentsList from './CommentsList'
  export default {
    components: {
      'comments-list': CommentsList
    },
    data: () => ({
      value: '',
      focus: false,
      }),
    methods: {
      addComment () {
        this.focus = false          
        this.$store.dispatch('addComment', this.comment)  
        this.value = ''
      },
      cancelComment () {
        this.value = ''
        this.focus = false      
      }
    },
    computed: {
      comments () {
        return this.$store.getters.getComments
      },
      comment () {
        return {message: this.value, date: new Date()}
      }
    },
  }
</script>

<style >
  section {
    width: 500px;
    height: 100%;
    border-left: 3px solid #7ac016;
    margin: 0 auto;
    margin-top: 10%;
    box-sizing: border-box;
    background-color: #fdffec;
    font-family: Raleway;
    font-size: 16px;
  }
  .conteiner {
    width: 90%;
    margin: 0 auto;
    padding: 15px 0;
  } 
  .top--p {
    padding: 0 0 12px 0;
  }
  .top--flex {
    display: flex;
    justify-content: space-between;
  }
  .top__h3 {
    color: #7ac016;
    font-weight: 700;
    font-size: 18px;
  }
  .top__h3--mb5 {
    margin-bottom: 5px;
  }
  .top__p {
    color: #7ac016;
  }
  .top__p--mb0 {
    margin-bottom: 0;
  }
  .top__button {
    display: block;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 700;
    color: white;
    background-color: #79bf16;
    border-radius: 3px;
  }
  .top__button--p {
    padding: 9px 15px;
  }
  .input-form__input {
    width: 100%;
  }
  .input-form--line {
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
  }
  .input-form__input--ptb12 {
    padding: 12px 0;
  }
  .input-form__input::placeholder {
    color: #8f999c;
  }
  .input-form__button-group {
    display: flex;
    font-size: 11px;
    font-weight: 700;
  }
  .input-form__button {
    padding: 10px 15px;
    border: 1px solid lightgray;
    border-radius: 3px;
  }
  .input-form__button--mr10 {
    margin-right: 10px;
  }
  .input-form__button--mb12 {
    margin-bottom: 12px;
  }
  .input-form__button-disabled:disabled {
    background-color: #d6d6d6;
  }
  .input-form__button-enabled {
    color: white;
    background-color: #22bbd2;
  }
</style>
