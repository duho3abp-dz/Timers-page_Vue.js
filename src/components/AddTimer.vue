//-------------------RENDER-------------------//
<template>
    <div @click="$emit('add-timer')" class="timer timer-add">
        <div class="plus-block">
            <div class="rectangle-add"></div>
            <div class="rectangle-add rectangle-horizontal"></div>
        </div>
    </div>
</template>

//-------------------STYLE-------------------//
<style scoped>
.timer-add {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.plus-block {
    width: 20px;
    height: 20px;
    position: relative;
}
.rectangle-add {
    width: 3px;
    height: 20px;
    background: #9E9E9E;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.rectangle-horizontal {
    transform: translateX(-50%) translateY(-50%) rotate(90deg);
}
</style>