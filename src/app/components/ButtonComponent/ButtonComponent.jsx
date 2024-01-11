
export default function ButtonComponent({to, text}) {
    return (
        <button className="text-[1.875rem] text-font-color border-solid border-2 border-font-color rounded-3xl hover:shadow-lg px-8 py-1 m-2" to={to}>
            {text}
        </button>
    )
}