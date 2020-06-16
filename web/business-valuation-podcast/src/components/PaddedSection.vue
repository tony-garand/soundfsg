<template>
    <section :id="this.id" :class="this.classes" :style="this.styles">
        <div class="container max-w-5xl flex mx-auto pt-10 pb-10 flex-wrap">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    name: 'padded-section',
    props: ['id', 'styles', 'classes']
}
</script>