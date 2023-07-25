import { React } from 'react';
import Card from './Card';

const App = () => {
    return (
        <div>
            <h1>Music I like</h1>
            <Card
                albumTitle=""
                albumDescription="Rocket to Russia is the third studio album by the American punk rock band Ramones, and was released on November 4, 1977, through Sire Records. Its origins date back to the summer of 1977, when 'Sheena Is a Punk Rocker' was released as a single. That summer was known as the peak of the punk rock genre since many punk bands were offered recording contracts. The album's recording began in August 1977, and the band had a considerably larger budget with Sire allowing them between $25,000 and $30,000; much of this money went toward the album's production rather than recording."
                imageURL="https://upload.wikimedia.org/wikipedia/en/5/50/Ramones_-_Rocket_to_Russia_cover.jpg"
                buttonText="OK"/>
            <Card
                albumTitle=""
                albumDescription="Rocket to Russia is the third studio album by the American punk rock band Ramones, and was released on November 4, 1977, through Sire Records. Its origins date back to the summer of 1977, when 'Sheena Is a Punk Rocker' was released as a single. That summer was known as the peak of the punk rock genre since many punk bands were offered recording contracts. The album's recording began in August 1977, and the band had a considerably larger budget with Sire allowing them between $25,000 and $30,000; much of this money went toward the album's production rather than recording."
                imageURL="https://upload.wikimedia.org/wikipedia/en/5/50/Ramones_-_Rocket_to_Russia_cover.jpg"
                buttonText="OK"/>
            <Card
                albumTitle=""
                albumDescription="Rocket to Russia is the third studio album by the American punk rock band Ramones, and was released on November 4, 1977, through Sire Records. Its origins date back to the summer of 1977, when 'Sheena Is a Punk Rocker' was released as a single. That summer was known as the peak of the punk rock genre since many punk bands were offered recording contracts. The album's recording began in August 1977, and the band had a considerably larger budget with Sire allowing them between $25,000 and $30,000; much of this money went toward the album's production rather than recording."
                imageURL="https://upload.wikimedia.org/wikipedia/en/5/50/Ramones_-_Rocket_to_Russia_cover.jpg"
                buttonText="OK"/>
        </div>
    )
}

export default App;