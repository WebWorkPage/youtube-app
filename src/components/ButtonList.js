import Button from "./Button";

const ButtonList = () => {

    const list = ["All", "Music", "Gaming", "Live", "News", "Cooking", "Movies", "Comedy", "Art", "Podcasts", "Technology", "Jazz", "Courses"];

    return(
        <div className="flex">
            {
                list.map((li,index) => {
                  return (
                   <Button key={index} name={li}/>
                  ) 
                })
            }
        </div>
    )
}

export default ButtonList;