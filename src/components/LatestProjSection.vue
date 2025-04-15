<template>
    <section class="text-white mt-20" id="projects">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-white"> My Latest Projects</h2>
                <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
                    <button class="hover:text-primary" v-for="category in ['all', 'web development', 'plugin development']"
                        :key="category" @click="() => selectedCategory = category">
                        {{ category }}
                    </button>
                </div>
            </div>
            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
                data-aos="fade-right">
                <div v-for="project in filteredProjects" :key="project.id">
                    <div class="h-52 md:h-[10rem] rounded-t-xl relative group"
                    :style="{ backgroundImage: 'url(' + project.image + ')', backgroundSize: 'cover' }">                    
                    <div class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0
                    hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500
                    ">
                        <a class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                            :href="project.gitURL"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                data-slot="icon"
                                class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5">
                                </path>
                            </svg></a><a
                            class="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                            :href="project.webURL"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                data-slot="icon"
                                class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                            </svg></a>
                    </div>
                </div>
                <div class="text-white rounded-b-xl mt-3 bg-[#111a3e] shadow-lg border border-[#1f1641] py-6 px-4">
                    <h3 class="text-lg font-semibold uppercase lg:text-xl"> {{ project.title }}</h3>
                    <p class="text-[#ADB7BE]">{{ project.description }}</p>
                    <div class="flex flex-wrap p-2.5">
                        <div v-for="technology in project.technologies" :key="technology" class="text-center ml-1 mt-1 rounded-3xl bg-[#111827]"
                        style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid #111827;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);"
                        >
                    <p class="px-1 py-2">{{ technology }}</p>
                    </div>
                    </div>
                </div>
                </div>
            </ul>
        </div>
    </section>
</template>
<script setup>
import { ref, computed } from 'vue';

const Projects = ref([
    {
        id: 1,
        category: 'web development',
        image: 'src/assets/3sportal.png',
        title: '3sPortal',
        description: 'A modern medical website for easy access to healthcare services. Users can quickly book appointments, find medical information, and connect with professionals. 3sportal enhances patient care with a user-friendly digital platform.',
        technologies: ['react.js', 'CSS', 'Laravel', 'RestAPI', 'Docker'],
        gitURL: 'https://github.com/thy-preciousgenodeala',
        webURL: 'https://telemedica.jp/'
    },
    {
        id: 2,
        category: 'web development',
        image: 'src/assets/bishuku.png',
        title: 'Bishuku',
        description: 'This is a modern e-commerce website for premium wigs in Japan. It offers a stylish and comfortable selection for fashion and medical use. The site is designed to provide a smooth, user-friendly shopping experience.',
        technologies: ['WordPress', 'CSS', 'Php', 'FTP', 'Docker'],
        gitURL: 'https://github.com/thy-preciousgenodeala',
        webURL: 'https://bishuku.jp/'
    },
    {
        id: 3,
        category: 'web development',
        image: 'src/assets/writerity.png',
        title: 'Writerity',
        description: 'An innovative school website offering courses in graphic design and system development. Students can explore creative and technical skills, guided by expert instructors. The platform enhances learning with a user-friendly, engaging digital experience.',
        technologies: ['WordPress', 'CSS', 'Php', 'FTP', 'Docker'],
        gitURL: 'https://github.com/thy-preciousgenodeala',
        webURL: 'https://writerity.com/'
    },
    {
        id: 4,
        category: 'web development',
        image: 'src/assets/riptus.png',
        title: 'Riptus',
        description: 'An innovative advertising agency focused on corporate solutions. We craft impactful campaigns to drive brand growth and success. The platform offers a seamless way to connect with expert strategists and creative professionals.',
        technologies: ['WordPress', 'TailwindCss', 'Php', 'FTP', 'Docker'],
        gitURL: 'https://github.com/thy-preciousgenodeala',
        webURL: 'https://riptus.me/'
    },
    {
        id: 5,
        category: 'web development',
        image: 'src/assets/megumi.png',
        title: 'Megumi',
        description: 'A trusted hospital offering comprehensive healthcare services. Patients can easily access information, book appointments, and connect with doctors. The website provides a smooth, user-friendly experience for enhanced care.',
        technologies: ['Html', 'CSS', 'Php', 'FTP', 'Docker'],
        gitURL: 'https://github.com/thy-preciousgenodeala',
        webURL: 'http://megumi-kai.or.jp/megumi-hospital/index.html'
    },
    {
        id: 6,
        category: 'web development',
        image: 'src/assets/royalhoney.png',
        title: 'Royalhoney',
        description: 'The Royal Honey website showcases its premium quality and natural ingredients. It highlights the health and beauty benefits, providing a user-friendly experience. The site reflects the brand’s excellence and connects customers worldwide.',
        technologies: ['WordPress', 'CSS', 'Php', 'FTP', 'Docker'],
        gitURL: 'https://github.com/thy-preciousgenodeala',
        webURL: 'https://royalhoney-japan.jp/'
    },
    {
        id: 7,
        category: 'plugin development',
        image: 'src/assets/plugins.png',
        title: 'PhotoShop Plugin',
        description: 'The Royal Honey website showcases its premium quality and natural ingredients. It highlights the health and beauty benefits, providing a user-friendly experience. The site reflects the brand’s excellence and connects customers worldwide.',
        technologies: ['react.js', 'tailwindcss', 'UXP', 'PhotoShop'],
        gitURL: 'https://github.com/thy-preciousgenodeala',
        webURL: 'n/a'
    },
    {
        id: 8,
        category: 'web development',
        image: 'src/assets/aic-react.png',
        title: 'Aic-React',
        description: 'The Royal Honey website showcases its premium quality and natural ingredients. It highlights the health and beauty benefits, providing a user-friendly experience. The site reflects the brand’s excellence and connects customers worldwide.',
        technologies: ['react.js', 'tailwindcss', 'GraphQl', 'Mysql', 'knex'],
        gitURL: 'https://github.com/thy-preciousgenodeala',
        webURL: 'not yet available'
    }
]);

const selectedCategory = ref('all');
const filteredProjects = computed(() => {
    if (selectedCategory.value === 'all') {
        return Projects.value;
    }
    return Projects.value.filter(project => project.category.toLocaleLowerCase() === selectedCategory.value.toLocaleLowerCase());
})

</script>
