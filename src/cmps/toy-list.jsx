import { ToysPreview } from "./toys-preview"

export const ToysList = ({ toys }) => {

    return <section className="toy-list">
        {toys.map(toy => {
            return <ToysPreview
                key={toy._id}
                toy={toy}
            />
        })}

    </section>
}