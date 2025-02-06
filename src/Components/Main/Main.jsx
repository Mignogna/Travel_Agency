import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Data = [

    {
        id: 1,
        imgSrc: img1,
        destTitle: 'France',
        visitors: '100 million visitors',
        fees: 700,
        description: "France, with its rich history, vibrant culture, and breathtaking landscapes, is one of the most popular tourist destination in the world. From the romance of Paris to the charming villages of Provence, and the majestic mountains of the Alps, France offers a unique experience for all travelers."
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Spain',
        visitors: '85.1 million visitors',
        fees: 600,
        description: 'The history of Spain is marked by diverse civilizations, such as the Romans, Visigoths, Arabs, and Christians. This rich cultural heritage is reflected in its architecture, art, and traditions. Cities like Madrid, Barcelona, Granada, and Seville are true historical treasures, with monuments ranging from medieval monasteries to modernist works.',
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'United States',
        visitors: '66.5 million visitors',
        fees: 700,
        description: 'The United States, with its vast territory and rich cultural diversity, is one of the most popular tourist destinations in the world. From the bustling city of New York to the breathtaking landscapes of the Grand Canyon, and the pristine beaches of Florida to the theme parks of California, the United States offers an endless array of experiences for all tastes.',
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'China',
        visitors: '65.7 million visitors',
        fees: 800,
        description: 'Chinese geography is extremely diverse, offering landscapes for all tastes. The mountains of Tibet, the idyllic scenery of Guilin, the cosmopolitan cities like Shanghai and Beijing, and the paradisiacal beaches of Hainan are just a few of the many options available.',
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Italy',
        visitors: '64.5 million visitors',
        fees: 1100,
        description: 'Italy is considered the cradle of Western civilization, with a rich past marked by the Roman Empire, the Renaissance, and the Byzantine Empire. Cities like Rome, Florence, and Venice are home to historical monuments and works of art that have shaped the history of humanity.'
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Turkey',
        visitors: "51.2 million visitors",
        fees: 840,
        description: "Turkey, a country spanning two continents, Europe and Asia, is a tourist destination that captivates with its rich history, vibrant culture, and diverse landscapes. A trip to Turkey is like a journey through time, where ancient traditions blend with modernity, offering a unique and unforgettable experience.",
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Mexico',
        visitors: '45 million visitors',
        fees: 790,
        description: 'Mexico, a country with a rich history and culture, offers tourists a unique and unforgettable experience. With a combination of Mayan ruins, pristine beaches, vibrant cities, and delicious cuisine, Mexico has everything to enchant any traveler.'

    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Thailand',
        visitors: '39.8 million visitors',
        fees: 900,
        description: 'Thailand, with its rich culture, stunning landscapes, and warm hospitality, is a tourist destination that captivates travelers from all over the world. A trip to Thailand is an immersion in a universe of contrasts, where ancient Buddhist temples coexist with modern cities and pristine beaches.'
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'German',
        visitors: "39.6 million visitors",
        fees: 500,
        description: "Germany has a rich and complex history, marked by significant events that shaped the world. Cities like Berlin, Munich, and Cologne bear the marks of the past, such as the Berlin Wall, Neuschwanstein Castle, and Cologne Cathedral."
    }
]
const Card = ({ id, imgSrc, destTitle, fees, visitors, description }) => {
    const [numOfPeople, setNumOfPeople] = useState(1)

    const incrementNumPeople = () => {
        setNumOfPeople(numOfPeople + 1)
    }
    const decrementNumPeople = () => {
        if (numOfPeople > 1) {
            setNumOfPeople(numOfPeople - 1)
        }
    }
    const totalFees = fees * numOfPeople
    return (
        <div key={id} data-aos="fade-up" className="singleDestination">
            <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
            </div>
            <div className="cardInfo">
                <h4 className="destTitle"><HiOutlineLocationMarker className='icon' />{destTitle}</h4>
                <span className="continent flex">
                    <span className="name">{visitors}/year</span>
                </span>
                <div className="desc">
                    <p>{description}</p>
                </div>
                <button className="btn flex">DETAILS<HiOutlineClipboardCheck className="icon" /></button>
                <div className="fees flex">
                    <div className="people">
                        <span>Price per person<div className='btnPeople'>
                            <button onClick={decrementNumPeople}>-</button>
                            {numOfPeople}
                            <button onClick={incrementNumPeople}>+</button></div>
                        </span>
                    </div>
                    <div className="price">
                        <h5>${totalFees}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    destTitle: PropTypes.string.isRequired,
    fees: PropTypes.number.isRequired,
    visitors: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

const Main = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <section className="main container section" id='main'>
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>
            <div className="secContent grid">
                {Data.map(({ id, imgSrc, destTitle, fees, visitors, description }) => (
                    <Card
                        Key={id}
                        id={id}
                        imgSrc={imgSrc}
                        destTitle={destTitle}
                        fees={fees}
                        visitors={visitors}
                        description={description}
                    />
                ))}
            </div>
        </section>
    )
}

export default Main