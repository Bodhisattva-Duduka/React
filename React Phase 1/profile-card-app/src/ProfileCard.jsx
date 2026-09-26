
function TechStack({techstack, textcolor, bgcolor}){
    return(
        <div className="flex flex-wrap justify-center gap-2 mt-auto pt-3">
            {techstack.map((item, index)=>(
                <span 
                    key={index} 
                    className={`${textcolor} ${bgcolor} text-xs sm:text-sm py-1 px-2.5 font-medium rounded-full`}
                >
                    {item}
                </span>
            ))}
        </div>
    )
}

function ProfileCard({picture, name, role, description, techstack, color}){
    return(
        <div className="w-full max-w-sm bg-white rounded-3xl p-6 flex flex-col items-center text-center shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-4 shadow-sm border-4 border-gray-50 flex-shrink-0">
                <img 
                    className="w-full h-full object-cover" 
                    src={picture}
                    alt={name}
                    loading="lazy"
                />
            </div>
            <h4 className="font-bold text-xl sm:text-2xl text-gray-900">{name}</h4>
            <h5 className={`${color.textcolor} font-semibold text-sm sm:text-base mt-1`}>{role}</h5>
            <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-4 px-1 flex-grow">
                {description}
            </p>
            <TechStack
                techstack={techstack}
                textcolor={color.textcolor}
                bgcolor={color.bgcolor}
            />
        </div>  
    )
}
export default ProfileCard