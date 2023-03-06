<template>
    <TaskDialog
        title="Edit the task"
        v-model="dialog"
        @cancel="handleCancel"
        @save="handleEdit"
        saveLabel = "Edit"
        :task="task"
        >
        <template v-slot:activator="{props}">
            <button :class="buttonClass" id="task-edit-button" v-bind="props">
                <v-icon icon="mdi-pencil"></v-icon>
            </button>
        </template>
    </TaskDialog>
</template>

<script>
    import TaskDialog from './TaskDialog.vue';

    export default {
        components: {
            TaskDialog,
        },
        data() {
            return {
                dialog: false
            }
        },
        emits: [
            'edit'
        ],
        methods: {
            handleCancel(e) {
                this.dialog = false;
            },
            handleEdit(taskId, taskData) {
                this.$emit('edit', taskId, taskData);
                this.dialog = false;
            },
        },
        props: {
            buttonClass: String,
            task: Object
        },
    }
</script>

<style lang="scss" scoped>

</style>