export default async function ProductDetails({params,} : { params : Promise<{productId: string, reviewId: string}>}) {

    console.log(await params, "params");
    const { productId, reviewId } = await params
    console.log(productId,reviewId, "productId & reviewId");
    return (
        <>
        <h1>this is the review of reviewId: {reviewId} for the product of {productId}</h1>
        </>
    )
}