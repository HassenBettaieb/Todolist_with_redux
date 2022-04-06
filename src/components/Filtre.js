import { DropdownButton, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filtreTask } from "../Redux/Actions/ActionsToList";
function Filtre() {
  const dispatch = useDispatch();
  return (
    <DropdownButton id="dropdown-basic-button" title="Filtre">
      <Dropdown.Item onClick={() => dispatch(filtreTask("all"))}>
        all
      </Dropdown.Item>
      <Dropdown.Item onClick={() => dispatch(filtreTask("done"))}>
        done
      </Dropdown.Item>
      <Dropdown.Item onClick={() => dispatch(filtreTask("undone"))}>
        un-done
      </Dropdown.Item>
    </DropdownButton>
  );
}
export default Filtre;
