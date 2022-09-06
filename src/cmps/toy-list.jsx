import { ToysPreview } from "./toys-preview"

export const ToysList = ({ toys ,onRemoveToy}) => {

    return <section className="toy-list">
        {toys.map(toy => {
            return <ToysPreview
                key={toy._id}
                onRemoveToy={onRemoveToy}
                toy={toy}
            />
        })}

    </section>
}