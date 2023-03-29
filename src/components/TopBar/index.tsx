import { ArrowSquareLeft, Bell, Gear, List, MagnifyingGlass, TextOutdent, User } from "phosphor-react"
import { ResizeButton, Search, SearchIconWrapper, StyledInputBase, TopBarContainer, TopBarForm, TopBarFormContainer, GroupIcons } from "./styles"

export const TopBar = () => {

    const handleResizeSideBar = () => {
        console.log('vai encurtar o sidebar')
    }

    return (
        <TopBarContainer>  
            <TopBarFormContainer>
                <ResizeButton onClick={handleResizeSideBar}>
                    <TextOutdent size={24} />          
                </ResizeButton>
                <TopBarForm>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass size={20} />
                        </SearchIconWrapper>

                        <StyledInputBase 
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </TopBarForm>
            </TopBarFormContainer>
            <GroupIcons>
                <Gear size={24} />
                <Bell size={24} />
                <User size={24} />
            </GroupIcons>
        </TopBarContainer>
    )
}