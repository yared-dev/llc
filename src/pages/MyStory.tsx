import SectionTitle from '../components/SectionTitle';
import StoryPanel from '../components/StoryPanel';
import { useTranslation } from 'react-i18next';
import '../styles/MyStory.css';

interface StorySectionStructure{
    title: string;
    subtitle: string;
    features: string[]
}

const MyStory = () => {
    const [t, i18n] = useTranslation("global");

    const title_ = t("MyStory.title");
    const sections = [
        {
            objSection: t("MyStory.then") as unknown as StorySectionStructure,
            img: "img/pages/MyStory/navy2.jpg"
        },
        {
            objSection: t("MyStory.now") as unknown as StorySectionStructure,
            img: "img/pages/MyStory/now1.jpg"
        }
    ]



    return (
        <div id="myStory" className="flex flex-column">
            <SectionTitle title={title_} colorSeparator="background-color-secondary" colorTitle='color-primary'/>

            <StoryPanel
                title={sections[0].objSection.title}
                descrip={sections[0].objSection.subtitle}
                list={sections[0].objSection.features}
                imgSrc={sections[0].img} />

            <StoryPanel
                  title={sections[1].objSection.title}
                  descrip={sections[1].objSection.subtitle}
                  list={sections[1].objSection.features}
                  imgSrc={sections[1].img}
                imgLeft={false}/>

        </div>
    )

}

export default MyStory;