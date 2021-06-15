import React from 'react';

import { lazy, useEffect, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { addBackToTop } from 'vanilla-back-to-top';

import Container from './components/Container';
import AppBar from './components/AppBar';
import LoaderComponent from './components/Loader';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "homePage-view" */),
);

const BirdPage = lazy(() =>
  import('./views/BirdPage' /* webpackChunkName: "birdPage-view" */),
);

const BuildingPage = lazy(() =>
  import('./views/BuildingPage' /* webpackChunkName: "buildingPage-view" */),
);

const WeatherPage = lazy(() =>
  import('./views/WeatherPage' /* webpackChunkName: "weatherPage-view" */),
);

const FavoritesPage = lazy(() =>
  import('./views/FavoritesPage' /* webpackChunkName: "weatherPage-view" */),
);

function App() {
  useEffect(() => {
    addBackToTop({
      backgroundColor: '#3F51B5',
    });
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <AppBar />
        <Suspense fallback={<LoaderComponent />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/birdPage" exact>
              <BirdPage />
            </Route>

            <Route path="/buildingPage" exact>
              <BuildingPage />
            </Route>

            <Route path="/weatherPage" exact>
              <WeatherPage />
            </Route>

            <Route path="/favoritesPage" exact>
              <FavoritesPage />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </BrowserRouter>
  );
}

export default App;
