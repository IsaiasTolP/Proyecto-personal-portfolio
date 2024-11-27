<template>
    <div class="card">
        <div class="card-body">
            <p class="text-card">{{ data.name }}</p>
            <p class="text-card">{{ data.logo }}</p>
            <p class="text-card">{{ data.description }}</p>
            <p class="text-card">{{ data.level }}</p>
        </div>
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