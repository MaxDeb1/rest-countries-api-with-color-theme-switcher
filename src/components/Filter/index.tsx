import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { handleRegion, selectRegion } from "../../redux/features/regionSlice";

import "./style.scss";

const Filter = () => {
  const node = useRef<HTMLDivElement>(null!);
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const close = (e: MouseEvent) => {
    const target = e.target as HTMLInputElement;
    if (node.current.contains(target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", close);
    return () => {
      document.removeEventListener("click", close);
    };
  }, [open]);

  const region: string = useSelector(selectRegion)
  const dispatch = useDispatch()
/*     console.log(region) */

  const options = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const option = options.map((option) => (
      <div
          key={options.indexOf(option)}
          className={`option ${region === option ? "selected" : null}`}
          onClick={() => dispatch(handleRegion(option)) }
      >
      {option}
      </div>
  ));


  return (
    <div className="dropdown">
      <div className="control" onClick={handleClick} ref={node}>
        <div className="selected-value">
          {region ? region : "Filter by Region"}
        </div>
        <div className={`arrow ${open ? "open" : null}`} />
        </div>
        <div className={`options ${open ? "open" : null}`}>
          {option}
        </div>
    </div>
  );
};

export default Filter;
