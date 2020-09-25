//-------------------RENDER-------------------//
<template>
  <div id="app">
    <router-view />
  </div>
</template>

//-------------------STYLE-------------------//
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
}
.timer {
  display: inline-block;
  width: 225px;
  height: 120px;
  background: #696969;
  margin: 0 25px 45px;
  position: relative;
}
a {
  text-decoration: none;
  color: #9E9E9E;
}
</style>
