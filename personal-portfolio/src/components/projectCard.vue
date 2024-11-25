<template>
    <div class="card">
        <div class="card-header">{{ $t('data.title') }}</div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            data: {
                type: Object,
                required: true
            }
        }
    };
</script>