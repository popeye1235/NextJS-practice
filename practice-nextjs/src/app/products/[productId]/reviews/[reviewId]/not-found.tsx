"use client";
import { usePathname } from "next/navigation";
export default function NotFound() {

    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewid = pathname.split("/")[4]
    return (
        <>
        <h1>Page not found! for productId {productId} and for reviewId {reviewid}</h1>
        </>
    )
}


// we can't pass the props in not-found file
// so we ned userpathname