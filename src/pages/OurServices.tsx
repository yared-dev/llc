import { useTranslation } from 'react-i18next';
import SecctionTitle from '../components/SectionTitle';
import ServiceItem from '../components/ServiceItem';
import Tittle from '../components/Tittle';
import '../styles/OurServices.css'

interface ServiceStructure {
    title: string;
    description: string;
    more: string;
    less:string;
    list:string[];
    moreText:string;
  }

const OurServices = () => {

    const [t, i18n] = useTranslation("global");
    const title_ = t("OurServices.title");
    const text_ = t("OurServices.sec2.description");
    const toLight_ = t("OurServices.sec2.toLight") as unknown as string[];
    const bg_colorSecondary = "background-color-secondary";
    const colorPrimary = "color-primary";

    const serviceImages = [
        {
          imgSrc: "/img/pages/OurServices/service1.jpg"
        },
        {
          imgSrc: "/img/pages/OurServices/service2.jpg"
        },
        {
           imgSrc: "/img/pages/OurServices/service3.jpg"
        }
    ]

    const serviceItems = t("OurServices.sec3") as unknown as ServiceStructure[];

    return (
        <div id="ourServices" className="flex flex-column">
            <SecctionTitle title={title_} colorTitle={colorPrimary} colorSeparator={bg_colorSecondary}/>
            <div className="sec2 flex color-primary margin-bottom content">
                <Tittle tittle={text_} toLight={toLight_} colorLight='color-secondary' />
            </div>
            <div className="sec3 grid width-100 margin-bottom">
                {serviceItems.map((item, index) => (
                    <ServiceItem
                        title={item.title}
                        descrip={item.description}
                        span_state_0={item.more}
                        span_state_1={item.less}
                        imgSrc={serviceImages[index].imgSrc}
                        backColor={index % 2 == 0 ? "background-color-primary" : "background-white"}
                        textColor={index % 2 == 0 ?'color-white':"color-primary"}
                        spanColor={'color-secondary'}
                        list={item.list}
                        moreText={item.moreText??null}
                    />
                ))}

            </div>
        </div>
    )
}

export default OurServices;