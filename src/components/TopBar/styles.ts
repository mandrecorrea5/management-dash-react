import styled, {css} from "styled-components";
import { alpha, InputBase } from "@mui/material";

export const TopBarContainer = styled.header`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.WHITE};
    padding: 0.75rem 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_ULTRA_LIGHT
};

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TopBarFormContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ResizeButton = styled.div`
    background: ${({theme}) => theme.COLORS.GRAY};    
    border-radius: 3px;

    &:hover {
        background: ${({theme}) => theme.COLORS.GRAY_LIGHT};    
        transition: background-color 0.2s;
    }

    padding: 6px;
`;

export const TopBarForm = styled.form`
    margin-left: 0.5rem;
`;

export const Search = styled.div`
    position: relative;
    border-radius: 6px;
    

    ${({theme}) => css`
        border: 1px solid ${theme.COLORS.GRAY_ULTRA_LIGHT};
        background-color: alpha(${theme.COLORS.WHITE}, 0.15px);

        &:hover{
            background-color: alpha(${theme.COLORS.WHITE}, 0.25px);
        }
    `}

    margin-left: 0;
    width: 100%;

    display: flex;
    align-items: center;    
`;

export const SearchIconWrapper = styled.div`
    padding: 3px 10px;
    height: 100%;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledInputBase = styled(InputBase)`
    width: 100%;
    height: 100%;
    
    color: inherit;
    padding: 4px 32px;    

    border-radius: 6px;

    display: flex;
    align-items: center;

    input {
        padding-top: 8px;
        width: 100%;
    }
`;

export const GroupIcons = styled.div`
    width: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;