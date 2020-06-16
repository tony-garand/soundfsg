<template>
    <div class="mb-8">
        <padded-section>
            <div class="w-full md:w-1/2 flex" style="background-image: url('/business-valuation-webinar/dist/images/staff-bg.png'); background-size: contain; background-position: center; background-repeat: no-repeat;"> 
                <div class="flex flex-col justify-center items-center p-20">
                    <img src="/business-valuation-webinar/dist/images/dave.jpg">
                </div>
            </div>
            <div class="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8">
                <div class="font-display text-primary font-bold text-3xl md:text-4xl leading-none mb-1"><div class="text-2xl">Featuring</div>Dave Jesiolowski,<br>Business Advisor</div>
                <p class="font-body text-sm leading-normal md:text-base">Dave is the author of the book, <em>One Decision Can - Make Better Decisions - Live a Better Life</em>, which outlines the lessons and wisdom he has acquired over the last three decades as a Professional Athlete, Advisor, Partner, and Managing Director with New York Life, Guardian, and OneAmerica. Along with two decades of wealth management experience, Dave is also well versed in risk management and working with business owners.</p>
            </div>
        </padded-section>
        <padded-section>
            <div class="md:flex md:flex-row-reverse">
                <div class="w-full md:w-1/2 flex px-4" style="background-image: url('/business-valuation-webinar/dist/images/staff-bg.png'); background-size: contain; background-position: center; background-repeat: no-repeat;"> 
                    <img :src="'business-valuation-webinar/dist/images/' + this.imageType + '-pride-images.png'" class="w-full object-contain h-1/10 md:h-full ">
                </div>
                <div class="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8">
                    <div class="font-display text-primary font-bold text-4xl md:text-5xl leading-none mb-1">We pride ourselves</div>
                    <p class="font-body text-sm leading-normal md:text-base">in helping clients understand and take advantage of today’s financial options, both for their business and personal financial goals. Our company is built on a solid foundation of excellent client service and in-depth market knowledge.</p>
                </div>
            </div>
        </padded-section>
        <padded-section classes="px-4 md:px-16">
            <div>
                <h2 class="font-display text-primary font-bold text-4xl md:text-5xl leading-none">Don’t wait any longer! <br class="hidden md:inline"> Learn what your business is worth!</h2>
                <a :href="this.ctaLink" data-open-modal class="button mt-8 button-narrow-mobile">Register for the Webinar</a>
            </div>
        </padded-section>
    </div>
</template>

<script>
import "../images/staff-bg.png";
import "../images/dave.jpg";
import "../images/building-pride-images.png";
import "../images/medical-pride-images.png";


export default {
    name: 'about-section',
    props: ['ctaLink','imageType']
}
</script>