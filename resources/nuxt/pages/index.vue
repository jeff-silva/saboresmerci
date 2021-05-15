<template><div>
    <a href="" class="btn btn-primary">Recarregar</a>
    <button type="button" class="btn btn-primary">Primary</button>
    <div class="bg-whatsapp">Aaa</div>

    <div class="row no-gutters">
        <div class="col-6">
            <div class="list-group list-group-flush">
                <div class="list-group-item" v-for="p in posts.data">
                    <div class="font-weight-bold">{{ p.post_title }}</div>
                    <div v-html="p.post_content"></div>
                </div>
            </div>
        </div>

        <div class="col-6">
            <pre>{{ $data }}</pre>
        </div>
    </div>
</div></template>

<script>
export default {
    data() {
        return {
            posts: {data:[]},
        };
    },

    methods: {
        getPost() {
            this.$axios.get('/api/app/posts?post_type=produto').then(resp => {
                this.posts = resp.data;
            });
        },
    },

    mounted() {
        this.getPost();
    },
};
</script>