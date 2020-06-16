<template>
    <modal id="modal">
        <modal-inner id="schedule-appointment">
            <cta-form></cta-form>
        </modal-inner>
        <modal-inner id="thanks">
            <div class="bg-white p-8 w-full shadow-md-lg mx-auto" style="max-width: 590px;">
                <p class="font-display lg:text-3xl text-base font-bold mb-4 text-center text-primary">Thanks</p>
                <p class="font-body font-normal text-xs lg:text-base">Thanks for contacting us. We'll be in touch soon.</p>
            </div>
        </modal-inner>
        <modal-inner id="opt-out">
            <opt-out-form></opt-out-form>
        </modal-inner>
        <modal-inner id="opted-out">
            <div class="bg-white p-8 w-full shadow-md-lg mx-auto" style="max-width: 590px;">
                <p class="font-display lg:text-3xl text-base font-bold mb-4 text-center text-primary">Okay</p>
                <p class="font-body font-normal text-xs lg:text-base">We'll remove you from our list.</p>
            </div>
        </modal-inner>
    </modal>
</template>

<script>
import CtaForm from "./site-only/CtaForm.vue";
import OptOutForm from "./site-only/OptOutForm.vue";


export default {
    name: 'form-modal',
    components: {
        CtaForm,
        OptOutForm
    }
}
</script>