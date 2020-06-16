<template>
    <footer class="bg-primary px-4">
        <div class="md:px-16 lg:px-32 container max-w-5xl container-padding py-16 text-white mx-auto">
            <p class="text-xs text-white">All information herein has been prepared solely for informational purposes, and it is not an offer to buy or sell, or a solicitation of an offer to buy or sell any security or instrument or to participate in any particular trading strategy.</p>
            <p class="text-xs text-white mb-8">Investment Advisory Services offered through Sound Financial Strategies Group, Inc. (“SFSG”), a Registered Investment Adviser. Certain representatives of SFSG are also Registered Representatives offering securities through APW Capital, Inc., Member <a class="text-white hover:text-secondary" href="http://www.finra.org/" target="_blank">FINRA</a>/<a class="text-white hover:text-secondary" href="https://www.sipc.org/" target="_blank">SIPC</a>., 100 Enterprise Drive, Suite 504, Rockaway, NJ 07866 (800) 637-3211. SFSG and APW Capital are separate and unrelated companies. Check the Background of this firm on <a class="text-white hover:text-secondary" href="https://brokercheck.finra.org/" target="_blank">FINRA’s BrokerCheck</a>.</p>
            <div class="flex flex-col md:flex-row md:flex-wrap md:justify-between md:w-full items-center">
                <p class="text-center font-sans text-sm mb-4 opacity-80">&copy; Sound Financial Strategies Group</p>
                <a class="text-white hover:text-secondary font-body text-sm inline-block mb-4 mx-2" data-open-modal href="#opt-out">Remove me from this list</a>
                <a href="https://iddigital.us/" class="font-body hover-scale transition font-display text-sm text-white no-underline inline-block leading-none flex items-center w-auto mx-auto md:mx-0 hover:text-white mb-4" target="_blank">
                    <span>Made by</span>
                    <img svg-inline src="../images/idd.svg" class="w-5 h-5 stroke-current fill-current mx-1 relative">
                    <span>IDdigital</span>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
import CtaForm from "./site-only/CtaForm.vue";

export default {
    name: 'page-footer',
    props: ['ctaLink', 'formEmbed'],
    components: {
        CtaForm
    }
}
</script>
