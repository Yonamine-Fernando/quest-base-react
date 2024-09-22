import TitleQuest from "../QuestTitle/QuestTitle"
import UpperCaseText from "../UpperCaseText"
import zenetsu from "/src/img/zenetsu.jpg"

const MainContent = () => {
    return (
        <>
            <div className="main">
                <TitleQuest />
                <UpperCaseText text="Se você só sabe fazer um coisa, seja mestre nela." />
                <img src={zenetsu} className="avatar-zenetsu" alt="Img Zenetsu" />
            </div>
        </>
    )
}

export default MainContent
