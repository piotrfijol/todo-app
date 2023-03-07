<template>
    <TaskDialog
        title="Create a new task"
        v-model="dialog"
        @cancel="handleCancel"
        @save="handleCreate"
        saveLabel = "Create"
        >
        <template v-slot:activator="{props}">
            <v-btn
                color="info"
                icon="mdi-plus"
                v-bind="props"
                :style="{
                    marginLeft: '.6em',
                    marginTop: '.6em'
                }"
            ></v-btn>    
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
            'create'
        ],
        methods: {
            handleCancel(e) {
                this.dialog = false;
            },
            handleCreate(_ ,taskData) {
                this.$emit('create', taskData);
                this.dialog = false;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>