import DoubleRed from '../../../assets/doubleRed.png';
import GreenDouble from '../../../assets/doubleGreen.png';
import BlueSaber from '../../../assets/blueSaber1.png';
import RedSaber from '../../../assets/redSaber.png';
import GreenSaber from '../../../assets/greenSaber.png';
import PurpleSaber from '../../../assets/purpleSaber.png';

const initialState = [
    {id: 1, name: 'Double Red LightSaber', price: 599, image: DoubleRed},
    {id: 2, name: 'Double Green LightSaber', price: 599, image: GreenDouble},
    {id: 3, name: 'Blue LightSaber', price: 399, image: BlueSaber},
    {id: 4, name: 'Red LightSaber', price: 399, image: RedSaber},
    {id: 5, name: 'Green LightSaber', price: 399, image: GreenSaber},
    {id: 6, name: 'Purple LightSaber', price: 399, image: PurpleSaber}
]

export const productReducer = (state = initialState, action) => {
    return state;
}