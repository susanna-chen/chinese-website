import React, {useState} from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarWrapper, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle })  => {
    return (
        <>
            <SidebarContainer isOpen={isOpen}>
                <Icon onClick={ isOpen, toggle }>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>{/* cambiare anche SidebarElements.js Sidebarmenu se si aggiungono link */}
                        <SidebarLink to="grammar" onClick={toggle}>Grammar</SidebarLink>
                        <SidebarLink to="lessons" onClick={toggle}>Lessons</SidebarLink>
                        <SidebarLink to="exercises" onClick={toggle}>Exercises</SidebarLink>
                        <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="/support">Support Us</SidebarRoute>
                    </SideBtnWrap>
                    </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
