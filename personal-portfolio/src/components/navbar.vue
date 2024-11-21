<template>
    <div>
        <h1><a href="">{{ $t("projects") }}</a></h1>
        <h1><a href="">{{ $t('skills') }}</a></h1>
        <h1><a href="">{{ $t('experience') }}</a></h1>
        <h1><a href="">{{ $t('contact') }}</a></h1>
        <h1><a href="">{{ $t('aboutme') }}</a></h1>
        <button @click="switchLanguage('en')">English</button>
        <button @click="switchLanguage('es')">Español</button>
    </div>
</template>
<script setup>
import { ref } from "vue";

const routes = ref([
    { title: 'About me', link: '/about-me' },
    { title: 'Contact', link: '/contact' },
    { title: 'Experience', link: '/experience' },
    { title: 'Skills', link: '/skills' },
    { title: 'Projects', link: '/projects' },
]);
</script>