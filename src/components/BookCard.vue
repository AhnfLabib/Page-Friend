<template>
    <div class="bookCard">

        <slot name="bookImg"></slot>
        <h2>{{ title }}</h2>

        <div>
            <button class="button" @click="$emit('selected', title)">
                Request Swap
            </button>
        </div>

    </div>
</template>

<script>
export default {
    props: ['title'],
    emits: ['selected']
}
</script>




