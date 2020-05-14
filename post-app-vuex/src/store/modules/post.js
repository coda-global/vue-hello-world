import PostService from '../../services/post-service.js'
export default {
    state: {
        isLoading: false,
        posts: []
    },
    mutations: {
        SET_LOADING_STATUS(state) {
            state.isLoading = !state.isLoading
        },
        SET_POSTS(state, posts) {
            state.posts = posts
        }
    },
    actions: {
        fetchPost(context) {
            context.commit('SET_LOADING_STATUS');
            PostService.getPostData().then(data => {
                context.commit('SET_LOADING_STATUS');
                context.commit('SET_POSTS', data);
            });
        }
    },
    getters: {
        allPosts(state) {
            return state.posts;
        }
    },
}