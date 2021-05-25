import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Navigation } from "../../components/navigation";
import { PageHeader } from "../../components/page-header";
import { catalogRoutes } from "../../routes/catalog";

const links = [
  {
    to: '/catalog/sport',
    label: 'Sport Goods'
  },
  {
    to: '/catalog/gadget',
    label: 'New Gadget'
  },
];

export const CatalogPage = () => {
  const { path: basePath } = useRouteMatch();
  return (
    <>
      <PageHeader>Catalog Page</PageHeader>
      <p>Here you can find all our amazing products</p>
      <Navigation links={links} />
      <Switch>
        {catalogRoutes.map(({ path, ...route }) => (
          <Route key={path} path={basePath + path} {...route} />
        ))}
      </Switch>
    </>
  );
}
