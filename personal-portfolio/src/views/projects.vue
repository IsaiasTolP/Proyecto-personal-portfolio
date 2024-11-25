<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-4" v-for="(project, key) in projectList" :key="key">
                <Card :data="project"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from '../components/projectCard.vue';
    
    export default {
        name: "Projects",
        components: { Card },
        computed: {
            projectList() {
                const projects = this.$t('projects.data');
                console.log(projects);
                return Object.entries(projects).map(([key, value]) => projects[key]);
            }
        }
    };
</script>