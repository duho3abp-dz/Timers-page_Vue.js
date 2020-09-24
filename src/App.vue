<template>
  <div id="app">
      <TimersList 
        :timerData="timerData" 
        @start-date="setStartDate"
        @pause-time="setPauseTime"
        @reset-timer="resetTimer"
        @add-timer="addTimer"
        @delete-timer="deleteTimer"
      />
  </div>
</template>

<script>
import TimersList from './components/TimersList';

export default {
  name: 'App',
  components: { TimersList },
  data() {
    return {
      timerData: [
        {id: 1, start: 0, pause: 0},
        {id: 2, start: 0, pause: 0},
        {id: 3, start: 0, pause: 0},
        {id: 4, start: 0, pause: 0}
      ]
    }
  },
  methods: {
    setStartDate(start, id) {
      this.timerData = this.timerData.map(obj => {
        if (obj.id === id) {
          obj.start = start;
        }
        
        return obj;
      });
    },
    setPauseTime(pause, id) {
        this.timerData = this.timerData.map(obj => {
        if (obj.id === id) {
          obj.pause = pause;
        }
        
        return obj;
      });
    },
    resetTimer(id) {
      this.timerData = this.timerData.map(obj => {
        if (obj.id === id) {
          obj.start = 0;
          obj.pause = 0;
        }
        
        return obj;
      });
    },
    deleteTimer(id) {
      this.timerData = this.timerData.filter(obj => obj.id !== id);
    },
    addTimer() {
      const newTimer = {id: new Date().getTime(), start: 0, pause: 0};
      this.timerData.push(newTimer);
    }
  }
}
</script>

<style>
@font-face {
	font-family: 'Gotham Pro';
	src: url('./assets/fonts/GothamPro.woff') format('woff');
	src: url('./assets/fonts/GothamPro.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
}
#app {
  font-family: Gotham Pro;
  font-size: 22px;
  color: #9E9E9E;
  text-align: center;
  margin-top: 72px;
  margin-bottom: 30px;
}
.timer {
  display: inline-block;
  width: 225px;
  height: 120px;
  background: #696969;
  margin: 0 25px 45px;
  position: relative;
}
</style>
