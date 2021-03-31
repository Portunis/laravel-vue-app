<template>
    <div>
        <spin v-if="loading"></spin>
        <div style="display:flex; flex-wrap: wrap;" v-else>
            <post
                v-for="post in posts"
                :id="post.id"
                :title="post.title"
                :body="post.body"
                :date="post.created_at"
            />
        </div>

    </div>


</template>

<script>
    import Spin from "../components/Spin";
    import axios from 'axios'
    import Post from "../components/Blog/Post";

    export default {
        name: "Blog",
        components: {
            Spin,
            Post
        },
        data: () => ({
            loading: true,
            posts: []
        }),
        mounted() {
            this.loadPosts()
        },
        methods:{

            loadPosts(){
                axios.get('/api/posts')
                .then(res =>{
                    this.posts = res.data;
                    setTimeout(()=>{
                        this.loading = false;
                    },500);

                })
            }
        }
    }
</script>

<style scoped>

</style>
