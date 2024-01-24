export default function SongCard({imgUrl, title, author, id}) {
    return (
        <div className="w-[200px] h-[113px] flex flex-col cursor-pointer">
            <div>
                <img
                  src={imgUrl}
                  alt={`${title} Thumbnail`}
                  className="rounded-2xl"
                />
              </div>
              <div>
                <h1 className="text-[15px] line-clamp-2">
                  {title}
                </h1>
                <p className="text-[14px] text-gray-400 line-clamp-1">
                  {author}
                </p>
              </div>
        </div>
    )
}