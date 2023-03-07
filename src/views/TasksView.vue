<template>
    <div class="container">
        <header class="header d-flex justify-center align-center">
            <h1>Tasks</h1> 
            <CreateTaskDialog 
                @create="handleTaskCreate"
            />
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
                        draggable="true"
                        @dragstart="handleDragStart"
                        @drop="handleDragEnd"
                        @dragend="resetDrag"
                        @dragenter.prevent
                        @dragover.prevent
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
import CreateTaskDialog from '../components/CreateTaskDialog.vue';

    export default {
        components: {
    Task,
    CreateTaskDialog
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
            resetDrag() {
                if(this.draggedTask) {
                    this.draggedTask.style.opacity = "1";
                    this.draggedTask = null;
                }
            },
            handleDragStart(e, id) {
                this.draggedTask = e.currentTarget;
                this.draggedTask.style.opacity = "0.001";
            },
            handleDragEnd(e, id) {
                const draggedID = this.tasks.findIndex(el => el.id == this.draggedTask.children[0].dataset.id);
                const droppedID = this.tasks.findIndex(el => el.id == e.currentTarget.children[0].dataset.id);
                swap(this.tasks, draggedID, droppedID);

                /* Swap two elements in an array */
                function swap(arr, a, b) {
                    [arr[a], arr[b]] = [arr[b], arr[a]];
                }

                this.resetDrag();
                this.saveTasks();
            },
            handleTaskCreate(newTask) {
                
                let task = {
                    ...newTask,
                    id: this.idCounter++,
                    isDone: false
                };

                this.tasks.push(task);
                this.saveTasks();
            
            },
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