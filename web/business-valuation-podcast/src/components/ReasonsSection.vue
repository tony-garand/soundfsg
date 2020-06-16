<template>
    <div class="overflow-x-hidden">
        <padded-section classes="px-4">
            <h2 class="font-display leading-none text-4xl text-primary font-bold md:w-1/2 mb-6 mt-8">Your plan depends on your goal. Looking at the future, which best describes you?</h2>
        </padded-section>
        <padded-section classes="relative px-4">
            <div class="main-carousel z-10 w-full relative md:flex md:flex-wrap -mt-10">
                <div class="w-full md:w-1/2 flex mb-8 relative md:pr-8">
                    <div class="shadow-fade md:shadow-none px-4 py-8 md:py-0">
                        <img src="/business-valuation-podcast/dist/images/Succession.jpg" style="max-height:340px; max-width: 100%;">
                        <h3 class="text-base leading-normal md:text-3xl font-display text-primary font-bold md:leading-none my-6">You need someone to take over.</h3>
                        <p class="mb-0">If you’ve got 5 to 10 year left, a succession plan may work well. Imagine cloning yourself and having an innovative leader direct your company. We can help with the process!</p>
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex mb-8 relative md:pr-0">
                    <div class="shadow-fade md:shadow-none px-4 py-8 md:py-0">
                        <img src="/business-valuation-podcast/dist/images/Protect.jpg" style="max-height:340px; max-width: 100%;">
                        <h3 class="text-base leading-normal md:text-3xl font-display text-primary font-bold md:leading-none my-6">You don't have a risk management plan.</h3>
                        <p class="mb-0">In the case of dire circumstances, like premature death or disability, what would happen to your business? We can help you with a risk management plan to protect you and your business.</p>
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex mb-8 relative md:pr-8">
                    <div class="shadow-fade md:shadow-none px-4 py-8 md:py-0">
                        <img src="/business-valuation-podcast/dist/images/Retire.jpg" style="max-height:340px; max-width: 100%;">
                        <h3 class="text-base leading-normal md:text-3xl font-display text-primary font-bold md:leading-none my-6">You're ready to retire.</h3>
                        <p class="mb-0">You didn’t grow your business overnight so why leave retirement decisions to the last minute? 80% of owners will have to sell out to retire. We can help with a step-by-step plan to keep you in control of the transition.</p>
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex mb-8 relative md:pr-0">
                    <div class="shadow-fade md:shadow-none px-4 py-8 md:py-0">
                        <img src="/business-valuation-podcast/dist/images/Grow.jpg" style="max-height:340px; max-width: 100%;">
                        <h3 class="text-base leading-normal md:text-3xl font-display text-primary font-bold md:leading-none my-6">You don't know how to grow.</h3>
                        <p>What areas of your business are poised for expansion and more resources? 90% of business owners don’t know the true value of their business! We can help answer these questions and make a plan for growth.</p>
                    </div>
                </div>
            </div>
            <a :href="this.ctaLink" data-open-modal class="button button-narrow-mobile mt-8 mx-auto">Listen to the Podcast</a>
        </padded-section>
    </div>
</template>

<script>
import "../images/Grow.jpg";
import "../images/Succession.jpg";
import "../images/Retire.jpg";
import "../images/Protect.jpg";

export default {
    name: 'reasons-section',
    props: ['ctaLink']
}
</script>
