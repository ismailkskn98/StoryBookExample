<template>
    <div class="switcher-wrapper">
        <div class="switcher-open active">{{ activeText || 'activeText' }}</div>
        <div class="switcher-close">{{ passiveText || 'passiveText' }}</div>
    </div>
</template>

<script>
export default {
    name: 'Switcher',
    props: {
        activeText: {
            type: String,
        },
        passiveText: {
            type: String,
        }
    }
}
</script>

<style scoped>
.active {
    font-size: 20px;
}

.switcher-wrapper {
    display: flex;
    align-items: center;
    font-size: 12px;
}

.switcher-open,
.switcher-close {
    height: 40px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    cursor: pointer;
    min-width: 100px;
}

.switcher-open {
    background-color: #42b983;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
}

.switcher-close {
    background-color: crimson;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
}
</style>