<template >
    <section class="text-white mt-20" id="services">
        <div class="px-4 xl:pl-16">
            <h2 class="text-4xl font-bold text-white mb-4">My Services</h2>
        </div>
        <div class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div v-for="service in services" :key="service.id" data-aos="fade-up"
            class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
            >
                <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <div>
                        <img :src="service.icon" alt="service icon">
                    </div>
                </div>
                <div class="text-center">
                    <h3 class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                        {{ service.name }}
                    </h3>
                    <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        {{ service.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import {ref} from 'vue';
const services =ref([
    {
        id:1,
        icon:'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
        name:'WEB DEVELOPMENT',
        description:'I build modern, responsive websites and web applications using the latest frontend and backend technologies.'
    },
    {
        id:2,
        icon:'https://img.icons8.com/color/96/000000/api.png',
        name:'API & Backend Service',
        description:'I design and develop robust APIs and backend systems that power scalable applications.'
    },
    {
        id:3,
        icon:'https://img.icons8.com/color/96/000000/design.png',
        name:'UI/UX Implementation',
        description:'I turn design mockups into fully functional interfaces with clean, accessible, and responsive code.'
    },
    {
        id:4,
        icon:'https://cdn-icons-png.flaticon.com/512/5325/5325081.png',
        name:'DevOps & Deployment',
        description:'I handle app deployment, server setup, and continuous integration to keep projects running smoothly.'
    },
    {
        id:5,
        icon:'https://img.icons8.com/color/96/000000/test-passed.png',
        name:'Testing & Maintenance',
        description:'I ensure software reliability through thorough testing, regular updates, and ongoing maintenance.'
    },
    {
        id:6,
        icon:'https://cdn-icons-png.flaticon.com/512/8758/8758172.png',
        name:'Plugin Development',
        description:'I develop custom plugins and extensions to add functionality and flexibility to existing platforms and systems.'
    },
    ])
</script>

