import { SideBarContainer, SideBarContent, SideBarHeader } from "./styles"
import { ArrowSquareLeft } from "phosphor-react"
import { Divider, List, ListItem, ListItemText } from "@mui/material"

export const SideBar = () => {
    return (
        <SideBarContainer>
            <SideBarHeader>
                <h1>SideBar</h1>                
            </SideBarHeader>
            
            <SideBarContent>
            <List component="nav" aria-label="mailbox folders">
                <ListItem>
                    <ListItemText primary="Usuários" />
                </ListItem>
                
                <ListItem>
                    <ListItemText primary="Grupos" />
                </ListItem>
                
                <ListItem>
                    <ListItemText primary="Relacionamentos" />
                </ListItem>                
            </List>
            </SideBarContent>
        </SideBarContainer>
    )
}