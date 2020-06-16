<template>
    <div id="main-copy" class="w-full max-w-5xl mx-auto flex flex-wrap">
        <div class="w-full md:w-2/5 lg:w-1/2">
            <img class="w-full block" src="/business-valuation-podcast/dist/images/BuySell.jpg">
        </div>
        <div class="w-full md:w-3/5 lg:w-1/2 md:-mt-18 px-3 lg:pl-8 md:flex md:flex-col md:justify-center">
            <h2 class="font-bold text-primary font-display text-4xl md:text-6xl"><div class="text-percent-sm md:text-percent-lg text-shadow-white-lg -mt-40 md:-mt-24" style="letter-spacing: -20px;">90<span class="text-percent-sign relative text-shadow-white-md -top-64px left-20px md:-top-132px">%</span></div><div class="text-4xl -mt-16 leading-none">of business owners don’t know their business value. Learn Yours.</div></h2>
            <div class="mt-8">
                <a :href="this.ctaLink" data-open-modal class="button button-narrow-mobile">Listen to the Podcast</a>
            </div>
        </div>
    </div>
</template>

<script>

import "../images/BuySell.jpg";

export default {
    name: 'main-copy-section',
    props: ['ctaLink', 'imageType']
}
</script>
