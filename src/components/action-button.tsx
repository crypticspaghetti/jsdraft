interface ActionButtonProps {
  onClick: () => {};
  iconClass: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, iconClass }) => (
  <button className="button is-primary is-small" onClick={onClick}>
    <span className="icon">
      <i className={iconClass}></i>
    </span>
  </button>
);

export default ActionButton;
