import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import Home from './src/screens/Home'
import India from './src/screens/India'
import Russia from './src/screens/Russia'
const Drawer = createDrawerNavigator({
    World: Home,
    India: India,
    Russia: Russia  
});

// const HomeSwitchNavigator = createSwitchNavigator({
//     Home: Home
// })

export default createAppContainer(Drawer);