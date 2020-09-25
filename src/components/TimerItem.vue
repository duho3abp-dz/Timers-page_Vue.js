//-------------------RENDER-------------------//
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

            <div @click="onStop" class="stop"></div>
        </div>
        <div @click="$emit('delete-timer', time.id)" class="delete-timer">&times;</div>
    </div>
</template>

//-------------------LOGIC-------------------//
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
            const animateTimer = () => {
                const nowTime = new Date().getTime(),
                      t = (nowTime - difference) - start;
                
                if (!this.pause) {
                    this.hours = Math.floor(t / 1000 / 60 / 24);
                    this.minutes = Math.floor((t / 1000 / 60) % 60);
                    this.seconds = Math.floor((t / 1000) % 60);
                    requestAnimationFrame(animateTimer);
                } else {
                    this.$emit('pause-time', nowTime, this.time.id);
                    cancelAnimationFrame(interval);
                }
            }

            const interval = requestAnimationFrame(animateTimer);
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
        },
        onStop() {
            this.included = false;
            this.pause = true;
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
            this.$emit('reset-timer', this.time.id);
        }
    }
}
</script>

//-------------------STYLE-------------------//
<style scoped>
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

.delete-timer {
    position: absolute;
    top: -15px;
    right: -15px;
    cursor: pointer;
}
</style>