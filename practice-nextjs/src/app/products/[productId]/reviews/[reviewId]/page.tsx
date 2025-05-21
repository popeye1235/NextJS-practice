import { notFound } from "next/navigation";
export default async function ProductReview({params,} : { params : Promise<{productId: string, reviewId: string}>}) {

    console.log(await params, "params");
    const { productId, reviewId } = await params
    console.log(productId,reviewId, "productId & reviewId");

    if(parseInt(reviewId) > 1000) {
        notFound();
    }
    return (
        <>
        <h1>this is the review of reviewId: {reviewId} for the product of {productId}</h1>
        </>
    )
}