import styled from "styled-components";

export const SideBarContainer = styled.aside`
    margin-top: 0;
    min-width: 240px;
    min-height: 100vh;    
    padding: 0.75rem 1.75rem;
    background: ${({ theme }) => theme.COLORS.WHITE};    
    border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_ULTRA_LIGHT}
`;

export const SideBarHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 2rem;
`;

export const SideBarContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;