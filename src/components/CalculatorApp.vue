<template>
    <div class="container">
        <div class="calculator" :class="lightTheme ? 'light' : 'dark'">
            <div class="swtich-button" @click="switchTheme()" v-if="lightTheme">
                <div class="sun">
                    <img src="../assets/images/bi_sun.svg" alt="light mood" style="width: 29.737px; height: 29.737px;">
                </div>
                <div class="moon">
                    <img src="../assets/images/bx_bx-moon.svg" alt="dark mood" style="width: 29.737px; height: 29.737px">
                </div>
            </div>
            <div class="swtich-button dark" @click="switchTheme()" v-else>
                <div class="sun dark">
                    <img src="../assets/images/light-bi_sun.svg" alt="light mood" style="width: 29.737px; height: 29.737px;">
                </div>
                <div class="moon dark">
                    <img src="../assets/images/light-bx_bx-moon.svg" alt="dark mood" style="width: 29.737px; height: 29.737px">
                </div>
            </div>
            <div class="history" @click="historyData()" v-if="lightTheme">
                <img src="../assets/images/History.svg" alt="history" style="width: 30px; height: 30px;">
            </div>
            <div class="history dark" @click="historyData()" v-else>
                <img src="../assets/images/light-history.svg" alt="history" style="width: 30px; height: 30px;">
            </div>
            <div class="display-screen" v-if="state">
                <div id="display">
                    <p> {{ current || 0 }}</p>
                </div>
                <div class="result" :class="lightTheme ? 'light' : 'dark'">
                    <h1 id="display-equal">=</h1>
                    <h2>{{ result || 0 }}</h2>
                </div>
            </div>
            <div class="previous" v-else>
                <p v-for="val in history.slice(-3)" :key="val">
                    {{ val }}
                </p>

            </div>


            <div class="buttons" :class="lightTheme ? 'light' : 'dark'">
                <div class="row-rectangle" :class="lightTheme ? 'light' : 'dark'">
                    <button @click="clear" :class="lightTheme ? 'light' : 'dark'" id="clear">AC</button>
                    <button @click="sign()" :class="lightTheme ? 'light' : 'dark'" id="negative">+/-</button>
                    <button @click="percent('%')" :class="lightTheme ? 'light' : 'dark'" id="percent">%</button>
                </div>
                <div class="numbers">
                    <button @click="append('1')" class="btn-number" :class="lightTheme ? 'light' : 'dark'" id="1">1</button>
                    <button @click="append('2')" class="btn-number" :class="lightTheme ? 'light' : 'dark'" id="2">2</button>
                    <button @click="append('3')" class="btn-number" :class="lightTheme ? 'light' : 'dark'" id="3">3</button>
                    <button @click="append('4')" class="btn-number" :class="lightTheme ? 'light' : 'dark'" id="4">4</button>
                    <button @click="append('5')" class="btn-number" :class="lightTheme ? 'light' : 'dark'" id="5">5</button>
                    <button @click="append('6')" class="btn-number" :class="lightTheme ? 'light' : 'dark'" id="6">6</button>
                    <button @click="append('7')" class="btn-number" :class="lightTheme ? 'light' : 'dark'" id="7">7</button>
                    <button @click="append('8')" class="btn-number" :class="lightTheme ? 'light' : 'dark'" id="8">8</button>
                    <button @click="append('9')" class="btn-number" :class="lightTheme ? 'light' : 'dark'" id="9">9</button>
                    <button @click="dot()" class="btn-number" :class="lightTheme ? 'light' : 'dark'" id=".">.</button>
                    <button @click="append('0')" class="btn-number" :class="lightTheme ? 'light' : 'dark'" id="0">0</button>
                    <button @click="append('00')" class="btn-number" :class="lightTheme ? 'light' : 'dark'"
                        id="00">00</button>
                </div>
                <div class="column-rectangle" :class="lightTheme ? 'light' : 'dark'">
                    <button @click="append('/')" :class="lightTheme ? 'light' : 'dark'" id="/">&divide;</button>
                    <button @click="append('*')" :class="lightTheme ? 'light' : 'dark'" id="*">&times;</button>
                    <button @click="append('-')" :class="lightTheme ? 'light' : 'dark'" id="-">-</button>
                    <button @click="append('+')" :class="lightTheme ? 'light' : 'dark'" id="+">+</button>
                    <button @click="equal()" class="btn-number" :class="lightTheme ? 'light' : 'dark'" id="equal">=</button>
                </div>
                <div class="line" :class="lightTheme ? 'light' : 'dark'"></div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const current = ref('');
const history = ref([]);
const solve = ref('');
const result = ref('');
// to switch between calculator and history
const state = ref(true);
const lightTheme = ref(true);

const clear = () => {
    state.value = true;
    current.value = '';
    result.value = '';
};

const switchTheme = () => {
    lightTheme.value = !lightTheme.value;
    console.log(lightTheme);
}

const sign = () => {
    current.value =
        current.value.charAt(0) === '-' ? current.value.slice(1) : `-${current.value}`;
};

const percent = () => {
    current.value = `${parseFloat(current.value) / 100}`;
};

const dot = () => {
    if (current.value.indexOf('.') === -1) {
        append('.');
    }
};

const append = (number) => {
    current.value = `${current.value}${number}`;
};

const equal = () => {
    solve.value = current.value + '=';
    result.value = eval(current.value);
    solve.value = solve.value + `${result.value}`;
    history.value.push(solve.value);
};

const historyData = () => {
    state.value = !state.value;
};
</script>