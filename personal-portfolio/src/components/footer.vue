<template>
    <footer>
        <div class="d-flex px-3 py-3 text-white justify-content-around">
            <div class="d-flex flex-column">
                <h5>Navigation:</h5>
                <div class="row">
                    <span class="col-6">{{ $t('projects') }}</span>
                    <span class="col-6">{{ $t('skills') }}</span>
                    <span class="col-6">{{ $t('experience') }}</span>
                    <span class="col-6">{{ $t('aboutme.title') }}</span>
                    <span class="col-6">{{ $t('contact') }}</span>
                </div>

            </div>
            <div class="d-flex flex-column">
                <h5>Socials:</h5>
                <span>Linkedin</span>
                <span>Github</span>
                <span>Instagram</span>
            </div>
        </div>
    </footer>
    
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>