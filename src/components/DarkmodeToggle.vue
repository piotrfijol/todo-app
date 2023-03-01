<template>
    <div class="darktoggle">
        <label @click="handleToggle" for="darkmode-toggle"></label>
        <input type="checkbox" id="darkmode-toggle">
    </div>
</template>

<script>
    export default {
        methods: {
            handleToggle() {
                document.body.classList.toggle('darkmode');
            }
        },
    }
</script>

<style lang="scss" scoped>
    .darktoggle {
        
        input#darkmode-toggle {
            display: none;
        }

    }
</style>