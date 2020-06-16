<template>
    <header id="page-header-inner" class="w-full flex justify-between transition-long px-3 lg:px-8 py-2 mx-auto container mx-auto max-w-5xl lg:py-2 relative z-10">
        <div class="flex">
            <a href="http://soundfsg.com/" class="self-center logo-box transition" style="max-width: 220px; max-height: 60px;">
                <img svg-inline class="w-full h-auto" src="../images/logo.svg" alt="Environment Masters Logo">
            </a>
        </div>
        <div class="flex items-center">
            <a href="tel:8774623744" class="bg-secondary hover:bg-primary transition rounded-full flex w-8 h-8 justify-center items-center mr-2 lg:hidden">
                <img svg-inline class="w-4 h-4 object-contain" src="../images/phone.svg">
            </a>
            <a :href="this.ctaLink" data-open-modal class="bg-secondary hover:bg-primary transition rounded-full flex w-8 h-8 justify-center items-center lg:hidden">
                <img svg-inline class="w-4 h-4 object-contain" src="../images/mail.svg">
            </a>
            <span class="mr-16 hidden lg:inline-block text-base">Call <a href="tel:8774623744" class="font-bold text-secondary no-underline hover:text-primary transition leading-none">877-462-3744</a></span>
            <span><a :href="this.ctaLink" data-open-modal class="hidden lg:inline-block text-sm font-bold transition bg-secondary hover:bg-primary px-4 py-2 no-underline text-white hover:text-white rounded leading-none">Register for the Webinar</a></span>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'page-header',
        props: ['ctaLink']
    }
</script>