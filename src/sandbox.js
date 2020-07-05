export default {
    routes: [
        {
            path: "/ExampleCounter",
            component: () => import("./ExampleCounter/sandbox/ExampleCounter.vue"),
        },
        {
            path: "/Reset",
            component: () => import("./Reset/sandbox/Reset.vue"),
        },
        {
            path: "/FeedPreview",
            component: () => import("./FeedPreview/sandbox/FeedPreview.vue"),
        },
    ],
};
