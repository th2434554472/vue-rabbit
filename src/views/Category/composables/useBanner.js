//封装banner轮播图相关的业务代码
import { getBannerAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'

export function useBanner(){
    //获取banner
    const bannerList = ref([])

    const getBanner = async () => {
        const res = await getBannerAPI({
        distributionSite: '2'
        })
        console.log(res);
        bannerList.value = res.result
    }

    onMounted(() => getBanner())

    return {
        bannerList
    }
}