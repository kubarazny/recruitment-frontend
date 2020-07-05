<template>
    <div class="container">
        <feed-preview url="https://www.gamespot.com/feeds/mashup">
            <template #loader>
                Loading...
            </template>
        </feed-preview>
    </div>
</template>
<script>
import FeedPreview from "./../src/FeedPreview";

export default {
    name: "FeedPreviewSandbox",
    components: {
        FeedPreview
    },
};
</script>

<style lang="scss">
    @import '.';
</style>
