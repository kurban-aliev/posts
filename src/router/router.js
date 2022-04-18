import Main from "@/pages/Main";
import { createRouter, createWebHashHistory } from "vue-router";
import PostPage from "@/pages/PostPage"
import About from "@/pages/About"
import PostIdPage from "@/pages/PostIdPage"
import PostPageVuex from "@/pages/PostPageVuex"
import PostPageCompositionApi from "@/pages/PostPageCompositionApi"




const routes = [
  { path: '/', component: Main },
  { path: '/posts', component: PostPage },
  { path: '/abouts', component: About },
  { path: '/posts/:id', component: PostIdPage },
  { path: '/store', component: PostPageVuex },
  { path: '/composition', component: PostPageCompositionApi },

]

const router = createRouter({
  routes, // сокращённая запись для `routes: routes`
  history: createWebHashHistory()
});

export default router;