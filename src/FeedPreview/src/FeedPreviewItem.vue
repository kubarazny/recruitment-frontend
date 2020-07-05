<template>
    <div class="feed-preview__item">
        <a
            class="feed-preview__title"
            :href="link"
        >
            {{ title }}
        </a>
        <div v-html="content"/>
    </div>
</template>

<script>
export default {
    name: 'FeedPreviewItem',
    props: {
        link: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        content: {
            type: String,
            default: '',
        }
    }
}
</script>
