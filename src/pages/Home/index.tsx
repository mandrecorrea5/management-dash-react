import { SideBar } from "../../components/SideBar"
import { TopBar } from "../../components/TopBar"
import { NavigationContainer } from "./styles"

export const Home = () => {
    return (
        <NavigationContainer>
            <SideBar />
            <TopBar />
        </NavigationContainer>      
    )
}  