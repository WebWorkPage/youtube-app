const Comments = ({info}) => {

    const{authorDisplayName, authorProfileImageUrl, textDisplay} = info?.snippet?.topLevelComment?.snippet || info?.snippet;

    return (
      <div className="mt-2 bg-gray-100 shadow-sm rounded-lg p-2">
        <div className="flex">
            <img className="h-8 rounded-full" alt="user" src={authorProfileImageUrl} />
            <div className="px-3">
                <p className="font-bold">{authorDisplayName}</p>
                <p>{textDisplay}</p>
            </div>
        </div>
        <div className="pl-3 border-l border-l-black ml-5">
            {  //Reply
                info?.replies?.comments && info?.replies?.comments.map(cmnt => <Comments key={cmnt.id} info={cmnt} /> )
            }
        </div>
      </div>
    );
}

export default Comments;