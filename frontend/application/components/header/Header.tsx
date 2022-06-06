import { Location } from 'history';
import * as React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import * as css from './Header.module.scss';

interface IHeaderProps {
  location: Location;
}

const Header = ({ location }: IHeaderProps) => {
  const classes = [css.header];

  return (
    <header className={classes.join(' ')}>
      <nav>
        <ul>
          <a href="https://stabelo.se">
            <img
              src="https://s3.eu-central-1.amazonaws.com/static.stabelo.net.eu-central-1/Stabelo_logo_RGB.png"
              alt="Stabelo"
            />
          </a>

          <li>
            <Link
              className={location.pathname === '/about' ? css.active : ''}
              to="/about"
            >
              Om uppgiften
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === '/implementation' ? css.active : ''
              }
              to="/implementation"
            >
              Implementation
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter((props: RouteComponentProps) => (
  <Header {...props} />
));
