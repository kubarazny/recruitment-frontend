# FeedPreview

Feed Preview

## Dependencies

axios, rss-parser

## Installation

- src/components.js
```js
/* ... */
export { default as FeedPreview } from "./FeedPreview/src/FeedPreview.vue";
/* ... */
```

- src/sandbox.js
```js
export default {
    routes: [
    /* ... */
        {path: '/FeedPreview', component: () => import('./FeedPreview/sandbox/FeedPreview.vue')},
    /* ... */
    ]
}
```
