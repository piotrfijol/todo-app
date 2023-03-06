<template>
    <div class="container">
        <header class="header">
            <h1>Tasks</h1>
        </header>
        <div class="tasks">
            <template v-if="tasks.length">
                <v-row>
                    <v-col
                        v-for="task in tasks"
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
                            @edit="handleEditSave"
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
                tasks: [],
                idCounter: 0
            }
        },
        mounted () {
            const data = this.getData();
            if(data) {
                this.tasks = data.tasks;
                this.idCounter = parseInt(data.idCounter);
            }
        },
        methods: {
            handleEditSave(taskId, taskData) {
                const taskArrId = this.tasks.findIndex((el) => el.id === taskId);
                this.merge(taskData, this.tasks[taskArrId]);
                this.saveTasks();
            },
            merge(objSource, objDestination) {

                // Merge doesn't apply to object values
                for(let prop in objSource) {
                    if(objDestination.hasOwnProperty(prop) && typeof objSource[prop] !== "object") {
                        objDestination[prop] = objSource[prop];
                    }
                }
            },
            getData() {
                return JSON.parse(localStorage.getItem("app-data"));
            },
            saveTasks() {
                const dataStr = JSON.stringify({tasks: this.tasks, idCounter: this.idCounter});

                localStorage.setItem('app-data', dataStr);
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