<template>
    <div class="darktoggle" ref="toggle">
        <label @click="handleToggle" for="darkmode-toggle"></label>
        <input type="checkbox" id="darkmode-toggle">
    </div>
</template>

<script>
    export default {
        props: {
            isDarkmode: {
                type: Boolean,
                default: false
            },
        },
        beforeUpdate() {
            this.setColors()
        },
        methods: {
            setDarkmode() {
                document.body.classList.add('darkmode');
                this.$refs.toggle.classList.add('toggled');
            },
            setLightmode() {
                document.body.classList.remove('darkmode')
                this.$refs.toggle.classList.remove('toggled');                    
            },
            setColors() {
                if(this.isDarkmode) {
                    this.setDarkmode();
                } else {
                    this.setLightmode();
                }
            },
            handleToggle() {
                console.log(this.isDarkmode)
                this.$emit('toggle:darkmode', !this.isDarkmode);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .darktoggle {
        
        & {
            --toggle-shadow-color: #AAA;
            --toggle-background: #FFF;
            
            width: 40px;
            height: 17px;
        }

        &.toggled {
            --toggle-shadow-color: #231f57;
            --toggle-background: #443f6e;
        }

        input#darkmode-toggle {
            display: none;
        }

        
        label {
            display: block;
            position: relative;
            height: 100%;
            width: 100%;
            border-radius: 7px;
            background-color: var(--toggle-background);
            box-shadow: inset 0 0 5px 0 var(--toggle-shadow-color);
        }

        label:hover {
            cursor: pointer;
        }
        
        /* Toggle circle */
        label::before, label::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 40%;
            background-color: #FFF;
            border-radius: 50%;
            box-shadow: 0 0 2px 0 #DDD;
            transition: left .15s ease-out;
        }

        &.toggled label::before {
            left: 75%;
        }

        /* Crescent effect */
        &.toggled label::after {
            content: '';
            transform: rotate(45deg) scale3d(0.8, 0.9, 1);
            left:68%;
            top: -10%;
            background-color: var(--toggle-shadow-color);
            opacity: .9;
        }

    }
</style>