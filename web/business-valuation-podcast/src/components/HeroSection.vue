<template>
    <div id="hero" class="relative -mt-16 overflow-x-hidden">
        <div class="w-3/2 -left-1/4 md:w-full md:left-auto relative">
            <img class="w-full" style="object-fit: cover; object-position: 100% 0; max-height: 1100px;" :src="'/business-valuation-podcast/dist/images/' + this.imageType + '-hero.png'" alt="A brightly-lit doctor.">
        </div>
        <div class="w-full px-3 lg:px-8 absolute top-144px md:top-200px max-w-5xl absolute-center">
            <div style="max-width: 580px;">
                <h1 class="font-display text-primary text-3xl md:text-4xl lg:text-5xl leading-extra-tight text-shadow-white md:text-shadow-none">From a strong start to a planned finish,
                    <div class="hidden md:block leading-normal text-base font-normal font-body text-shadow-none">You'll never forget the day you opened the doors to your company — the first sale, the first employee hire. No one ever feels up to or ready for the day you release the organization to a different set of hands. Fear blinds us to the fact that amazing things are ahead — new challenges and adventures. We know because we have walked through this before, and we want to help you with this life-changing moment.</div></h1>
                <a :href="this.ctaLink" data-open-modal class="button mt-10 hidden md:inline-block">Listen to the Podcast</a>
            </div>
        </div>
        <div class="w-full px-3 md:hidden">
            <p class="font-base font-normal font-body text-primary pt-4">You'll never forget the day you opened the doors to your company — the first sale, the first employee hire. No one ever feels up to or ready for the day you release the organization to a different set of hands. Fear blinds us to the fact that amazing things are ahead — new challenges and adventures. We know because we have walked through this before, and we want to help you with this life-changing moment.</p>
            <a :href="this.ctaLink" data-open-modal class="button button-narrow-mobile mt-4">Listen to the Podcast</a>
        </div>
    </div>
</template>

<script>
import "../images/medical-hero.png";
import "../images/building-hero.png";

export default {
    name: 'hero-section',
    props: ['ctaLink','imageType']
}
</script>
