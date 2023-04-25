import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton'

function DropDown() {
  return (
    <>
      <div className = 'mb-2'>
        {[DropdownButton, SplitButton].map((DropdownType, idx) => (
          <DropdownType
            as={ButtonGroup}
            key={idx}
            id={'dropdown-button-drop-${idx}'}
            size = "lg"
            title= "Genre"
          >
            <Dropdown.Item eventKey="1">Rock</Dropdown.Item>
            <Dropdown.Item eventKey="2">Hip-hop</Dropdown.Item>
            <Dropdown.Item eventKey="3">Blues</Dropdown.Item>
          </DropdownType>
        ))}
      </div>
      <div>
        {[DropdownButton, SplitButton].map((DropdownType, idx) => (
          <DropdownType
            as={ButtonGroup}
            key={idx}
            id={'dropdown-button-drop-${idx}'}
            size = 'lg'
            title = "Playlists"
            >
              <Dropdown.Item eventKey="1">Playlist 1</Dropdown.Item>
              <Dropdown.Item eventKey="2">Playlist 2</Dropdown.Item>
              <Dropdown.Item eventKey="3">Playlist 3</Dropdown.Item>
            </DropdownType>
        ))}
      </div>
    </>
  );
}


export default DropDown;
