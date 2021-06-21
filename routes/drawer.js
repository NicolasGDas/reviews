import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import aboutStack from "./aboutStack";
import InicioStack from "./inicioStack";

const RootDrawerNavigator = createDrawerNavigator({
    Inicio:{
        screen: InicioStack
    },
    Reviews:{
        screen: HomeStack
    },
    User:{
        screen: aboutStack
    },
    
})

export default createAppContainer(RootDrawerNavigator)