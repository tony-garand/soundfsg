<template>
    <div class="overflow-x-hidden">
        <padded-section classes="px-4">
            <h2 class="font-display leading-none text-4xl text-primary font-bold md:w-1/2 mb-6 mt-8">Why is accurate business valuation so important?</h2>
        </padded-section>
        <padded-section classes="relative px-4">
            <div class="main-carousel z-10 w-full relative md:flex md:flex-wrap -mt-10">
                <div class="w-full md:w-1/2 flex mb-8 relative pr-4 md:pr-8">
                    <div class="w-16 h-16 rounded-full bg-accent-lighter flex items-center justify-center md:mr-4 flex-shrink-0 reason-icon-position md:reason-icon-position-off absolute md:relative">
                        <img svg-inline src="../images/key.svg">
                    </div>
                    <div class="shadow-fade md:shadow-none px-4 py-8 md:py-0">
                        <h3 class="text-base leading-normal md:text-3xl font-display text-primary font-bold md:leading-none mb-6 mt-2 md:mt-0">It’s the key to your financial planning.</h3>
                        <p class="mb-0">Your business is your single largest asset. Understanding its value allows you to grow it to its full potential, properly manage your equity, prepare for future taxable events, and create the proper protections for your business and personal finances.</p>
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex mb-8 relative pr-4 md:pr-0">
                    <div class="w-16 h-16 rounded-full bg-accent-lighter flex items-center justify-center md:mr-4 flex-shrink-0 reason-icon-position md:reason-icon-position-off absolute md:relative">
                        <img svg-inline src="../images/family.svg">
                    </div>
                    <div class="shadow-fade md:shadow-none px-4 py-8 md:py-0">
                        <h3 class="text-base leading-normal md:text-3xl font-display text-primary font-bold md:leading-none mb-6 mt-2 md:mt-0">Your family is relying on you.</h3>
                        <p class="mb-0">Proper business valuation and financial planning allows you to protect your family from the possible ups and downs of your market today and build an estate plan for tomorrow, so your loved ones can benefit from the value you’ve created in the future.</p>
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex mb-8 relative pr-4 md:pr-8">
                    <div class="w-16 h-16 rounded-full bg-accent-lighter flex items-center justify-center md:mr-4 flex-shrink-0 reason-icon-position md:reason-icon-position-off absolute md:relative">
                        <img svg-inline src="../images/cornerstone.svg">
                    </div>
                    <div class="shadow-fade md:shadow-none px-4 py-8 md:py-0">
                        <h3 class="text-base leading-normal md:text-3xl font-display text-primary font-bold md:leading-none mb-6 mt-2 md:mt-0">It’s the cornerstone of your succession plan.</h3>
                        <p class="mb-0">Whether you plan to sell your business, pass it along to a family member, or haven’t even given thought to the future, working out a succession plan now will remove stress from you and help your business run more efficiently.</p>
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex mb-8 relative pr-4 md:pr-0">
                    <div class="w-16 h-16 rounded-full bg-accent-lighter flex items-center justify-center md:mr-4 flex-shrink-0 reason-icon-position md:reason-icon-position-off absolute md:relative">
                        <img svg-inline src="../images/tag.svg">
                    </div>
                    <div class="shadow-fade md:shadow-none px-4 py-8 md:py-0">
                        <h3 class="text-base leading-normal md:text-3xl font-display text-primary font-bold md:leading-none mb-6 mt-2 md:mt-0">Get the right sales price.</h3>
                        <p>If you are thinking about selling your business, or even if you just want to be able to have that option on the table, proper business valuation is key. In fact, 82% of all business owners who knew the value of their business at least 18 months before sale increased their sale price by 18% or more.*</p>
                        <p class="text-xxs italic mb-0">*source: BizEquity</p>
                    </div>
                </div>
            </div>
            <a :href="this.ctaLink" data-open-modal class="button button-narrow-mobile mt-8 mx-auto">Register for the Webinar</a>
        </padded-section>
    </div>
</template>

<script>
export default {
    name: 'reasons-section',
    props: ['ctaLink']
}
</script>
