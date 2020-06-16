<template>
    <div :id="id" class="modal-inner relative mx-auto md:mb-16 hidden w-full md:mt-16" style="max-width:590px;">
        <slot></slot>
        <div class="close-modal">
            <div>&times;</div>
            <!-- <div>Close</div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal-inner',
    props: ['id']
}
</script>