<template>
    <div class="bg-white p-8 w-full md:mt-0 shadow-md md:mb-16 mx-auto" style="max-width: 590px;">
        <p class="font-display lg:text-3xl text-base font-bold mb-4 text-center text-primary">Request an Appointment</p>
        <form method="post" action="https://getform.io/f/e2ba84af-45c5-4c20-9f21-c3bc31dc50a3" accept-charset="utf-8" id="scheduleAppointment-form" class="lg:flex lg:flex-wrap">
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
            <div class="field required w-full">
                <label for="phone" class="font-body font-semibold text-xs text-primary block mb-1">Phone</label>  
                <input type="tel" autocomplete="tel" name="phone" class="w-full border border-grey-300 text-xs py-1 px-2 mb-4 text-grey-600 rounded-sm transition focus:border-secondary" required aria-required="true" placeholder="(555)541-2345">
            </div>
            <div class="field required w-full">
                <label for="email" class="font-body font-semibold text-xs text-primary block mb-1">Email Address</label>
                <input type="email" autocomplete="email" name="email" class="w-full border border-grey-300 text-xs py-1 px-2 mb-4 text-grey-600 rounded-sm transition focus:border-secondary" required aria-required="true" placeholder="example@example.com">
            </div>
            <div id="g-recaptcha-cta" class="g-recaptcha mb-4" data-sitekey="6LfDR60UAAAAAEMw6m1zIKvEqGGDNOsXjbkVsavu"></div>
            <div class="w-full">
                <button type="submit" class="button button-form button-narrow-mobile block mx-auto">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'cta-form'
}
</script>
