<template>
    <v-card
        :text="task.description"
        class="task"
        :class="{'task--done': task.isDone}"
        height="120px"
        width="auto"
        :data-id="task.id"
    >
        <template v-slot:title>
            <div class="d-flex">
                <v-icon v-show="task.isDone" class="task__checkmark">mdi-check-all</v-icon>
                <p :style="{overflow: 'hidden'}">{{ task.title }}</p>
                <div class="action-buttons">
                    <button class="toggle-btn"
                        @click="handleTaskToggle"
                    >
                        <v-icon icon="mdi-check"></v-icon>
                    </button>
                    <button class="delete-btn" 
                        @click="handleTaskDelete">
                        <v-icon icon="mdi-delete"></v-icon>
                    </button>
                </div>
            </div>
        </template>
    </v-card>
</template>

<script>
import anime from 'animejs/lib/anime.es';

    export default {
        props: {
            task: {
                type: Object,
                default: {id: 0, title: '', description: '', isDone: false}
            },
        },
        methods: {
            handleTaskToggle(e) {
                
                if(!this.task.isDone) {
                    anime({
                        targets: `.task[data-id="${this.task.id}"]`,
                        scale: [
                            { value: 1, duration: 75, delay: 0},
                            { value: 1.05, duration: 75, delay: 0},
                            { value: 0.9, duration: 50, delay: 0},
                            { value: 0.95, duration: 50, delay: 0},
                            { value: 1, duration: 50, delay: 0}
                        ],
                        easing: 'linear',
                        complete: () => this.$emit('toggle', e, this.task.id)
                    });
                } else {this.$emit('toggle', e, this.task.id);}
            },
            handleTaskDelete(e) {
                this.$emit('delete', e, this.task.id);
            }
        },
    }
</script>

<style scoped>
    .task {
        width: auto !important;
        flex: 1;
        position: relative;
        z-index: 10;
        --completed-color: rgb(128, 189, 67);
    }
    
    .task--done {
        box-shadow: 0 0 0 5px var(--completed-color);
    }

    .task--done .task__checkmark {
        color: var(--completed-color);
    }

    body.darkmode .task {
      background-color: #5d6378;
      color: #e5e5e5;
    }

    .action-buttons {
        margin-left: auto;
    }

    .action-buttons > button {
        border-radius: 50%;
        font-size: .7rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 15px;
        height: 26px;
        margin-left: .2em;
        background: transparent;
    }
</style>