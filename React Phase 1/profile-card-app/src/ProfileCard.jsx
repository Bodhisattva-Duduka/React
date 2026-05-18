
function TechStack({techstack, textcolor, bgcolor}){
    return(
        <>
            <div>
                {techstack.map((item, index)=>{
                    <h5 key={index} className={`${textcolor} ${bgcolor} p-3 m-3`} >{item}</h5>
                })}
            </div>
        </>
    )
}


function ProfileCard({picture, name, role, description, techstack, color}){
    return(
        <div>
            <img className="w-52 " src={picture}/>

            <h4>{name}</h4>
            <h5>{role}</h5>
            <p>{description}</p>
            <TechStack
                techstack={techstack} 
                textcolor={color.textcolor}
                bgcolor={color.bgcolor}
            />
        </div>
    )
}
export default ProfileCard