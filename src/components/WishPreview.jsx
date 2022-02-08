export function WishPreview({ wish }) {
    return( 
    <section className="wish-preview flex space-between align-center">
        <div className="side-color"></div>
        <span>{wish.title}</span>
        <button>X</button>
    </section>)
}