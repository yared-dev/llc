import SectionTitle from '../components/SectionTitle';
import StoryPanel from '../components/StoryPanel';
import '../styles/MyStory.css';

const MyStory = () => {

    const title_ = "My Story";
    const sections = [
        {
            title: "Then (2013-2021)<br>US NAVY Reserve",
            text: "Motivación e Inspiración para lograr las metas",
            list: [
                "Servicio en Actividades de oficina, de campo y fisicas.",
                "Siempre listos para defender la Patria con honor y coraje."
            ],
            img: "img/pages/MyStory/navy2.jpg"
        },
        {
            title: "Now (2023 until today)",
            text: "Woman Veteran Own Bussiness Ready To serve",
            list: [
                "La meta es seguir inspirando y motivando con un excelente servicio.",
                "Acondicionamiento y mejora de áreas específicas para una mejor labor.",
                "Método eficiente de Alta Satisfacción al cliente"
            ],
            img: "img/pages/MyStory/now1.jpg"
        }
    ]



    return (
        <div id="myStory" className="flex flex-column">
            <SectionTitle title={title_} colorSeparator="background-color-secondary" colorTitle='color-primary'/>

            <StoryPanel
                title='Then (2013-2021)<br>US NAVY Reserve'
                descrip='Motivación e Inspiración para lograr las metas.'
                list={[
                    "Servicio en Actividades de oficina, de campo y fisicas.",
                    "Siempre listos para defender la Patria con honor y coraje."
                ]}
                imgSrc='img/pages/MyStory/navy2.jpg' />

            <StoryPanel
                title='Now (2023 until today)'
                descrip='Woman Veteran Own Bussiness Ready To serve.'
                list={[
                    "La meta es seguir inspirando y motivando con un excelente servicio.",
                    
                    "Método eficiente de Alta Satisfacción al cliente.",
                    "Acondicionamiento y mejora de áreas específicas para una mejor labor."
                ]}
                imgLeft={false}
                imgSrc='img/pages/MyStory/now1.jpg' />

        </div>
    )

}

export default MyStory;