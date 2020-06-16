<template>
    <div id="hero" class="relative -mt-16 overflow-x-hidden">
        <div class="w-3/2 -left-1/4 md:w-full md:left-auto relative">
            <img class="w-full" style="object-fit: cover; object-position: 100% 0; max-height: 1100px;" :src="'/business-valuation-webinar/dist/images/' + this.imageType + '-hero.png'" alt="A brightly-lit doctor.">
        </div>
        <div class="w-full px-3 lg:px-8 absolute top-144px md:top-200px max-w-5xl absolute-center">
            <div style="max-width: 580px;">
                <h1 class="font-display text-primary text-3xl md:text-4xl lg:text-5xl leading-extra-tight text-shadow-white md:text-shadow-none">For most business owners,
                    <div class="hidden md:block leading-normal text-base font-normal font-body text-shadow-none">their single largest asset is their business. But do you know <strong class="font-bold">how much your business is actually worth?</strong> Sign up for our <strong class="font-bold">FREE WEBINAR</strong> to learn about your business valuation.</div></h1>
                <a :href="this.ctaLink" data-open-modal class="button mt-10 hidden md:inline-block">Register for the Webinar</a>
            </div>
        </div>
        <div class="w-full px-3 md:hidden">
            <p class="font-base font-normal font-body text-primary pt-4">their single largest asset is their business. <strong class="font-bold">But do you know how much your business is actually worth?</strong> Sign up for our <strong class="font-bold">FREE WEBINAR</strong> to learn about your business valuation.</p>
            <a :href="this.ctaLink" data-open-modal class="button button-narrow-mobile mt-4">Register for the Webinar</a>
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
