<template>
    <div class="feed-preview">
        <feed-preview-loader v-if="isLoading">
            <template #loader>
                Loading...
            </template>
        </feed-preview-loader>
        <button
            v-if="isError && !isLoading"
            class="feed-preview__btn"
            @click="getFeed"
        >
            Something went wrong... Click to try again
        </button>
        <feed-preview-search
            v-model="search"
            v-if="!isLoading && !isError"
        />
        <feed-preview-item
            v-for="{ guid, link, title, content } of filteredItems"
            :key="guid"
            v-bind="{ link, title, content }"
        />
    </div>
</template>

<script>
import axios from 'axios';
import RSSParser from 'rss-parser';
import FeedPreviewLoader from "./FeedPreviewLoader";
import FeedPreviewSearch from "./FeedPreviewSearch";
import FeedPreviewItem from "./FeedPreviewItem";

const URL_PATH_REGEX = /^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/i;

export default {
    name: 'FeedPreview',
    components: {
        FeedPreviewLoader,
        FeedPreviewSearch,
        FeedPreviewItem,
    },
    props: {
        url: {
            type: String,
            required: true,
            validator: value => URL_PATH_REGEX.test(value),
        },
    },
    data() {
        return {
            isLoading: true,
            feed: {},
            isError: false,
            search: '',
        };
    },
    computed: {
        filteredItems() {
            return this.feed.items ? this.feed.items.filter((item) => item.title.toLowerCase().includes(this.search.toLowerCase())) : [];
        },
    },
    mounted() {
        this.getFeed();
    },
    methods: {
        getFeed() {
            this.isLoading = true;
            axios({
                url: this.url,
                config: {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Access-Control-Allow-Origin': true,
                    },
                },
            })
                .then((response) => {
                    this.feed = response.data;
                    this.isLoading = false;
                    this.isError = false;
                    this.setFeed();
                })
                .catch(() => {
                    this.isError = true;
                    this.isLoading = false;
                });
        },
        setFeed() {
            const parser = new RSSParser();

            parser.parseString(this.feed, (err, parsed) => this.feed = parsed);
        },
    },
};
</script>

<style lang="scss">
    @import '.';
</style>
