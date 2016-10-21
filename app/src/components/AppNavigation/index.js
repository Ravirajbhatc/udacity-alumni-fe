import React, { PropTypes } from 'react';
import { MobileNav, LogoImage, Navbar } from 'components';
import Header from 'grommet-udacity/components/Header';
import Title from 'grommet-udacity/components/Title';
import Anchor from 'grommet-udacity/components/Anchor';
import MenuIcon from 'grommet-udacity/components/icons/base/Menu';


const AppNavigation = ({
  isMobile,
  children,
  user,
  handleSearch,
  navIsActive,
  navLinks,
  onToggleNav,
}) => (
  <div>
    {!isMobile &&
      <Navbar
        user={user}
        onSearch={handleSearch}
      />
    }
    {!isMobile && children}
    {isMobile &&
      <MobileNav
        user={user}
        navActive={navIsActive}
        onToggleNav={onToggleNav}
        navLinks={navLinks}
      >
        <Header
          direction="row"
          justify="between"
          large
          pad={{ horizontal: 'medium', between: 'small' }}
        >
          {!navIsActive &&
            <Title a11yTitle="Go Home">
              <Anchor href="/">
                <LogoImage />
              </Anchor>
            </Title>
          }
          <Title onClick={onToggleNav} a11yTitle="Open Menu Right">
            <MenuIcon
              colorIndex="brand"
              size="medium"
              type="control"
            />
          </Title>
        </Header>
        {children}
      </MobileNav>
    }
  </div>
);

AppNavigation.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  user: PropTypes.object.isRequired,
  handleSearch: PropTypes.func.isRequired,
  navIsActive: PropTypes.bool.isRequired,
  navLinks: PropTypes.array.isRequired,
  onToggleNav: PropTypes.func.isRequired,
};

export default AppNavigation;
