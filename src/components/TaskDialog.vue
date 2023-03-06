<template>
    <v-dialog
        width="100vw"
        maxWidth="1024px"
        transition="dialog-top-transition"
    >
    
    <template v-slot:activator="{ props }">
        <slot name="activator" v-bind="{props}"></slot>
    </template>

        <v-card>
            <v-card-title>
                <span class="text-h5">{{ title }}</span>
            </v-card-title>

            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col
                            cols="12"
                            xs="12"
                        >
                            <v-text-field
                                label="Title of the task"
                                v-model="taskTitle"
                            ></v-text-field>                            
                        </v-col>
                        <v-col
                            cols="12"
                            xs="12"
                        >
                            <v-textarea
                                label="Description of the task"
                                v-model="taskDescription"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <div class="d-flex">
                    <v-btn 
                        @click="handleDialogCancel"
                        color="dark" 
                        id="dialog-cancel"
                        block
                    >Close</v-btn>

                    <v-btn 
                        @click="handleDialogSave"
                        id="dialog-save"
                        variant="tonal" 
                        color="info" 
                        block 
                        prepend-icon="mdi-plus"    
                    >{{ saveBtnLabel }}</v-btn>
                </div>
            </v-card-actions>
        </v-card>
</v-dialog>
</template>

<script>

export default {
    updated () {
        this.taskTitle =  this.task.title;
        this.taskDescription = this.task.description
    },
    props: {
        title: {
            type: String,
            default: "Task"
        },
        saveBtnLabel: {
            type: String,
            default: "Save"
        },
        task: {
            type: Object,
            default: {
                id: 0,
                title: '',
                description: '',
                isDone: false
            }    
        }
    },
    data() {
        return {
            taskTitle: this.task.title,
            taskDescription: this.task.description,
        }
    },
    methods: {
        handleDialogCancel() {
            this.$emit('cancel');
            this.clearForm();
        },  
        handleDialogSave() {
            this.$emit('save', this.task.id, {title: this.taskTitle, description: this.taskDescription});
            this.clearForm();
        },
        clearForm() {
            this.taskTitle = '';
            this.taskDescription = '';
        }
    },
}
</script>

<style lang="scss" scoped>

</style>