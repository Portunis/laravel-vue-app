import vueRouter from 'vue-router';
import Vue from 'vue';
import Index from "./views/Index";
import Blog from "./views/Blog";
import Post from "./views/Post";
import CreatePost from "./views/CreatePost";
Vue.use(vueRouter);

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/post/:id',
        component: Post
    },
    {
        path: '/create',
        component: CreatePost
    }
];

export default new vueRouter({
    mode: 'history',
    routes
});
