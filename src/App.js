import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import { store } from './store';
import UniversityListContainer from './components/UniversityListContainer';

function App() {
  return (
      <Provider store={store}>
        <UniversityListContainer />
      </Provider>
  );
}

export default App;
