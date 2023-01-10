console.log('Vue OK', Vue);

const app = Vue.createApp({
    name: 'Carousel',
    data() {
      return {
        currentIndex: 0,
        pictures
      }
    },
    methods:{
        goToPrev(){
          this.currentIndex--;
          if (this.currentIndex < 0) this.currentIndex = this.pictures.length -1
        },
       goToNext(){
         this.currentIndex++;
         if (this.currentIndex === this.pictures.length) this.currentIndex = 0;
       }
    }
});


app.mount('#root');