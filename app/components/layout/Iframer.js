export default function Iframer({ url, embed, title}) {
    return (
        <>
            <iframe
                loading="lazy"
                width="100%"
                height="100%"
                src={`${url}${embed}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg mb-4"
            ></iframe>
            <p className="font-semibold">{title}</p>
        </>
    )
}