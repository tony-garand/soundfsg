<template>
    <div class="bg-white p-8 w-full md:mt-0 shadow-md md:mb-16 mx-auto" style="max-width: 590px;">
        <p class="font-display lg:text-3xl text-base font-bold mb-4 text-center text-primary">Opt Out</p>
        <p class="font-body text-sm lg:text-base mb-4 text-center text-primary leading-snug">Remove me from all communication related to Business Valuation from Sound Financial Strategies Group.</p>
        <form method="post" action="https://getform.io/f/f5ffdeb1-4ca2-403a-b8a1-63919e7a5534" accept-charset="utf-8" id="opt-out-form" class="lg:flex lg:flex-wrap">
            <div class="field required w-full lg:w-1/2 lg:pr-4">
                <label for="firstName" class="font-body font-semibold text-xs text-primary block mb-1">First Name</label>
                <input type="text" name="firstName" class="w-full border border-grey-300 text-xs py-1 px-2 mb-4 text-grey-600 rounded-sm transition focus:border-secondary" required aria-required="true" placeholder="John">
            </div>
            <div class="field required w-full lg:w-1/2">
                <label for="lastName" class="font-body font-semibold text-xs text-primary block mb-1">Last Name</label>
                <input type="text" name="lastName" class="w-full border border-grey-300 text-xs py-1 px-2 mb-4 text-grey-600 rounded-sm transition focus:border-secondary" required aria-required="true" placeholder="Doe">
            </div>
            <div class="field required w-full">
                <label for="company" class="font-body font-semibold text-xs text-primary block mb-1">Company Name</label>
                <input type="text" name="company" class="w-full border border-grey-300 text-xs py-1 px-2 mb-4 text-grey-600 rounded-sm transition focus:border-secondary" required aria-required="true" placeholder="Acme Inc.">
            </div>
            <div class="field required w-full flex items-start mb-4">
                <input type="checkbox" name="disclaimer" value="disclaimer" required aria-required="true" class="mt-1">
                <label for="disclaimer" class="font-body font-normal text-sm text-primary block pl-2 leading-snug">I understand that this form is only opting me out of communication related to Business Valuation services from Sound Financial Strategies Group.</label>
            </div>
            <div id="g-recaptcha-opt-out" class="g-recaptcha mb-4" data-sitekey="6LfDR60UAAAAAEMw6m1zIKvEqGGDNOsXjbkVsavu"></div>
            <div class="w-full">
                <button type="submit" class="button button-form button-narrow-mobile block mx-auto">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'opt-out-form'
}
</script>
