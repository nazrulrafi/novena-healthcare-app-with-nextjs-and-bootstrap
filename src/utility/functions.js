class NecessaryFunc {
    getMetaValue(metaKey, homePageMeta) {
        if (!Array.isArray(homePageMeta)) return ""; // safe fallback
        return homePageMeta.find(item => item.metaKey === metaKey)?.value || "";
    }

    async getTestimonialMetaData() {
        try {
            const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/dashboard/testimonial`);
            const testimonialPageMeta = await res.json();
            if (!testimonialPageMeta || testimonialPageMeta.message === "fail") {
                return []; // Return empty array if data is not found
            }
            return testimonialPageMeta.data;
        } catch (error) {
            return null;
        }
    }
}

const necessaryFunc = new NecessaryFunc();

export const getMetaValue = necessaryFunc.getMetaValue.bind(necessaryFunc);
export const getTestimonialMetaData = necessaryFunc.getTestimonialMetaData.bind(necessaryFunc);
