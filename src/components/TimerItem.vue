<template>
    <div :class="{active: included}" class="timer">
        <div class="timer-top">
            <span v-if="seconds >= 0 && !minutes && !hours">{{seconds}}</span>
            <span v-else-if="minutes && !hours">{{minutes}}:{{seconds}}</span>
            <span v-else >{{hours}}:{{minutes}}:{{seconds}}</span>
        </div>
        <div class="timer-bottom">
            <div v-if="!included" @click="startTimer" class="play"></div>

            <div 
                v-else 
                @click="pauseTimer" 
                class="pause"
            >
                <div class="rectangle"></div>
                <div class="rectangle"></div>
            </div>

            <div class="stop"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'time' ],
    data() {
        return {
            included: false,
            hours: 0,
            minutes: 0,
            seconds: 0,
            pause: false,
            pauseSum: 0
        }
    },
    methods: {
        upgateTimer(start, difference = 0) {
            const interval = setInterval(() => {
                const nowTime = new Date().getTime(),
                      t = (nowTime - difference) - start;
                
                if (!this.pause) {
                    this.hours = Math.floor(t / 1000 / 60 / 24);
                    this.minutes = Math.floor((t / 1000 / 60) % 60);
                    this.seconds = Math.floor((t / 1000) % 60);
                } else {
                    this.$emit('pause-time', nowTime - 1000, this.time.id);
                    clearInterval(interval);
                }
            }, 1000);
        },
        startTimer() {
            const {id, start, pause} = this.time;

            this.pause = false;
            this.included = true

            if (!start) {
                const startTime = new Date().getTime();
                this.$emit('start-date', startTime, id);
                this.upgateTimer(startTime);
            } else {
                const newStart = new Date().getTime(),
                      diff = newStart - pause;

                this.pauseSum = this.pauseSum + diff;

                this.upgateTimer(start, this.pauseSum);
            }
        },
        pauseTimer() {
            this.included = false;
            this.pause = true;
        }
    }
}
</script>

<style scoped>
.timer {
    display: inline-block;
    width: 225px;
    height: 120px;
    background: #696969;
    margin: 0 25px 45px;
}
.timer-top, .timer-bottom {
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.timer-top {
    border-bottom: 1px solid #9E9E9E;
    justify-content: center;
}
.stop, .play, .pause {
    margin: 0 25px;
    cursor: pointer;
}
.stop {
    height: 20px;
    width: 20px;
    background: #9E9E9E;
}
.pause {
    width: 17px;
    display: flex;
    justify-content: center;
}
.play {
    border-top: 10px solid #00000000;
    border-left: 17px solid #9E9E9E;
    border-bottom: 10px solid #00000000;
}
.rectangle {
    width: 3px;
    height: 20px;
    float: left;
    margin: 0 2px;
    background: #9E9E9E;
}

.active .timer-top {
    border-bottom: 1px solid #ffffff;
    color: #ffffff;
}
.active .stop, 
.active .rectangle {
    background: #ffffff;
}
</style>