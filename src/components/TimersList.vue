<template>
    <div class="timers">
        <TimerItem 
            v-for="time of timerData"
            :time="time"
            :key="time.id"
            @start-date="setStartDate"
            @pause-time="setPauseTime"
            @reset-timer="resetTimer"
            @delete-timer="deleteTimer"
        />
        <AddTimer @add-timer="$emit('add-timer')"/>
    </div>
</template>

<script>
import TimerItem from './TimerItem';
import AddTimer from './AddTimer';

export default {
    components: { TimerItem, AddTimer },
    props: [ 'timerData' ],
    methods: {
        setStartDate(start, id) {
            this.$emit('start-date', start, id);
        },
        setPauseTime(pause, id) {
            this.$emit('pause-time', pause, id);
        },
        resetTimer(id) {
            this.$emit('reset-timer', id);
        },
        deleteTimer(id) {
            this.$emit('delete-timer', id);
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