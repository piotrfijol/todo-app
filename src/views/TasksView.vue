<template>
    <div class="container">
        <header class="header">
            <h1>Tasks</h1>
        </header>
        <div class="tasks">
            <template v-if="tasks.length">
                <div 
                    v-for="task in tasks" 
                    class="task" 
                    :key="task.id"
                    :task="task"
                    @delete="deleteTask"
                    @toggle="toggleTaskStatus"
                ></div>
            </template>
            <template v-else>
                <p>Could not find any tasks.</p>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
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
                return [];
            },
            saveTasks() {
            },
            deleteTask(e, taskId) {
            },
            toggleTaskStatus(e, taskId) {
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
        margin-top: 2rem;
        opacity: .8;
    }
</style>