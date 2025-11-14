// Icon.jsx
import Home from './Home';
import Insertchart from './insert_chart';
import Person from './person';
import Settings from './settings';
import Encrypted from './encrypted';
import Listalt from './list_alt';
import Export from './export';
import Notification from './notification';
import Newrequest from './new_request';
import Tableconfiguration from './configuration';
import Menu from './menu';
export default function Icon({ name, size = 20, color = "currentColor", ...props }) {
  const icons = {
    menu: <Menu size={size} color={color} />,
    home: <Home size={size} color={color} />,
    listAlt: <Listalt size={size} color={color} />,
    insertChart: <Insertchart size={size} color={color} />,
    person: <Person size={size} color={color} />,
    settings: <Settings size={size} color={color} />,
    encrypted: <Encrypted size={size} color={color} />,
    export: <Export size={size} color={color} />,
    notification: <Notification size={size} color={color} />,
    newRequest: <Newrequest size={size} color={color} />,
    configuration: <Tableconfiguration size={size} color={color} />,
  };

  return icons[name] || null;
}