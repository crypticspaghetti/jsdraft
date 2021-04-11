import { useActions } from "../hooks/use-actions";
import "./action-bar.css";
import ActionButton from "./action-button";

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();
  return (
    <div className="action-bar">
      <ActionButton
        onClick={() => moveCell(id, "up")}
        iconClass="fas fa-arrow-up"
      />
      <ActionButton
        onClick={() => moveCell(id, "down")}
        iconClass="fas fa-arrow-down"
      />
      <ActionButton onClick={() => deleteCell(id)} iconClass="fas fa-times" />
    </div>
  );
};

export default ActionBar;
