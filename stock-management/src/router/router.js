import { createRouter, createWebHistory } from 'vue-router'

import ProductDetail from '../components/ProductDetail.vue'
import StockDatatable from '../components/StockDatatable.vue'
import Sidebar from '../components/Sidebar.vue'

const routes = [
    {
        path: '/', components: {
            default: StockDatatable,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/productDetail', components: {
            default: ProductDetail,
            LeftSideBar: Sidebar
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
