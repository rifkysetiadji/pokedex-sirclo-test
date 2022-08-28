import { memo, useState } from "react";
import { Modal, Select, Label, Button } from "flowbite-react";
import { TypeInterface } from "../../Hooks/useFilterData";
interface ModalProps {
  show: boolean;
  onClose: () => void;
  types: TypeInterface[];
  onApply: (d: TypeInterface) => void;
}
function ModalDetailPokemon(props: ModalProps) {
  const [type, setType] = useState<TypeInterface>();
  const { show, onClose, types, onApply } = props;

  return (
    <div>
      <Modal size="md" show={show} onClose={onClose}>
        <Modal.Header>Filter Pokemon</Modal.Header>
        <Modal.Body>
          <div className="">
            <div id="select">
              <div className="mb-2 block">
                <Label htmlFor="types" value="Select type pokemon" />
              </div>
              <Select
                id="types"
                onChange={(e) => {
                  let find = types.find((d) => {
                    return d.url === e.target.value;
                  });
                  setType(find);
                }}
              >
                {types.map((d: TypeInterface, i: number) => (
                  <option value={d.url} id={d.url} key={i}>
                    {d.name}
                  </option>
                ))}
              </Select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => onApply(type!)}>Apply</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default memo(ModalDetailPokemon);
