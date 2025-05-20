export default async function ProductDetails({params,} : { params : Promise<{productId: string}>}) {

    console.log(await params, "params");
    const productId = (await params).productId
    console.log(productId, "productId");
    return (
        <>
        <h1>Details about product id {productId}</h1>
        </>
    )
}