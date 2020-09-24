<template>
  <div class="wrapper">
      <TimersList 
        :timerData="timerData" 
        @start-date="setStartDate"
        @pause-time="setPauseTime"
        @reset-timer="resetTimer"
        @add-timer="addTimer"
        @delete-timer="deleteTimer"
      />
      <router-link class="fixed-back" to="/">
        <img class="back-img" src="../assets/images/left.svg" alt="back">
      </router-link>
  </div>
</template>

<script>
import TimersList from '../components/TimersList';

export default {
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

<style scoped>
.wrapper {
    margin-top: 72px;
    margin-bottom: 30px;
}
.fixed-back {
    position: fixed;
    top: 10px;
    left: 10px;
    width: 40px;
    opacity: .5;
}
.back-img {
    width: 100%;
}
</style>