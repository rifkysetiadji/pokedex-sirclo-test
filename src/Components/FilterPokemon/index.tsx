import { useState, memo } from "react";
import { TypeInterface } from "../../Hooks/useFilterData";
import ModalFilterPokemon from "../ModalFilterPokemon";
interface PropTypes {
  types: TypeInterface[];
  getFilterPokemon: (url: string) => void;
}
function FilterPokemon(props: PropTypes) {
  const { types, getFilterPokemon } = props;

  const [filter, setFilter] = useState<boolean>(false);
  const [selected_filter, setSelectedFilter] = useState<TypeInterface>();

  const onApply = (data: TypeInterface) => {
    setSelectedFilter(data);
    setFilter(false);

    getFilterPokemon(data.url);
  };

  return (
    <div>
      <ModalFilterPokemon
        show={filter}
        onClose={() => setFilter(false)}
        types={types}
        onApply={onApply}
      />{" "}
      <div className="mb-10 flex justify-center items-center gap-5">
        <h1>Filter Pokemon</h1>
        {selected_filter && (
          <div className="px-2 py-1 bg-gray-800 text-white">
            <p className="text-sm">{selected_filter.name}</p>
          </div>
        )}
        <svg
          onClick={() => setFilter(true)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </div>
    </div>
  );
}
export default memo(FilterPokemon);
