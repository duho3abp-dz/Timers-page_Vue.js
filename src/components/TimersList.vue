<template>
    <div class="timers">
        <TimerItem 
            v-for="time of timerData"
            :time="time"
            :key="time.id"
            @start-date="setStartDate"
            @pause-time="setPauseTime"
        />
    </div>
</template>

<script>
import TimerItem from './TimerItem';

export default {
    components: { TimerItem },
    props: ['timerData'],
    methods: {
        setStartDate(start, id) {
            this.$emit('start-date', start, id);
        },
        setPauseTime(pause, id) {
            this.$emit('pause-time', pause, id);
        }
    }
}
</script>

<style scoped>
.timers {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>