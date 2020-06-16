<template>
    <div :id="id" class="top-0 fixed z-50 hidden overflow-y-auto bg-secondary-transparent" style="width: 100vw; height: 100vh;">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'modal',
    props: ['id']
}
</script>

