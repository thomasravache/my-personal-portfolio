import { useState, useCallback } from 'react';
import navigationLinks from '../data/navigation';

const useNavigation = () => {
  const [firstNavigationElement] = navigationLinks;
  const [route, setRoute] = useState(firstNavigationElement);

  const setCurrentRoute = useCallback((routeOption) => {
    if (route === routeOption) return;
    setRoute(routeOption);
  }, [route]);

  return { currentRoute: route, setCurrentRoute };
}

export default useNavigation;
