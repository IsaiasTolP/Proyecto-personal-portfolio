<template>
    <footer>
        <div class="d-flex px-3 py-3 text-white justify-content-around">
            <div class="d-flex flex-column">
                <h5>Navigation:</h5>
                <div class="row">
                    <router-link class="col-6" to="/"><span>{{ $t('projects.title') }}</span></router-link>
                    <router-link class="col-6" to="/"><span>{{ $t('skills') }}</span></router-link>
                    <router-link class="col-6" to="/"><span>{{ $t('experience') }}</span></router-link>
                    <router-link class="col-6" to="/aboutme"><span>{{ $t('aboutme.title') }}</span></router-link>
                    <router-link class="col-6" to="/"><span>{{ $t('contact') }}</span></router-link>
                </div>

            </div>
            <div class="d-flex flex-column">
                <h5>Socials:</h5>
                <a href="https://github.com/IsaiasTolP"><span>Github</span></a>
                <a href="https://www.linkedin.com/in/isa%C3%ADas-t-70906030b/"><span>Linkedin</span></a>
                <a href="https://www.instagram.com/isaias_tdp/"><span>Instagram</span></a>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>