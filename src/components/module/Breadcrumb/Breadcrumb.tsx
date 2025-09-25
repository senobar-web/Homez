import {useTranslation} from 'react-i18next';
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';
import routes from '../../../../routes';
export default function Breadcrumb() {
  const {t} = useTranslation();
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav>
      <Link to="/" className="hover:underline text-xl  text-black ml-1.5">
        {t('breadcrumb.home')}
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const route = routes.find((r) => r.path === to || r.path.includes(`/${value}`));
        const routeNamekey: string = route?.nameKey || 'defaultValue';
        let crumbText = value;
        if (route && routeNamekey) {
          crumbText = t(routeNamekey);
        } else if (route && route.path.includes(':')) {
          const paramName = route.path.split('/').find((part) => part.startsWith(':'));
          if (paramName) {
            const paramValue = location.pathname.split('/')[index + 1];
            crumbText = `${t(routeNamekey)}:${paramValue}`;
          }
        }
        const decodedCrumbText = decodeURI(crumbText);
        return last ? (
          <>
            <span className="text-black "> / </span>
            <span key={to} className="text-black text-2xl mx-1.5">
              <span key={to}> {decodedCrumbText}</span>
            </span>
          </>
        ) : (
          <>
            <span className="text-black "> / </span>
            <span key={to}>
              <Link to={to} className="hover:underline text-xl mx-1.5">
                {decodedCrumbText}
              </Link>
            </span>
          </>
        );
      })}
    </nav>
  );
}
