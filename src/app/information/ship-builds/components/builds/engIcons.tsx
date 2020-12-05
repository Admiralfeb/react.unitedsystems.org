import engineerIcon from '../../assets/Engineer_icon.svg';

export const EngIcons = (props: { engLevel: number }) => {
  let icons: JSX.Element[] = [];
  if (props.engLevel > 3 || props.engLevel < 1) {
    return (
      <div className="engineering">
        <p>Engineering Level: None</p>
      </div>
    );
  } else {
    for (let i = 1; i <= props.engLevel; i++) {
      icons = [
        ...icons,
        <img src={engineerIcon} key={i} alt="Engineering Icon" />,
      ];
    }
    return (
      <div className="engineering">
        <p>
          <span>Engineering Level:</span> {icons.map((icon) => icon)}
        </p>
      </div>
    );
  }
};
