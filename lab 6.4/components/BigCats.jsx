import './BigCats.css'
import { useState } from 'react';

const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Cheetah_at_Working_with_Wildlife.jpg', },
    { id: 1, name: 'Cougar', latinName: 'Puma concolor', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg', },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg', },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/African_leopard_male_%28cropped%29.jpg', },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg', },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Irbis4.JPG', },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg',},
];

function SingleCat({name, latinName, image}) {
    return (
        <li> 
            <img src={image} width="400" alt={name} />
            <h2>{name}</h2>
            <em>({latinName})</em>
        </li>
    )
}

function BigCats() { 

    const [currentCats, setCurrentCats] = useState(cats);

    const handleSortCats = () => {
        let newCats = [...currentCats];
        newCats.sort((cat1, cat2) => cat1name < cat2name ? -1 : 1 );
        setCurrentCats(newCats);
    }

    const handleReverseCats = () => {
        let newCats = [...currentCats];
        newCats.reverse();
        setCurrentCats(newCats);
    }

    const handleFilterCats = () => {
        let newCats = currentCats.filter(cat => cat.latinName.startsWith('Panthera'));
        setCurrentCats(newCats);
    }

    const handleResetCats = () => {
        setCurrentCats(newCats);
    }


    const catList = cats.map(cat => (
        <SingleCat name={cat.name} latinName={cat.latinName} key={cat.id} image={cat.image}/>
        // <li key={cat.id}>
        //     <h3>{cat.name}</h3>
        //     <em>({cat.latinName})</em>
        // </li>
    ))

    return (
        <div className="BigCats">
            <h2>Big Cats</h2>
            <ul>{catList}</ul>
        <div>
            <button onClick={handleSortCats}>Sort Alphabetically</button>
            <button onClick={handleReverseCats}>Reverse List</button>
        </div>
        <div>
            <button onClick={handleFilterCats}>Filter Pantheras</button>
            <button onClick={handleResetCats}>Reset List</button>
        </div>
        </div>

    )
}

export default BigCats