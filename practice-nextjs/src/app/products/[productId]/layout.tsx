export default function ProductDetailsLayout({
    children,
} : { children: React.ReactNode;}) {
    return (
     <>
    {children}
    <h2 className="text-red-900">Featured Products</h2>
    </>
    )
}