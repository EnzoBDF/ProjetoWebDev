interface TitleProps{
    text: string
    icon: JSX.Element
}



export default function Title({text, icon}: TitleProps){
    return(
        <div className="flex flex-row items-center justify-center text-left">
        {icon}
        <h1 className="text-[6rem]">{text}</h1>
        </div>
    )
}