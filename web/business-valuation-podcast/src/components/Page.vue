<template>
    <div id="page" class="antialiased z-0" data-server-rendered="true">
        <div id="page-inner" class="relative overflow-x-hidden">
            <page-header :ctaLink="ctaLink"></page-header>
            <hero-section :ctaLink="ctaLink" :imageType="imageType"></hero-section>
            <quiz></quiz>
            <main-copy-section :ctaLink="ctaLink" :imageType="imageType"></main-copy-section>
            <reasons-section :ctaLink="ctaLink"></reasons-section>
            <page-footer></page-footer>
        </div>
        <form-modal></form-modal>
    </div>
</template>

<script>
    import PageHeader from './PageHeader.vue';
    import HeroSection from './HeroSection.vue';
    import PageFooter from './PageFooter.vue';
    import Banner from './Banner.vue';
    import MainCopySection from './MainCopySection.vue';
    import AboutSection from './AboutSection.vue';
    import ReasonsSection from './ReasonsSection.vue';
    import FormModal from './FormModal.vue';
    import Quiz from './site-only/Quiz.vue';

    export default {
        name: 'page',
        data() {
            return {
                ctaLink: 'https://www.soundfsg.com/resources/podcasts/chris-mcalpin-getting-out-of-your-business-pt-1',
                imageType: 'building'
            };
        },
        components: {
            PageHeader,
            HeroSection,
            PageFooter,
            Banner,
            MainCopySection,
            AboutSection,
            ReasonsSection,
            FormModal,
            Quiz
        }
    }
</script>
