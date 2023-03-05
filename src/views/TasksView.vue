<template>
    <div class="container">
        <header class="header">
            <h1>Tasks</h1>
        </header>
        <div class="tasks">
            <template v-if="tasks.length">
                <v-row>
                    <v-col
                        v-for="task, id in tasks"
                        :key="task.id"
                        cols="12"
                        xs="12"
                        md="6"
                        lg="4"
                    >
                        <Task
                            class="task" 
                            :task="task"
                            @delete="deleteTask"
                            @toggle="toggleTaskStatus"
                        />
                    </v-col>
                </v-row>
            </template>
            <template v-else>
                <p>Could not find any tasks.</p>
            </template>
        </div>
    </div>
</template>

<script>
import Task from '@/components/Task.vue';

    export default {
        components: {
            Task,
        },
        data() {
            return {
                tasks: []
            }
        },
        mounted () {
            this.tasks = this.getTasks();
        },
        methods: {
            getTasks() {
                return [{
                    id: 1,
                    title: 'The task',
                    description: 'task to do',
                    isDone: false
                }];
            },
            saveTasks() {
            },
            deleteTask(e, taskId) {
                this.tasks = this.tasks.filter(el => el.id !== taskId);
                
                this.saveTasks();
            },
            toggleTaskStatus(e, taskId) {
                const task = this.tasks.find(el => el.id === taskId);

                task.isDone = !task.isDone;
                this.saveTasks();
            }
        },
    }
</script>

<style lang="scss" scoped>
    .header {
        margin-top: 6rem;
        font-size: 1.5rem;
        text-align: center;
    }

    p {
        text-align: center;
        opacity: .8;
    }
    .tasks {
        text-align: left;
        margin-top: 5rem;
    }
    
</style>