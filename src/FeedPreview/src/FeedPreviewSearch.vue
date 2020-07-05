<template>
    <div class="feed-preview__search">
        <label
            class="feed-preview__label"
            for="search"
        >
            Search:
        </label>
        <input
            id="search"
            v-model="search"
            class="feed-preview__input"
            type="text"
        >
    </div>
</template>

<script>
export default {
    name: 'FeedPreviewSearch',
    props: {
        value: {
            type: String,
            default: '',
        }
    },
    computed: {
        search: {
            get() {
                return this.value;
            },
            set(updated) {
                this.$emit('input', updated);
            }
        }
    }
}
</script>
