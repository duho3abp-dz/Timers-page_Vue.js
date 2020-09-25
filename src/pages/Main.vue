//-------------------RENDER-------------------//
<template>
    <div class="main">
        <h1>Timers Page</h1>
        <div class="main-content">
            <p>
                This application is a page with timers. 
            </p>
            <p>
                Functional:<br>
                - Timer start<br>
                - Timer pause<br>
                - Reset timer<br>
                - Delete timer<br>
                - Add timer<br>
            </p>
        </div>
        <router-link class="main-btn" to="/timers">to begin</router-link>
    </div>
</template>

//-------------------STYLE-------------------//
<style scoped>
.main {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.main-content {
    width: 30%;
}
.main-btn {
    padding: 10px;
    border: 2px solid #9E9E9E;
}
</style>