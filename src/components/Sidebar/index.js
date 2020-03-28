import React from 'react';
import Avatar from '../Avatar';
import { links, networks } from './content';
import { Wrapper, Navigation, Social, Link, LinkItem } from './styles';

const Sidebar = () => (
  <Wrapper>
    <Avatar />
    <Navigation>
      {links.map((link) => (
        <LinkItem key={link.id}>
          <Link cover to={link.url} direction="up" bg="#181818" duration={0.6} activeClassName="active">
            {link.icon}
          </Link>
        </LinkItem>
      ))}
    </Navigation>
    <Social>
      {networks.map((network) => (
        <>{network.icon}</>
      ))}
    </Social>
  </Wrapper>
);

export default Sidebar;
