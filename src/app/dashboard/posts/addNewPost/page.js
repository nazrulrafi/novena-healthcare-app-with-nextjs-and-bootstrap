"use client";

import dynamic from "next/dynamic";

const AddNewPostForm = dynamic(() => import('@/components/dashboard/posts/addNewPostForm.jsx'), { ssr: false });

export default function Page() {
    return <AddNewPostForm />;
}
