
function TechStack({techstack, textcolor, bgcolor}){
    return(
        <>
            <div className="flex gap-2.5">
                {techstack.map((item, index)=>(
                    <h5 key={index} className={`${textcolor} ${bgcolor} text-sm py-1 px-2 font-medium rounded-4xl`} >{item}</h5>
                ))}
            </div>
        </>
    )
}


function ProfileCard({picture, name, role, description, techstack, color}){
    return(
        <div className="bg-white rounded-4xl w-90 h-130 flex gap-4 flex-col items-center shadow">
            <img className="w-52 rounded-full mt-3" src={picture}/>
            <h4 className="font-bold text-2xl">{name}</h4>
            <h5 className={`${color.textcolor} font-semibold`}>{role}</h5>
            <p className="w-40 text-center">{description}</p>
            <TechStack
                techstack={techstack}
                textcolor={color.textcolor}
                bgcolor={color.bgcolor}
            />
        </div>  
    )
}
export default ProfileCard