import styels from "../styles/Row.module.css";
import Square from "./Square";

export default function Row(props) {
  return (
    <div className={styels.row}>
      <Square p={props.p}/>
      <Square p={!props.p}/>
      <Square p={props.p}/>
      <Square p={!props.p}/>
      <Square p={props.p}/>
      <Square p={!props.p}/>
      <Square p={props.p}/>
      <Square p={!props.p}/>
    </div>
  );
}