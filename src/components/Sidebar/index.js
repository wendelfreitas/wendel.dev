import React from 'react';
import Avatar from '../Avatar';
import { links, networks } from './content';
import { Wrapper, Navigation, Social, Link, LinkItem } from './styles';
import { main } from '../../styles/themes';

const Sidebar = () => (
  <Wrapper>
    <Avatar />
    <Navigation>
      {links.map((link) => (
        <LinkItem key={link.id}>
          <Link
            cover
            to={link.url}
            aria-label={link.id}
            direction="up"
            bg={main.black}
            duration={0.6}
            partiallyActive={link.url === '/blog/'}
            activeClassName="active"
          >
            {link.icon}
          </Link>
        </LinkItem>
      ))}
    </Navigation>
    <Social>
      {networks.map((network) => (
        <a aria-label={network.id} key={network.id} href={network.url} target="__blank">
          {network.icon}
        </a>
      ))}
    </Social>
  </Wrapper>
);

export default Sidebar;
